import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService";
import BaseController from "../utils/BaseController";

export class AccountController extends BaseController {
  constructor() {
    super("account");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserAccount)
      // .get("/boardGame", this.getAccountBoardGames);
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo);
      res.send(account);
    } catch (error) {
      next(error);
    }
  }

  // TODO account boardGame
  // async getAccountBoardGames(req, res, next) {
  //   try {
  //     const example = await res.send();
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
