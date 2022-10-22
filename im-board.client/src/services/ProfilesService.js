import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { GroupMemberShip } from "../models/GroupsAndGameNight/GroupMembership.js";
import { api } from "./AxiosService.js";

class ProfilesService {
  async getProfileLists(id) {
    const res = await api.get(`/profiles/boardgames/${id}`);
    // console.log(res.data, "getting profile lists");
    AppState.bgLists = res.data.map((b) => new BGList(b));
    // console.log(AppState.bgLists);
    // console.log(AppState.bgLists.account.name);
  }

  async getProfileGroups(id) {
    const res = await api.get(`/profiles/groups/${id}`);
    // console.log("getProfileGroups", res.data);
    // console.log(AppState.account.id);
    AppState.groupMemberShips = res.data.map((g) => new GroupMemberShip(g));
    // AppState.groups = res.data.map((g) => new Group(g));

    // console.log(AppState.groupMemberShips);
  }
  async getUserProfile(id) {
    const res = await api.get(`/profiles/${id}`);
    // console.log(res.data);
    AppState.activeProfile = new Account(res.data);
    // console.log(AppState.activeProfile);
  }

  async getProfiles(term){
    AppState.profiles =[]
        const res = await api.get(`/profiles`,{
          params: {
            query:term
          }
        });
    // console.log(res.data);
    AppState.profiles = res.data.map(p => new Account(p))
    console.log(AppState.profiles);
    
  }
}
export const profilesService = new ProfilesService();
