import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupsService } from "./GroupsService.js";

class GroupMembersService {
  async kickMember(groupMemberId, accountId, body) {
    const member = await this.getGroupMemberById(groupMemberId);
    // @ts-ignore
    const group = await groupsService.getGroupById(member.groupId.toString());
    // @ts-ignore
    let isCreator = accountId == group.creatorId.toString();
    // @ts-ignore
    let isMember = member.accountId.toString() == accountId;
    if (!isCreator && !isMember) {
      throw new Forbidden("you can only remove yourself from a group");
    }
    if (isCreator && isMember) {
      group.creatorId = body.accountId;
      await group.save();
      // @ts-ignore
      await member.remove();
    }
    // TODO finish remove member
  }
  async addGroupMember(groupMemberData) {
    const group = await groupsService.getGroupById(groupMemberData.groupId);
    const groupMembers = await this.getGroupMembersByGroupId(
      groupMemberData.groupId
    );
    const alreadyMember = groupMembers.find(
      (g) => g.accountId == groupMemberData.accountId.toString()
    );
    if (alreadyMember) {
      throw new Forbidden("you are already apart of this group");
    }
    const newGroupMember = await dbContext.GroupMembers.create(groupMemberData);
    group.groupMemberIds.push(newGroupMember.id);
    await group.save();
    await newGroupMember.populate("account", "name picture");
    await newGroupMember.populate("group", "name");
    return newGroupMember;
  }
  async getGroupMembersByGroupId(groupId) {
    const groupMembers = await dbContext.GroupMembers.find({
      groupId,
    }).populate("account", "name picture");
    if (!groupMembers) {
      throw new BadRequest("bad group id");
    }
    return groupMembers;
  }
  async getGroupMemberById(id) {
    const member = await dbContext.GroupMembers.find({ id });
    if (!member) {
      throw new BadRequest("bad goldMemberId");
    }
    return member;
  }
  //
}
export const groupMembersService = new GroupMembersService();
