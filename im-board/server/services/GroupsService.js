import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { gameNightsService } from "./GameNightsService.js";
import { groupChatsService } from "./GroupChatsService.js";
import { groupMembersService } from "./GroupMembersService.js";
class GroupsService {
  async getMyGroups(accountId) {
    // debugger
    const groups = await dbContext.GroupMembers.find({ accountId })
      .populate("group", "name coverImg groupMemberIds")
      .populate({
        path: "group",
        populate: { path: "creator", select: "name picture" },
      });
    // .populate("profile", "name picture");
    if (!groups) {
      throw new BadRequest("bad or invalid accountId");
    }
    return groups;
  }
  async removeGroup(groupId, accountId) {
    debugger;
    const group = await this.getGroupById(groupId);
    const member = await groupMembersService.getMemberForGroup(
      groupId,
      accountId
    );
    // const chats = await groupChatsService.getGroupChatsByGroupId(groupId);
    // const chats = await groupChatsService.getGroupChatsByGroupId(groupId)
    if (group.creatorId.toString() !== accountId) {
      throw new Forbidden("only the creator can delete this group");
    }

    // if (group.groupMemberIds.length > 1) {
    //   throw new Forbidden("this group still has members!");
    // }
    // @ts-ignore
    // if (chats) {
    //   await chats.deleteMany({ groupId });
    //   // @ts-ignore
    // }
    await groupChatsService.removeChatsByGroup(groupId);
    await member.remove();
    await group.remove();
    return group;
  }
  async editGroup(groupData, accountId, groupId) {
    const group = await this.getGroupById(groupId);
    // @ts-ignore
    if (group.creatorId.toString() !== accountId) {
      throw new Forbidden("only the creator can edit this group");
    }
    group.name = groupData.name || group.name;
    group.coverImg = groupData.coverImg || group.coverImg;
    await group.save();
    return group;
  }
  async createGroup(groupData) {
    const groupTest = await dbContext.Groups.create(groupData);
    await groupTest.populate("creator", "name picture");
    await groupMembersService.addGroupMember(groupTest.id, groupData.creatorId);
    const newGroup = await this.getGroupById(groupTest.id);
    return newGroup;
  }
  async getGroupById(id) {
    const group = await dbContext.Groups.findById(id).populate(
      "creator",
      "name picture"
    );
    if (!group) {
      throw new BadRequest("invalid Group ID");
    }
    return group;
  }
}
export const groupsService = new GroupsService();
