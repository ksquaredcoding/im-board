import { Auth0Provider } from "@bcwdev/auth0provider";
import { inboxService } from "../services/InboxService.js";
import BaseController from "../utils/BaseController.js";

export class InboxController extends BaseController {
  constructor() {
    super("/api/inbox");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getInbox)
      .post("", this.sendInvite)
      .delete("/:inboxId", this.deleteInvite);
  }

  async deleteInvite(req, res, next) {
    try {
      const invite = await inboxService.deleteInvite(
        req.userInfo.id,
        req.params.inboxId
      );
      res.send(invite);
    } catch (error) {
      next(error);
    }
  }
  async getInbox(req, res, next) {
    try {
      const inbox = await inboxService.getInbox(req.userInfo.id);
      res.send(inbox);
    } catch (error) {
      next(error);
    }
  }
  async sendInvite(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const invite = await inboxService.sendInvite(req.body);
      res.send(invite);
    } catch (error) {
      next(error);
    }
  }
}
