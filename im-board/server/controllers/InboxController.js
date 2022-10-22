import { Auth0Provider } from "@bcwdev/auth0provider";
import { inboxService } from "../services/InboxService.js";
import BaseController from "../utils/BaseController.js";

export class InboxController extends BaseController {
  constructor() {
    super("/api/inbox");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .delete("/account", this.clearInbox)
      .post("", this.sendInvite)
      .delete("/:inboxId", this.deleteInvite);
  }
  async clearInbox(req, res, next) {
    try {
      const inbox = await inboxService.clearInbox(req.userInfo.id);
      res.send(inbox);
    }catch (error) {
      next(error);
    }
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

  async sendInvite(req, res, next) {
    try {
      req.body.senderId = req.userInfo.id;
      const invite = await inboxService.sendInvite(req.body);
      res.send(invite);
    } catch (error) {
      next(error);
    }
  }
}
