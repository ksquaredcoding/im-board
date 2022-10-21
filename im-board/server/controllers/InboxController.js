import { Auth0Provider } from "@bcwdev/auth0provider";
import { inboxService } from "../services/InboxService.js";
import BaseController from "../utils/BaseController.js";

export class InboxController extends BaseController {
  constructor() {
    super("/api/inbox");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getInbox)
      .post("", this.sendInvite);
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
