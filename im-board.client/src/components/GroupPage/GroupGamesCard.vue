<template>
  <div class="bg-light pb-2 my-2 mx-3 mx-md-0 noborder bg-img rounded hover"
    :style="{ backgroundImage: `url(${boardGameList.imgUrl})` }" :title="boardGameList.listName">
    <div class="row">
      <div class="col-md-2 ms-1 text-danger">
        <i class="mdi mdi-account-group text-start"></i>
      </div>

      <div class="col-md-7 d-flex justify-content-center ms-2">
        <div class="titlebox rounded-1 text-center px-3 py-1 my-1">

          <router-link class="text-center text-dark" :to="{
            name: 'BoardGameDetails',
            params: { id: boardGameList.gameId },
          }" title="go to this games detail's page">
            <b class="namefont">{{ boardGameList.boardGameName }}</b>
          </router-link>
        </div>
      </div>
      <div class="col-md-2" v-if="route.name == 'Account'">
        <i class="mdi mdi-close text-danger fs-3 text-end titlebox rounded selectable" title="remove game from list"
          @click="removeGameFromList()" v-if="account.id == boardGameList.accountId"></i>
      </div>
    </div>

    <div class="d-flex justify-content-center">
    <div class="categorybox rounded mx-5 p-2 px-5 mt-2 text-center">
      <div>
        <i class="mdi mdi-account-group fs-5" alt="" title=""></i>
        {{ boardGameList.players }}
      </div>

      <div>
        <i class="mdi mdi-star fs-5 text-c6" alt="" title=""></i>
        {{ boardGameList.rating.toFixed(2) }} <b>/</b> 5
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { AppState } from '../../AppState.js';
import { BGList } from '../../models/BoardGame/BGList.js';
import { GroupMembers } from '../../models/GroupsAndGameNight/GroupMember.js';
import { listsService } from '../../services/ListsService.js';
import Pop from '../../utils/Pop.js';

export default {
  props: {
    boardGameList: {
      type: BGList,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    return {
      route,
      member: computed(() => AppState.groupMembers),
      account: computed(() => AppState.account),
      async removeGameFromList() {
        try {
          const yes = await Pop.confirm('remove from this list?');
          if (!yes) {
            return;
          }
          // console.log(props.boardGameList.gameId, props.boardGameList.listId);
          await listsService.removeGameFromList(props.boardGameList.listId);
        } catch (error) {
          console.error('[RemoveGame]', error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.noborder {
  border: none;
}

.bg-img {
  background-size: cover;
  background-position: center;
}

.forcedImg {
  width: 60px;
  height: 60px;
}

.namefont {
  color: aliceblue;
  text-shadow: 1px 1px rgb(24, 24, 24), 0px 0px 5px #d8d8d8;
  font-family: 'Baloo 2', cursive;
}

.titlebox {
  background-color: #2c2c2ff0;
}

.categorybox {
  background-color: #e3e3e3f4;
  color: #2c2c2f;
}
</style>
