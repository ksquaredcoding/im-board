import { AppState } from '../AppState';
import { BGList } from '../models/BoardGame/BGList.js';
import { Group } from '../models/Group.js';
import { logger } from '../utils/Logger';
import { api } from './AxiosService';

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account');
      AppState.account = res.data;
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err);
    }
  }

  async getMyGroups() {
    const res = await api.get('/account/groups');

    // console.log('Account res.data:', res.data);
    // console.log(AppState.account.id);
    AppState.groups = res.data.map((g) => new Group(g));
    // console.log('AppState.groups:', AppState.groups);
  }

  async getMyLists() {
    const res = await api.get('/account/boardgames');
    // console.log(res.data, 'getting my lists');
    AppState.bgLists = res.data.map((b) => new BGList(b));
    console.log(AppState.bgLists);
  }
}

export const accountService = new AccountService();
