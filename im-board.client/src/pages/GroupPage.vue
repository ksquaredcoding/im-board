<template>
  <div class="group-page container-fluid" v-if="group">
    <div class="row">
      <GroupBanner class="mt-2 rounded" :group="group" />
      <div class="col-md-3 p-0">
        <div class=""></div>
        <div class="bg-dark rounded px-2 py-2 my-2 text-center m-3">
          <h4>Group Chat</h4>
        </div>

        <div class="col-12 p-2 overflow-auto groupchatbox">
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
          <GroupChatCard />
        </div>

        <div></div>
        <div></div>
        <GroupChatInput />
      </div>
      <div class="col-md-6 overflow-auto gamecardbox">
        <div class="px-1">
          <GameNightCard />
          <GameNightCard />
          <GameNightCard />
          <GameNightCard />
        </div>
      </div>

      <div class="col-md-3 overflow-auto gamecardbox bg-dark pt-2">
        <div class="bg-c1 rounded text-center pt-2 pb-1 mx-5">
          <h4>Group Games</h4>
        </div>
        <GroupGamesCard />
        <GroupGamesCard />
        <GroupGamesCard />
        <GroupGamesCard />
        <GroupGamesCard />
        <GroupGamesCard />
        <GroupGamesCard />
      </div>
    </div>
  </div>
</template>
<script>
import GroupChatCard from '../components/GroupPage/GroupChatCard.vue';
import GroupBanner from '../components/GroupBanner.vue';
import GameNightCard from '../components/GroupPage/GameNightCard.vue';
import GroupChatInput from '../components/GroupPage/GroupChatInput.vue';
import GroupGamesCard from '../components/GroupPage/GroupGamesCard.vue';
import Pop from '../utils/Pop.js';
import { groupsService } from '../services/GroupsService.js';
import { onMounted } from 'vue';
import GroupForm from '../components/GroupPage/GroupForm.vue';
import { accountService } from '../services/AccountService.js';
import { AppState } from '../AppState.js';
import { AuthService } from '../services/AuthService.js';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';

export default {
  setup() {
    const route = useRoute();
    async function getGroupById() {
      try {
        await groupsService.getGroupById(route.params.id);
      } catch (error) {
        Pop.error(error, '[getGroupById]');
      }
    }

    //TODO NEED TO FINISH
    async function getGroupMembersByGroupId() {
      try {
        await groupsService.getGroupMembers('634857a3901c93d70bdc7d8c');
      } catch (error) {
        Pop.error(error, '[getGroupMemberByGroupId]');
      }
    }

    onMounted(() => {
      getGroupById();
      // getGroupMembersByGroupId()
    });
    return {
      group: computed(() => AppState.activeGroup),

      async createGroup() {
        try {
          await groupsService.createGroup();
        } catch (error) {
          Pop.error(error, '[createGroup]');
        }
      },

      async addGroupMember() {
        try {
          if (!AppState.account.id) {
            return AuthService.loginWithPopup();
          } else {
            await groupsService.addMember({});
            Pop.success('Thanks for Joining!');
          }
        } catch (error) {
          Pop.error(error, '[addGroupMember]');
        }
      },
      //TODO FINISH
      async removeGroup() {
        try {
          const yes = await Pop.confirm();
          if (!yes) {
            return;
          }

          await groupsService.removeGroup();
          Pop.confirm('Group Removed');
        } catch (error) {
          Pop.error(error, '[removeGroupMember]');
        }
      },
    };
  },
  components: {
    GroupChatCard,
    GroupBanner,
    GameNightCard,
    GroupChatInput,
    GroupGamesCard,
    GroupForm,
  },
};
</script>
<style lang="scss" scoped>
.groupchatbox {
  height: 80vh;
}

.gamecardbox {
  height: 113vh;
}
</style>
