<template>
  <div class="bg-light pb-2 m-2 noborder bg-img" :style="{backgroundImage: `url(${boardGameList.imgUrl})`}">
    test

    <div class="row">


      <div class="col-md-2 ms-1">
        <i class="mdi mdi-account-group bg-dark fs-2 rounded-5 ps-2 pe-2" alt="search" title="search"></i>
      </div>

      <div class="col-md-7 d-flex justify-content-center ms-2">
        <div class="bg-c3 rounded-5 fs-5 text-center px-3 py-1 my-1">
          <b>{{boardGameList.boardGameName}}</b>
        </div>
      </div>


    </div>

    <div class="bg-c1 rounded mx-5 p-2 mt-2 text-center">
      <div><b>Categories:</b> </div>
      <div><b>Players:</b> {{boardGameList.players}}</div>
      <div><b>Rating:</b> {{boardGameList.rating.toFixed(2)}}</div>
    </div>

  </div>
</template>


<script>
import { BGList } from "../../models/BoardGame/BGList.js";

export default {
  props: {
    boardGameList: {
      type: BGList,
      required: true
    }
  },
  setup(props) {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.noborder {
  border: none
}

.bg-img {
  background-size: contain;
  background-position: center;
}
</style>