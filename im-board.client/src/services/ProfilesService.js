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
    AppState.bgLists = AppState.bgLists.filter(l => l.listName == "favorite")
  }

  // async getListsByType(type = '', id) {
  //   let res
  //   if (type) {
  //     res = await api.get(`/profiles/boardgames/${id}`, {
  //       params: {
  //         type: type
  //       }
  //     })
  //   } else {
  //     res = await api.get(`/profiles/boardgames/${id}`)

  //   }
  //   AppState.bgLists = res.data.map((b) => new BGList(b));
  //   console.log(AppState.bgLists);
  // }


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
  // super("api/profiles");
  // this.router
  //   .get("", this.getProfiles)
  //   .get("/:id", this.getProfile)
  //   .get("/boardgames/:id", this.getProfileBoardGames)
  //   .get("/groups/:id", this.getProfileGroups);
  //
}
export const profilesService = new ProfilesService();
