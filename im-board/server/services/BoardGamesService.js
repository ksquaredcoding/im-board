import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardGamesService {
  async find(accountId) {
    const games = await dbContext.BoardGames.find(g => accountId == g.accountId)
    return games
  }

  async findById(id) {
    const value = await dbContext.BoardGames.findById(id)
    if (!value) {
      throw new BadRequest('Invalid Id')
    }
    return value
  }
}

export const boardGamesService = new BoardGamesService()