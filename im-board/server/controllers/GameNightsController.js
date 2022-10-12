import { Auth0Provider } from "@bcwdev/auth0provider";
import { gameNightsService } from "../services/GameNightsService.js";
import BaseController from "../utils/BaseController.js";

export class GameNightsController extends BaseController {
  constructor() {
    super("/api/gamenights");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:groupId", this.getGameNightsByGroupId);
  }
   async getGameNightsByGroupId(req, res, next){
    try{
      const gameNights = await gameNightsService.getGameNightsByGroupId(req.params.groupId)
   res.send(gameNights)
    }
    catch (error) {
    next(error)
    }
    }
}
