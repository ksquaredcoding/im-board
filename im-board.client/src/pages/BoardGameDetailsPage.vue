<template>
  <section class="container-fluid px-5" v-if="boardGame">
    <div class="row">
      <div class="col-12 bg-c4 text-center my-3 py-3 rounded">
        <h1>{{boardGame.name}}</h1>
      </div>
      <!-- <div class="col-6 game-img" :style="{backgroundImage: `url(${boardGame.coverImg})`}">
      </div> -->
      <div class="col-md-6">
        <img :src="boardGame.coverImg" alt="" class="image-fluid">
      </div>
      <div class="col-6">
        <div class="d-flex">
          <b>Number of players : </b>
          <p>{{boardGame.players}}</p>
        </div>
        <div class="d-flex">
          <b> Playtime:</b>
          <p>{{boardGame.playtime}}</p>
        </div>
        <div class="d-flex">
          <b>Ages:</b>
          <p>{{boardGame.min_age}}+</p>
        </div>
        <div class="d-flex">
          <b>Categories:</b>
          <p>dummy data</p>
        </div>
        <div class="d-flex">
          <b>Primary Publisher:</b>
          <p>{{boardGame.primary_publisher}}</p>
        </div>
        <div class="text-center mt-1">
          <b>Average User Rating:</b>
          <p>{{boardGame.average_user_rating}}</p>
        </div>
        <div class="text-center">
          <b>Add to list</b>
        </div>
        <div class="justify-content-center d-flex gap-4">
          <button class="btn list-button"><i class="mdi mdi-plus"></i>Favorite</button>
          <button class="btn list-button"><i class="mdi mdi-plus"></i>Owned</button>
          <button class="btn list-button"><i class="mdi mdi-plus"></i>Wishlist</button>
        </div>
      </div>
      <div v-for="i in images" :key="i.id">
        <ActiveBoardGameImages :images="i" />
      </div>
    </div>
  </section>
</template>


<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from "../utils/Pop.js";
import ActiveBoardGameImages from "../components/ActiveBoardGameImages.vue";

export default {
  setup() {
    // const route = useRoute();
    async function getBoardGameDetailsById() {
      try {
        await atlasGamesService.getBoardGameDetailsById("TAAifFP590");
      }
      catch (error) {
        console.error("[]", error);
        Pop.error(error);
      }
    }

    async function getBoardGameImagesByGameId() {
      try {
        await atlasGamesService.getBoardGameImagesByGameId("TAAifFP590");
      }
      catch (error) {
        console.error("[]", error);
        Pop.error(error);
      }
    }

    async function getBoardGamePricesByGameId() {
      try {
        await atlasGamesService.getBoardGamePricesByGameId("TAAifFP590");
      }
      catch (error) {
        console.error("[]", error);
        Pop.error(error);
      }
    }
    async function getBoardGameVideosByGameId() {
      try {
        await atlasGamesService.getBoardGameVideosByGameId("TAAifFP590");
      }
      catch (error) {
        console.error("[]", error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      getBoardGameDetailsById();
      getBoardGamePricesByGameId();
      getBoardGameVideosByGameId();
      getBoardGameImagesByGameId()
    });
    return {
      boardGame: computed(() => AppState.activeBoardGame),
      images: computed(() => AppState.activeBoardGameImages)
    };
  },
  components: { ActiveBoardGameImages }
}
</script>


<style lang="scss" scoped>
.game-img {
  background-size: cover;
}

.list-button {
  background-color: #79bd9a;
}
</style>