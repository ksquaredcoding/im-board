<template>
  <div v-if="!group" class="animate__animated animate__fadeOut">
    <div class="loader"></div>
  </div>
  <div class="group-page animate__animated animate__fadeInRight container-fluid" v-else>
    <div class="row justify-content-center">
      <GroupBanner class="mt-2 rounded" :group="group" />
      <div class="col-md-3">
        <div class=""></div>
        <div class="bg-dark rounded px-2 py-2 my-2 text-center m-3">
          <h4>Group Chat</h4>
        </div>

        <div class="col-12 ms-2 overflow-auto groupchatbox bg-dark">
          <div class="col-md-12" v-for="c in chats" :key="c.id">
            <Chat :chat="c" />
          </div>
        </div>
        <GroupChatInput />
      </div>
      <div class="col-md-5 overflow-auto gamecardbox mx-5">
        <div class="px-1">
          <GameNightCard v-for="g in gamenights" :gamenight="g" />
        </div>
      </div>

      <div class="col-md-3 overflow-auto gamecardbox bg-dark pt-2">
        <div class="bg-c1 rounded text-center pt-2 pb-1 mx-5">
          <h4>Group Games</h4>
        </div>

        <div v-for="g in lists" :key="g.id">
          <GroupGamesCard :boardGameList="g" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GroupChatCard from "../components/GroupPage/GroupChatCard.vue";
import GroupBanner from "../components/GroupPage/GroupBanner.vue";
import GameNightCard from "../components/GroupPage/GameNightCard.vue";
import GroupChatInput from "../components/GroupPage/GroupChatInput.vue";
import GroupGamesCard from "../components/GroupPage/GroupGamesCard.vue";
import Pop from "../utils/Pop.js";
import { groupsService } from "../services/GroupsService.js";
import { onMounted, watchEffect } from "vue";
import GroupForm from "../components/GroupPage/GroupForm.vue";
import { accountService } from "../services/AccountService.js";
import { AppState } from "../AppState.js";
import { AuthService } from "../services/AuthService.js";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import { groupMembersService } from "../services/GroupMembersService.js";
import { listsService } from "../services/ListsService.js";
import { groupChatsService } from "../services/GroupChatsService.js";
import Chat from "../components/GroupPage/Chat.vue";
import { gameNightsService } from "../services/GameNightsService.js";

export default {
  setup() {
    const route = useRoute();
    async function getGroupById() {
      try {
        await groupsService.getGroupById(route.params.id);
      } catch (error) {
        Pop.error(error, "[getGroupById]");
      }
    }

    async function getGroupMembersByGroupId() {
      try {
        await groupsService.getGroupMembers(route.params.id);
      } catch (error) {
        Pop.error(error, "[getGroupMemberByGroupId]");
      }
    }

    async function getListsByGroupId() {
      try {
        await listsService.getListsByGroupId(route.params.id);
      } catch (error) {
        Pop.error(error, "[getListsByGroupId]");
      }
    }
    async function getGroupChatsByGroupId() {
      try {
        await groupChatsService.getGroupChatsByGroupId(route.params.id);
      } catch (error) {
        Pop.error(error, "[getListsByGroupId]");
      }
    }
    async function getGroupGameNights() {
      try {
        await gameNightsService.getGroupGameNights(route.params.id);
      } catch (error) {

        Pop.error(error, '[groupGameNights]');
      }
    }

    onMounted(() => {
      getGroupById();
      getGroupMembersByGroupId();
      getListsByGroupId();
      getGroupChatsByGroupId();
      getGroupGameNights()
    });

    // ANCHOR this essentially works as an observer.. think 'AppState.on'
    // watchEffect(() => {
    //   AppState.account;
    //   getGroupById();
    //   getGroupMembersByGroupId();
    // });

    return {
      chats: computed(() => AppState.groupChats),
      group: computed(() => AppState.activeGroup),
      lists: computed(() => AppState.bgLists),
      account: computed(() => AppState.account),
      gamenights: computed(() => AppState.groupGameNights),
      groupOwner: computed(
        () => AppState.activeGroup.creatorId == AppState.account.id
      ),
      async createGroup() {
        try {
          await groupsService.createGroup();
        } catch (error) {
          Pop.error(error, "[createGroup]");
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
    Chat,
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.groupchatbox {
  height: 80vh;
}

.gamecardbox {
  height: 113vh;
}

* {
  font-family: 'Baloo 2', cursive;

}
</style>
