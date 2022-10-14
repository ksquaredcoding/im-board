// @ts-nocheck
import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupMembersService } from "./GroupMembersService.js";
import { groupsService } from "./GroupsService.js";

class GameNightsService {
  async attendGameNight(userId, gameNightId) {
    const gameNight = await dbContext.GameNights.findById(gameNightId);
    if (!gameNight) {
      throw new BadRequest("bad GameNightId");
    }

    const groupMembers = await groupMembersService.getGroupMembersByGroupId(
      gameNight.groupId
    );
    const groupMember = groupMembers.find(
      (g) => g.accountId.toString() == userId
    );
    // let isMember = await groupMembersService.getMemberForGroup

    // @ts-ignore
    let attending = gameNight.groupMemberIdsAttending.find(
      (m) => m.accountId == groupMember.accountId.toString()
    );
    // TODO why is this an array within an array?!
    if (!attending) {
      // @ts-ignore
      gameNight.groupMemberIdsAttending.push(groupMember);
      await gameNight.save();
      return gameNight;
    }
    gameNight.groupMemberIdsAttending =
      // @ts-ignore
      gameNight.groupMemberIdsAttending.filter((m) => m.accountId.toString() !== groupMember.accountId.toString());
    await gameNight.save();
    return gameNight;
  }
  async createGameNight(gameNightData, accountId) {
    // gameNightData -= gameNightData.gameId;
    // debugger;
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
      // group.id,
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
