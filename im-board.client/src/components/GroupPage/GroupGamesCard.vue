<template>
  <div class="bg-light pb-2 m-2 noborder bg-img rounded hover"
    :style="{backgroundImage: `url(${boardGameList.imgUrl})`}" :title="boardGameList.listName">

    <div class="row">


      <div class="col-md-2 ms-1 text-danger">
        <!-- <i class="mdi mdi-account-group bg-dark fs-2 rounded-5 ps-2 pe-2" alt="search" title="games in group"></i> -->
        <i class="mdi mdi-star" v-if="boardGameList.listName == 'favorite' "></i>
        <i class="mdi mdi-square" v-else-if="boardGameList.listName == 'owned'"></i>
        <i class="mdi mdi-circle" v-else></i>
      </div>

      <div class="col-md-7 d-flex justify-content-center ms-2">
        <div class="titlebox rounded-1 fs-5 text-center px-3 py-1 my-1">

          <router-link class="text-center text-dark"
            :to="{ name: 'BoardGameDetails', params: { id: boardGameList.gameId} }"
            title="go to this games detail's page">
            <b class="namefont">{{boardGameList.boardGameName}}</b>
          </router-link>
        </div>
      </div>

      <!-- <div class="d-flex justify-content-center">
        <img :src="m.profile?.picture" alt="" v-for="m in member" :title="m.profile?.name"
          class="rounded-circle forcedImg">
      </div> -->

    </div>

    <div class="categorybox border border-dark border-3 rounded mx-5 p-2 mt-2 text-center">
      <!-- <div><b>Categories:</b></div> -->
      <div><i class="mdi mdi-account-group fs-5" alt="" title=""></i> {{boardGameList.players}}</div>
      <!-- <div><i class="mdi mdi-clock fs-5" alt="" title=""></i> {{boardGameList.playTime}} mins</div> -->
      <div><i class="mdi mdi-star fs-5" alt="" title=""></i> {{boardGameList.rating.toFixed(2)}} <b>/</b> 5</div>
    </div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
import { BGList } from "../../models/BoardGame/BGList.js";
import { GroupMembers } from "../../models/GroupsAndGameNight/GroupMember.js";

export default {
  props: {
    boardGameList: {
      type: BGList,
      required: true
    },
    // groupMember: {
    //   type: GroupMembers,
    //   required: true

    // }
  },
  setup(props) {
    return {
      member: computed(() => AppState.groupMembers)
    }
  }
}
</script>


<style lang="scss" scoped>
.noborder {
  border: none
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
  font-family: "Baloo 2", cursive;
}

.titlebox {
  background-color: #2c2c2ff0;
}

.categorybox {
  background-color: #e3e3e3f4;
  color: #2c2c2f;
}

// .cardmain:hover{
//       transform: scale(1.09);
//       filter: brightness(110%);
//       filter: contrast(110%);
//       transition: 0.75s ease;

// }
</style>