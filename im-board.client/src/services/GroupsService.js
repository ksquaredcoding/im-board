import { AppState } from '../AppState.js';
import { ActiveGroup } from "../models/ActiveGroup.js";
import { Group } from '../models/Group.js';
import { router } from "../router.js";
import { api } from './AxiosService.js';

class GroupsService {
  async getGroupById(groupId) {
    const res = await api.get(`/api/groups/${groupId}`);
    console.log('resData',res.data);
   AppState.activeGroup = new ActiveGroup(res.data)
        // console.log('appState',AppState.activeGroup);
  }
  async createGroup(groupData) {
    const res = await api.post('/api/groups', groupData);
    console.log(res);
    const newGroup = new Group(res.data)
    console.log(newGroup);
    // AppState.groups = [...AppState.groups, newGroup];
    // console.log(res.data);
    // AppState.activeGroup = newGroup
    // router.push({name:"Group",params:{id:newGroup.id}})
  }
  async removeGroup(groupId) {
    await api.delete(`api/groups/${groupId}`);
  }

  async addMember(groupData) {
    const res = await api.post('/api/groupmembers', groupData);
    console.log(res.data);
  }

  async getGroupMembers(groupId) {
    const res = await api.get(`api/groupmembers/${groupId}`);
    console.log(res.data);
  }
}
export const groupsService = new GroupsService();

// class GroupsService {
//   async getMyGroups(accountId) {
//     const groups = await dbContext.GroupMembers.find({ accountId }).populate(
//       'group',
//       'name picture'
//     );

//     if (!groups) {
//       throw new BadRequest('bad or invalid accountId');
//     }
//     return groups;
//   }
//   async removeGroup(groupId, accountId) {
//     const group = await this.getGroupById(groupId);
//     // @ts-ignore
//     if (group.creatorId.toString() !== accountId) {
//       throw new Forbidden('only the creator delete this group');
//     }

//     if (group.groupMemberIds.length > 1) {
//       throw new Forbidden('this group still has members!');
//     }
//     await group.remove();
//     return group;
//   }
//   async editGroup(groupData, accountId, groupId) {
//     const group = await this.getGroupById(groupId);
//     // @ts-ignore
//     if (group.creatorId.toString() !== accountId) {
//       throw new Forbidden('only the creator can edit this group');
//     }
//     group.name = groupData.name || group.name;
//     group.coverImg = groupData.coverImg || group.coverImg;
//     await group.save();
//     return group;
//   }
//   async createGroup(groupData) {
//     const groupTest = await dbContext.Groups.create(groupData);
//     await groupTest.populate('creator', 'name picture');
//     await groupMembersService.addGroupMember(groupTest.id, groupData.creatorId);
//     const newGroup = await this.getGroupById(groupTest.id);
//     return newGroup;
//   }
//   async getGroupById(id) {
//     const group = await dbContext.Groups.findById(id).populate(
//       'creator',
//       'name picture'
//     );
//     if (!group) {
//       throw new BadRequest('invalid Group ID');
//     }
//     return group;
//   }
// }
// export const groupsService = new GroupsService();
