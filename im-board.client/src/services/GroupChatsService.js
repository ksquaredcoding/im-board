import { api } from "./AxiosService.js";

class GroupChatsService {
  async getGroupChatsByGroupId(groupId) {
    const res = await api.get(`api/groupchats/${groupId}`);
    console.log(res.data);
  }
}
export const groupChatsService = new GroupChatsService();
