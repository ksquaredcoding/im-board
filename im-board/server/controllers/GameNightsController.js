import { Auth0Provider } from "@bcwdev/auth0provider";
import { gameNightsService } from "../services/GameNightsService.js";
import BaseController from "../utils/BaseController.js";

export class GameNightsController extends BaseController {
  constructor() {
    super("/api/gamenights");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:groupId", this.getGameNightsByGroupId)
      .post("", this.createGameNight)
  }
  async getGameNightsByGroupId(req, res, next) {
    try {
      const gameNights = await gameNightsService.getGameNightsByGroupId(req.params.groupId)
      res.send(gameNights)
    }
    catch (error) {
      next(error)
    }
  }
  async createGameNight(req, res, next) {
    try {
      const gameNight = await gameNightsService.createGameNight(req.body, req.userInfo.id)
      res.send(gameNight)
    } catch (error) {
      next(error)
    }
  }
}
