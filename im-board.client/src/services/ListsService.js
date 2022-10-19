import { AppState } from "../AppState.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { api } from "./AxiosService.js";

class ListsService {
  async addGameToList(gameData) {
    const res = await api.post("api/boardgames", gameData);
    // console.log(res.data);
    AppState.bgLists = [...AppState.bgLists, new BGList(res.data)];
  }
  async getListsByGroupId(groupId) {
    const res = await api.get(`api/boardgames/${groupId}`);
    console.log(res.data);
    AppState.bgLists = res.data.map((b) => new BGList(b));

    const count = [];

    AppState.bgLists.forEach((b) => {
      if (count.find((c) => c.gameId == b.gameId)) {
        let hi = count.findIndex((c) => c.gameId == b.gameId);
        count.splice(hi, 1);
      }
      delete b.accountId;
      delete b.addedToListAt
      count.push(b);
    });
    AppState.groupFilteredLists = count;
    console.log(AppState.groupFilteredLists);
  }

  async removeGameFromList(listId) {
    await api.delete(`api/boardgames/${listId}`);

    AppState.bgLists = AppState.bgLists.filter((b) => b.listId != listId);
  }
}

export const listsService = new ListsService();
