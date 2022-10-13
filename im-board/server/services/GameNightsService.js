import { dbContext } from "../db/DbContext.js";
import { Forbidden } from "../utils/Errors.js";
import { groupMembersService } from "./GroupMembersService.js";
import { groupsService } from "./GroupsService.js";

class GameNightsService {
  async createGameNight(gameNightData, accountId) {
    // gameNightData -= gameNightData.gameId;
    const group = await groupsService.getGroupById(gameNightData.groupId);
    // const members = group.groupMemberIds.filter(g => g.toString() == accountId)
    // if (members.length = 0) {
    //   throw new Forbidden("You've got to be in a group to create a game night.")
    // }
    const isMember = await groupMembersService.getMemberForGroup(
      group.id,
      accountId
    );

    if (!isMember) {
      throw new Forbidden("you must be in the group to create a game night!");
    }
    const gameNight = await dbContext.GameNights.create(
      group.id,
      gameNightData
    );
    return gameNight;
  }
  async getGameNightsByGroupId(groupId) {
    const gameNights = await dbContext.GameNights.find({ groupId });
    // TODO populate on anything???
    return gameNights;
  }
  //
}
export const gameNightsService = new GameNightsService();
