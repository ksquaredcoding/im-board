import { AppState } from "../AppState.js";
import { GameNight } from "../models/GroupsAndGameNight/GameNight.js";
import Pop from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class GameNightsService {
  async getGroupGameNights(id) {
    const res = await api.get(`/api/gamenights/${id}`);
    console.log(res.data);
    AppState.groupGameNights = res.data.map(n => new GameNight(n))
    console.log(AppState.groupGameNights);
  }
  async attendGamenight(gamenightId) {
    const gamenight = AppState.groupGameNights.find(g => g.id == gamenightId)
    if (!gamenight) {
      Pop.error('Bad or Invalid GameNight Id')
    }
    await api.put(`api/gamenights/${gamenightId}`)
    const gamenightIndex = AppState.groupGameNights.findIndex(g => g.id.toString() == gamenightId)
    const res = api.get(`api/gamenights/upcoming/${gamenightId}`)
    // const newGamenight = new GameNight(res.data)
    console.log(res.data);
    // console.log(newGame);
    // AppState.groupGameNights.splice(gamenightIndex, 1, newGamenight)
  }
}
export const gameNightsService = new GameNightsService();
