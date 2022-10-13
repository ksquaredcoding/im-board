<template>
  <section class="container" v-if="boardGame">
    <div class="row">
      <div class="col-12 bg-c4 text-center my-3 py-3 rounded animate__animated animate__fadeInDown">
        <h1>{{boardGame.name}}</h1>
      </div>
      <!-- <div class="col-6 game-img" :style="{backgroundImage: `url(${boardGame.coverImg})`}">
      </div> -->
      <div class="col-md-6 d-flex justify-content-center animate__animated animate__fadeInLeft ">
        <img :src="boardGame.large" alt="" class="img-fluid rounded elevation-3">
      </div>
      <div class="col-md-6 p-3 animate__animated animate__fadeInRight info rounded elevation-3">
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
          <p>{{boardGame.average_user_rating.toFixed(2)}}</p>
        </div>
        <div class="text-center mt-1">
          <b>Average Learning Complexity:</b>
          <p>{{boardGame.average_learning_complexity.toFixed(2)}}</p>
        </div>
        <div class="text-center mt-1">
          <b>Ranking:</b>
          <p>{{boardGame.rank}}</p>
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
      <div class="row game-images my-3 ms-1">
        <swiper :slidesPerView="4" :spaceBetween="10" :slidesPerGroup="3" :loop="true" :loopFillGroupWithBlank="true"
          :pagination="{
            clickable: true,
          }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide class="my-2" v-for="i in images">
            <ActiveBoardGameImages :images="i" />
          </swiper-slide>


        </swiper>
      </div>
      <div class="col-12">
        <h3 class="text-center">Description</h3>
        <p class="p-3">{{boardGame.description_preview}}</p>
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
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import { ActiveBoardGameImage } from "../models/ActiveBoardGameImage.js";


export default {
  setup() {
    const route = useRoute();
    async function getBoardGameDetailsById() {
      try {
        await atlasGamesService.getBoardGameDetailsById(route.params.id);
      }
      catch (error) {
        console.error("[getBoardGameDetailsById]", error);
        Pop.error(error);
      }
    }

    async function getBoardGameImagesByGameId() {
      try {
        await atlasGamesService.getBoardGameImagesByGameId(route.params.id);
      }
      catch (error) {
        console.error("[getBoardGameImagesByGameId]", error);
        Pop.error(error);
      }
    }

    async function getBoardGamePricesByGameId() {
      try {
        await atlasGamesService.getBoardGamePricesByGameId(route.params.id);
      }
      catch (error) {
        console.error("[getBoardGamePricedByGameId]", error);
        Pop.error(error);
      }
    }
    async function getBoardGameVideosByGameId() {
      try {
        await atlasGamesService.getBoardGameVideosByGameId(route.params.id);
      }
      catch (error) {
        console.error("[getBoardGameVideosByGameId]", error);
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
      modules: [Pagination, Navigation],
      boardGame: computed(() => AppState.activeBoardGame),
      images: computed(() => AppState.activeBoardGameImages)
    };
  },
  components: {
    ActiveBoardGameImages, Swiper,
    SwiperSlide,
  }
}
</script>


<style lang="scss" scoped>
b {
  font-size: 14pt;
}

p {
  font-weight: 600;

}

.game-images {
  height: 25vh;
}

.game-img {
  background-size: cover;
}

.list-button {
  background-color: #79bd9a;
}

.info {
  background-color: #79bd9a70;
}
</style>