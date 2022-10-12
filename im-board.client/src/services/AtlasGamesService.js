import { AppState } from "../AppState.js";
import { atlasApi } from "./AxiosService.js";
import { BoardGame } from "../models/BoardGame.js";
//  client_id: '2I6DeypMLL';
class AtlasGamesService {
  //fuzzy_match
  async getBoardGames() {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit: 20,
      },
    });
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
    // console.log(res.data);
    // console.log(AppState.boardgames);
  }

  async getBoardGamesByCategories(categories = '') {
    console.log(categories);
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        categories: categories,
      },
    });
    console.log(res.data);
 
  }

  //REVIEW https://api.boardgameatlas.com/api/search?client_id=2I6DeypMLL&ids=TAAifFP590
  async getBoardGameDetailsById(id) {
    const res = await atlasApi.get(`/api/search?${id}`, {
      params: {
        client_id: "2I6DeypMLL",
        ids: id,
      },
    });
    console.log(res.data.games);
    AppState.activeBoardGame = new BoardGame(res.data.games[0])
    console.log(AppState.activeBoardGame);
  }
 
}
export const atlasGamesService = new AtlasGamesService();
