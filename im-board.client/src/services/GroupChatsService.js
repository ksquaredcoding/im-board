import { AppState } from "../AppState.js";
import { GroupChat } from "../models/GroupsAndGameNight/GroupChat.js";
import { api } from "./AxiosService.js";

class GroupChatsService {
  async getGroupChatsByGroupId(groupId) {
    const res = await api.get(`api/groupchats/${groupId}`);
    // console.log(res.data);
    AppState.groupChats = res.data.map((g) => new GroupChat(g));
    // console.log(AppState.groupChats);
  }
  async addGroupChat(chatData) {
    const res = await api.post(`api/groupchats/`, chatData);
    // console.log(res.data);
    // AppState.groupChats = [...AppState.groupChats, new GroupChat(res.data)];
    // console.log(AppState.groupChats);
  }
}
export const groupChatsService = new GroupChatsService();
