import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardGamesService {
  async getBoardGamesByAccountId(accountId) {
    const games = await dbContext.BoardGames.find({ accountId }).populate('Account', 'name picture')
    return games
  }

  async getBoardGameById(id) {
    const boardGame = await dbContext.BoardGames.findById(id)
    if (!boardGame) {
      throw new BadRequest('Invalid BoardGame Id')
    }
    return boardGame
  }

  async addBoardGameToList(boardGameData) {
    const game = await dbContext.BoardGames.create(boardGameData)
    await game.populate('Account', 'name picture')
    return game
  }

  async deleteBoardGameFromList(boardGameId) {
    const game = await dbContext.BoardGames.findById(boardGameId)
    await game.remove()
    return game
  }
}

export const boardGamesService = new BoardGamesService()