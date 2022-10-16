import { AppState } from '../AppState';
import { Account } from '../models/Account.js';
import { BGList } from '../models/BoardGame/BGList.js';
import { GroupMemberShip } from '../models/GroupMembership.js';
import { logger } from '../utils/Logger';
import { api } from './AxiosService';

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account');
      AppState.account = res.data;
    } catch (err) { }
  }
  async getUserProfile(id){
    const res = await api.get(`/account/${id}`)
    console.log(res.data);
    AppState.activeProfile = new Account(res.data)
    console.log(AppState.activeProfile);
  }

  async getMyGroups() {
    const res = await api.get(`/account/groups`);
    console.log('getMyGroups', res.data);
    console.log(AppState.account.id);
    // AppState.groupMemberShips = res.data.map((g) => new GroupMemberShip(g));
    // AppState.groups = res.data.map((g) => new Group(g));

    // console.log(AppState.groupMemberShips);
  }
  async getProfileGroups(id) {
    const res = await api.get(`/account/groups/${id}`);
    console.log('getProfileGroups', res.data);
    // console.log(AppState.account.id);
    // AppState.groupMemberShips = res.data.map((g) => new GroupMemberShip(g));
    // AppState.groups = res.data.map((g) => new Group(g));

    // console.log(AppState.groupMemberShips);
  }

  async getMyLists() {
    const res = await api.get(`/account/boardgames/`);
    console.log(res.data, 'getting my lists');
    // AppState.bgLists = res.data.map((b) => new BGList(b));
    // console.log(AppState.bgLists);
  }
  async getProfileLists(id) {
    const res = await api.get(`/account/boardgames/${id}`);
    console.log(res.data, 'getting profile lists');
    // AppState.bgLists = res.data.map((b) => new BGList(b));
    // console.log(AppState.bgLists);
    // console.log(AppState.bgLists.account.name);
  }

  async editAccount(formData) {
    const res = await api.put('/account', formData);
    AppState.account = new Account(res.data);
  }
}

export const accountService = new AccountService();
