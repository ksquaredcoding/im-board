import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupMembersService } from "./GroupMembersService.js";

class GroupChatService {
  async removeGroupChat(groupChatId, accountId) {
    // @ts-ignore
    const chat = await this.getGroupChatById(groupChatId);
    // @ts-ignore
    let groupId = chat.groupId;
    const isMember = await groupMembersService.getMemberForGroup(
      groupId,
      accountId
    );
    if (!isMember) {
      throw new Forbidden("please join the group to chat!");
    }
    // @ts-ignore
    if (chat.creatorId.tostring() != accountId) {
      throw new BadRequest("not your groupChat");
    }
    // @ts-ignore
    await chat.remove();
    return chat;
  }
  async getGroupChatById(id) {
    const chat = await dbContext.GroupChats.find({ id });
    if (!chat) {
      throw new BadRequest("bad or invalid chatId");
    }
    return chat;
  }
  async addGroupChat(groupChatData) {
    // debugger
    const isMember = await groupMembersService.getMemberForGroup(
      groupChatData.groupId,
      groupChatData.creatorId
    );
    if (!isMember) {
      throw new Forbidden("you walked into my trap-card, please join my group first");
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
