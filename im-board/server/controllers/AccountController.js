import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService";
import { boardGamesService } from "../services/BoardGamesService.js";
import { groupsService } from "../services/GroupsService.js";
import { profileService } from "../services/ProfileService.js";
import BaseController from "../utils/BaseController";

export class AccountController extends BaseController {
  constructor() {
    super("/account");
    this.router
    // .get("/:accountId", this.getUserProfile)
    // .get("/boardgames/:id", this.getProfileBoardGames)
    // .get("/groups/:id", this.getProfileGroups)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserAccount)
      .get("/boardgames", this.getAccountLists)
      .get("/groups", this.getAccountGroups)
      .put("", this.editMyAccount);
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo);
      res.send(account);
    } catch (error) {
      next(error);
      //
    }
  }
  async getUserProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.accountId);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async getAccountLists(req, res, next) {
    try {
      const lists = await boardGamesService.getBoardGamesByAccountId(
        req.userInfo.id
      );
      res.send(lists);
    } catch (error) {
      next(error);
    }
  }
  async getAccountGroups(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const groups = await groupsService.getMyGroups(req.body.accountId);
      res.send(groups);
    } catch (error) {
      next(error);
    }
  }

  // TODO account boardGame
  async getProfileBoardGames(req, res, next) {
    try {
      const boardGames = await boardGamesService.getBoardGamesByAccountId(
        req.params.id
      );
      res.send(boardGames);
    } catch (error) {
      next(error);
    }
  }
  async getProfileGroups(req, res, next) {
    try {
      const groups = await groupsService.getMyGroups(req.params.id);
      res.send(groups);
    } catch (error) {
      next(error);
    }
  }
  async editMyAccount(req, res, next) {
    try {
      const account = await accountService.updateAccount(
        req.userInfo,
        req.body
      );
      res.send(account);
    } catch (error) {
      next(error);
    }
  }
}
