import { AppState } from "../AppState.js";
import { GameNight } from "../models/GroupsAndGameNight/GameNight.js";
import { api } from "./AxiosService.js";

class GameNightsService {
  async getGroupGameNights(id) {
    const res = await api.get(`/api/gamenights/${id}`);
    console.log(res.data);
    AppState.groupGameNights =  res.data.map(n => new GameNight(n))
    console.log(AppState.groupGameNights);
  }
}
export const gameNightsService = new GameNightsService();
