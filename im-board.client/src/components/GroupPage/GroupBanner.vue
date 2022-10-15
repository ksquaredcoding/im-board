<template>
  <div class="col-md-12 banner elevation-3">
    <div class="logicButtons">
      <button
        @click="addGroupMember()"
        class="btn btn-info btn-lg"
        v-if="!alreadyAMember"
      >
 
        Join Group
      </button>
      <button @click="leaveGroup()" class="btn btn-info btn-lg" v-else >
        Leave Group
      </button>
      <div class="">
        <!-- ------------ -->
        <button @click="removeGroup()" class="btn btn-danger btn-lg" v-if="groupOwner">
          Remove Group
        </button>
       <div v-else>
        
       </div>
       <!-- EDIT -->
       <div v-if="groupOwner">
        <button @click="editGroup()" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#groupForm">EDIT GROUP IMAGE</button>
        <GroupForm />
        
       </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        class="col-md-6 text-center bannerBg my-2 rounded text-light elevation-3"
      >
        <span class="name">{{ group?.name }}</span>

        <div>
          <span><small class="text-shadow">Members</small></span>
          <div
            class="d-flex justify-content-center align-items-center bg-c2 p-2 rounded-5 mb-2 groupMemberBar"
          >
            <img
              :src="g.profile.picture"
              :alt="g.profile.name"
              :title="g.profile.name"
              height="45"
              width="45"
              class="rounded-circle box-shadow mx-1 profile-img"
             v-for="g in groupMember" :key="g.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/reactivity';


import { ref } from 'vue';
import { AppState } from '../../AppState.js';
import { Account } from "../../models/Account.js";
import { ActiveGroup } from '../../models/ActiveGroup.js';
import { GroupMemberShip } from '../../models/GroupMembership.js';
import { groupMembersService } from "../../services/GroupMembersService.js";
import { groupsService } from '../../services/GroupsService.js';
import Pop from '../../utils/Pop.js';
import GroupForm from "./GroupForm.vue";

export default {
    props: {
        group: { type: ActiveGroup, required: true },
    },
    setup(props) {
        const editable = ref({});
        return {
            editable,
            groupMember: computed(() => AppState.groupMembers),
            alreadyAMember: computed(() => AppState.groupMembers.find(b=> b.accountId == AppState.account.id)),
            groupOwner: computed(() => props.group.creatorId == AppState.account.id),
        memberId: computed(()=> AppState.groupMembers.find(g=> g.accountId == AppState.account.id)),
            async removeGroup() {
                try {
                    if (!this.groupOwner) {
                        Pop.toast("Forbidden Not Your Group", "warning", "top-end", 1000);
                    }
                    const yes = await Pop.confirm();
                    if (!yes) {
                        return;
                    }
                    await groupsService.removeGroup(props.group.id);
                    Pop.success("Group Removed");
                }
                catch (error) {
                    Pop.error(error, "[removeGroupMember]");
                }
            },
            async addGroupMember() {
                try {
                    if (props.group.creatorId == AppState.account.id) {
                        Pop.error("Already made this group and are already part of it");
                    }
                    else {
                        
                        await groupMembersService.addGroupMember(props.group.id);
                        Pop.success(`You Joined ${props.group.name} !`);
                    }
                }
                catch (error) {
                    Pop.error(error, "[addMemberToGroup]");
                }
            },
            async leaveGroup() {
                try {
                    if (props.group.creatorId == AppState.account.id) {
                        Pop.error("Must Provide Another Members Info and Relinquish OwnerShip");
                    }
                    // console.log(this.memberId.id);
                    await groupMembersService.leaveGroup(this.memberId.id);
                    Pop.success(`Left ${props.group.name}`)
                }
                catch (error) {
                    Pop.error(error, "[leaveGroup]");
                }
            },
            async editGroup() {
                try {
                }
                catch (error) {
                    Pop.error(error, "[edit Group]");
                }
            }
        };
    },
    components: { GroupForm }
};
</script>
<style lang="scss" scoped>
.groupMemberBar {
  // box-shadow: inset 0 2px 5px 0 #082f46e8;;
  transition: 1s ease;
  margin-inline: 7rem;
}
.groupMemberBar:hover {
  transition: 1s ease;
  filter: brightness(120%);
}
.bannerBg {
  background-color: #2c2c2fd5;
}
.banner {
  background-size: cover;
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F448%2F448821.jpg&f=1&nofb=1&ipt=c82f7488813551ce7475226bda34e557ed75955562a742824dae6d417ad79a5e&ipo=images);
}
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px #2c2c2f, 0px 0px 5px #79bd9a;
  font-weight: bold;
  letter-spacing: 0.09rem;
  /* Second Color  in text-shadow is the blur */
}

.name {
  font-size: 45px;
}
</style>
