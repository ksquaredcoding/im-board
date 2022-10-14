import { api } from "./AxiosService.js";

class GroupMembersService {
  async addGroupMember(groupId) {
   
    const res = await api.post('/api/groupmembers', groupId);
    console.log(res.data);
  }
}
export const groupMembersService = new GroupMembersService()