import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";
import { groupMembersService } from "./GroupMembersService.js";

class BoardGamesService {
  async getListByGroupId(groupId) {
    const accounts = await groupMembersService.getGroupMembersByGroupId(
      groupId
    );
    const lists = await dbContext.BoardGames.find({
      accountId: accounts.map((g) => g.accountId), type: 'owned'
    });
    return lists;
    // return accounts;
  }
  async getBoardGamesByAccountId(accountId) {
    const games = await dbContext.BoardGames.find({ accountId }).populate(
      "account",
      "name picture"
    );
    return games;
  }

  async getBoardGameById(id) {
    const boardGame = await dbContext.BoardGames.findById(id);
    if (!boardGame) {
      throw new BadRequest("Invalid BoardGame Id");
    }
    return boardGame;
  }

  async addBoardGameToList(boardGameData) {
    const accountGames = await this.getBoardGamesByAccountId(
      boardGameData.accountId
    );
    const newGame = accountGames.find(
      (g) => g.gameId == boardGameData.gameId && g.type == boardGameData.type
    );
    if (newGame) {
      throw new BadRequest(
        "You can only add 1 of each game to each type of list."
      );
    }
    const game = await dbContext.BoardGames.create(boardGameData);
    await game.populate("account", "name picture");
    return game;
  }

  async removeBoardGameFromList(boardGameId, accountId) {
    const game = await this.getBoardGameById(boardGameId);
    // @ts-ignore
    if (accountId !== game.accountId.toString()) {
      throw new Forbidden("You can only delete games from your own account.");
    }
    await game.remove();
    return game;
  }
}

export const boardGamesService = new BoardGamesService();
