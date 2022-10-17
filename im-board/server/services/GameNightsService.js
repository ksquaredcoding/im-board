// @ts-nocheck
import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupMembersService } from "./GroupMembersService.js";
import { groupsService } from "./GroupsService.js";
import { profileService } from "./ProfileService.js";

class GameNightsService {
  async removeGameNightsByGroup(groupId) {
    let gameNights = await dbContext.GameNights.find({ groupId }).remove();
    return gameNights;
  }
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

    const member = await dbContext.GroupMembers.find({
      accountId: groupMember.accountId.toString(),
      groupId: groupMember.groupId.toString(),
    }).populate("profile", "name picture");

    const thisMember = await groupMembersService.getMemberForGroup();

    // @ts-ignore
    let attending = gameNight.groupMemberIdsAttending.find(
      (m) => m.accountId == groupMember.accountId.toString()
    );
    // TODO why is this an array within an array?!
    if (!attending) {
      // @ts-ignore
      gameNight.groupMemberIdsAttending.push(member);
      await gameNight.save();
      return gameNight;
    }
    gameNight.groupMemberIdsAttending =
      // @ts-ignore
      gameNight.groupMemberIdsAttending.filter(
        (m) => m.accountId.toString() !== groupMember.accountId.toString()
      );
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
    const gameNight = await dbContext.GameNights.create(gameNightData);
    const newGameNight = await this.attendGameNight(accountId, gameNight.id);
    // const newGameNight = await dbContext.GameNights.find
    return newGameNight;
  }
  async getGameNightsByGroupId(groupId) {
    const gameNights = await dbContext.GameNights.find({ groupId });
    // TODO populate on anything???
    return gameNights;
  }
  //
}
export const gameNightsService = new GameNightsService();
