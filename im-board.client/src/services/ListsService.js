import { api } from "./AxiosService.js"

class ListsService {
  async addGameToList(gameData) {
    const res = await api.post('api/boardgames', gameData)
    console.log(res.data);
  }
}

export const listsService = new ListsService()