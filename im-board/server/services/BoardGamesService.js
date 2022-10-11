import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardGamesService {
  async find(query = {}) {
    const values = await dbContext.Values.find(query)
    return values
  }

  async findById(id) {
    const value = await dbContext.Values.findById(id)
    if (!value) {
      throw new BadRequest('Invalid Id')
    }
    return value
  }
}

export const boardGamesService = new BoardGamesService()