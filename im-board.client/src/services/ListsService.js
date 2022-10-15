import { AppState } from "../AppState.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { api } from "./AxiosService.js";

class ListsService {
  async addGameToList(gameData) {
    const res = await api.post("api/boardgames", gameData);
    console.log(res.data);
  }
  async getListsByGroupId(groupId) {
    const res = await api.get(`api/boardgames/${groupId}`);
    console.log(res.data);
    AppState.bgLists = res.data.map((b) => new BGList(b));
    // console.log(AppState.bgLists);
  }
}

export const listsService = new ListsService();
