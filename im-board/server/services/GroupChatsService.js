import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupMembersService } from "./GroupMembersService.js";

class GroupChatService {
  async removeGroupChat(groupChatId, accountId) {
    const chat = await dbContext.GroupChats.find({ id: groupChatId });
    if (!chat) {
      throw new BadRequest("bad or invalid chatId");
    }
    // @ts-ignore
    let groupId = chat.groupId;
    const group = await dbContext.Groups.find({ id: groupId });
    // @ts-ignore
    const isMember = await groupMembersService.getMemberForGroup(group.id);
    // const iscreator
  }
  async addGroupChat(groupChatData) {
    const isMember = await groupMembersService.getMemberForGroup(
      groupChatData.groupId,
      groupChatData.creatorId
    );
    if (!isMember) {
      throw new Forbidden("you walked into my trap-card");
    }
    const chat = await dbContext.GroupChats.create(groupChatData);
    await chat.populate("creator", "name picture");
    return chat;
  }
  async getGroupChatsByGroupId(groupId) {
    const chats = await dbContext.GroupChats.find({ groupId }).populate(
      "creator",
      "name picture"
    );
    if (!chats) {
      throw new BadRequest("no chats here");
    }
    return chats;
  }
  //
}
export const groupChatsService = new GroupChatService();
