import { Auth0Provider } from "@bcwdev/auth0provider";
import { groupChatsService } from "../services/GroupChatsService.js";
import BaseController from "../utils/BaseController.js";

export class GroupChatsController extends BaseController {
  constructor() {
    super("/api/groupchats");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:groupId", this.getGroupChatsByGroupId)
      .post("", this.addGroupChat);
  }
  async getGroupChatsByGroupId(req, res, next) {
    try {
      const chats = await groupChatsService.getGroupChatsByGroupId(
        req.params.groupId
      );
      res.send(chats);
    } catch (error) {
      next(error);
    }
  }
  async addGroupChat(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const chat = await groupChatsService.addGroupChat(req.body);
      res.send(chat);
    } catch (error) {
      next(error);
    }
  }
}
