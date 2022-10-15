import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import { ActiveGroup } from '../models/ActiveGroup.js';
import { Group } from '../models/Group.js';
import { GroupMemberShip } from '../models/GroupMembership.js';
import { router } from '../router.js';
import { api } from './AxiosService.js';

class GroupsService {
  async getGroupById(groupId) {
    const res = await api.get(`/api/groups/${groupId}`);
    console.log('resData', res.data);
    AppState.activeGroup = new ActiveGroup(res.data);
    console.log('appState', AppState.activeGroup);
  }
  async createGroup(groupData) {
    const res = await api.post('/api/groups', groupData);
    console.log(res.data);
    const group = new Group(res.data);
    

    AppState.activeGroup = group;
    router.push({ name: 'Group', params: { id: group.id } });
    // AppState.groups = [...AppState.groups, group];

    // AppState.activeGroup = group;
  }
  async removeGroup(groupId) {
    await api.delete(`api/groups/${groupId}`);

    //Filter from Account Page populating groupMemberships
    AppState.groupMemberShips = AppState.groupMemberShips.filter(
      (g) => g.groupId != groupId
    );

    // AppState.groups = AppState.groups.filter(g=> g.id != groupId)
    router.push({ name: 'Account' });
  }

  async editGroup(groupId) {
    const res = await api.put(`api/groups/${groupId}`);
    console.log(res.data);
    AppState.activeGroup = new GroupMemberShip(res.data);
  }

  async getGroupMembers(groupId) {
    const res = await api.get(`api/groupmembers/${groupId}`);
    // console.log(res.data);
    AppState.groupMembers = res.data.map((g) => new Account(g.profile));
    console.log(AppState.groupMembers);
  }
}
export const groupsService = new GroupsService();
