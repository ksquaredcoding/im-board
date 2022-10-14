import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { api } from "./AxiosService.js";

class GroupMembersService {
  async addGroupMember(groupId) {
   
    const res = await api.post('/api/groupmembers', groupId);
  AppState.groupMembers = new Account(res.data)
  console.log(AppState.groupMembers);
  }

  async leaveGroup(groupMemberId){


  await api.delete(`api/groupmembers/${groupMemberId}`)
  AppState.groupMembers = AppState.groupMembers.filter(g => g.id != groupMemberId)
  }
 
}
export const groupMembersService = new GroupMembersService()