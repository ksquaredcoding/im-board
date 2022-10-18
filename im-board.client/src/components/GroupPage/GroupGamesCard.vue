<template>
  <div class="bg-light pb-2 m-2 noborder bg-img rounded" :style="{backgroundImage: `url(${boardGameList.imgUrl})`}">

    <div class="row">


      <div class="col-md-2 ms-1">
        <!-- <i class="mdi mdi-account-group bg-dark fs-2 rounded-5 ps-2 pe-2" alt="search" title="games in group"></i> -->
      </div>

      <div class="col-md-7 d-flex justify-content-center ms-2">
        <div class="bg-dark rounded-1 fs-5 text-center px-3 py-1 my-1">

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

    <div class="bg-c2 border border-dark border-3 rounded mx-5 p-2 mt-2 text-center">
      <div><b>Categories:</b></div>
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

.namefont{
  color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px #79bd9a; 
    font-family: "Baloo 2", cursive;
}
</style>