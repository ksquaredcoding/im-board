import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import { GroupMembers } from '../models/GroupMember.js';
import { api } from './AxiosService.js';

class GroupMembersService {
  async addGroupMember(groupId) {
    const res = await api.post('/api/groupmembers', { groupId });

    AppState.groupMembers = [
      new GroupMembers(res.data),
      ...AppState.groupMembers,
    ];
    console.log(AppState.groupMembers);
  }

  async leaveGroup(groupMemberId) {
    const res = await api.delete(`api/groupmembers/${groupMemberId}`);
    console.log(res.data);
    AppState.groupMembers = AppState.groupMembers.filter(
      (g) => g.id !== groupMemberId
    );
    // AppState.groupMembers = AppState.groupMembers.filter(
    //   (g) => g.id != groupMemberId
    // );
  }
}
export const groupMembersService = new GroupMembersService();
