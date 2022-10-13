<template  >
  <section class="container " v-if="boardGame">
    <div class="row">
      <div class="col-12 bg-c4 text-center my-3 py-3 rounded animate__animated animate__fadeInDown elevation-3">
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
          <p class="ms-3">{{boardGame.players}}</p>
        </div>
        <div class="d-flex">
          <b> Playtime:</b>
          <p class="ms-3">{{boardGame.playtime}}</p>
        </div>
        <div class="d-flex">
          <b>Ages:</b>
          <p class="ms-3">{{boardGame.min_age}}+</p>
        </div>
        <div class="d-flex">
          <b>Categories:</b>
          <p>dummy data</p>
        </div>
        <div class="d-flex">
          <b>Primary Publisher:</b>
          <p class="ms-3">{{boardGame.primary_publisher}}</p>
        </div>
        <div class="text-center mt-1">
          <b>Average User Rating:</b>
          <p class="">{{boardGame.average_user_rating.toFixed(2)}}</p>
        </div>
        <div class="text-center mt-1">
          <b>Average Learning Complexity:</b>
          <p>{{boardGame.average_learning_complexity.toFixed(2)}}</p>
        </div>
        <div class="text-center mt-1">
          <b>Ranking:</b>
          <p>{{boardGame.rank}}</p>
        </div>
        <div class="text-center mt-3">
          <b>Add to list</b>
        </div>
        <div class="d-flex justify-content-center ">
          <div class="col-3 text-center">
            <AddToList />
          </div>
        </div>
        <!-- <div>
          <p class="p-3">{{boardGame.description_preview}}</p>
        </div> -->
      </div>
      <div class="row game-images my-3 ms-1">
        <swiper :slidesPerView="4" :spaceBetween="50" :slidesPerGroup="3" :loop="true" :loopFillGroupWithBlank="true"
          :pagination="{
            clickable: true,
          }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide class="my-2" v-for="i in images">
            <ActiveBoardGameImages :images="i" />
          </swiper-slide>


        </swiper>
      </div>
      <div class="px-5 mt-5">
        <div class="col-12 bg-c2 p-5 my-5 rounded-4">
          <h3 class="text-center">Description</h3>
          <p class="p-3 bg-grey rounded-5 elevation-4">{{boardGame.description_preview}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="r in reviews" :key="r">
          <ABGReviews :review="r" />
        </div>

        <div v-for="p in prices" :key="p.id">
          <ABGPrices :price="p" />
        </div>
        <!-- <div class="col-md-3" v-for=" v in videos" :key="v.id">
          <ActiveBoardGameVideos :video="v" />
        </div> -->

      </div>
    </div>
  </section>



  <!-- MODAL -->
  <div class="modal fade" id="activeImage" tabindex="-1" aria-labelledby="activeImageLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">


        <img :src="modalImage" alt="" class="rounded elevation-2 customSize">


      </div>
    </div>
  </div>

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
import ActiveBoardGameVideos from "../components/ActiveBoardGameVideos.vue";
import ABGReviews from "../components/ABGReviews.vue";
import AddToList from "../components/AddToList.vue";
import ABGPrices from "../components/ABGPrices.vue";


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

    async function getBoardGameReviewsByGameId() {
      try {
        await atlasGamesService.getBoardGameReviewsByGameId(route.params.id)
      } catch (error) {
        console.error('[getBoardGameReviewsByGameId]', error)
        Pop.error(error)
      }
    }
    onMounted(() => {
      getBoardGameDetailsById();
      getBoardGamePricesByGameId();
      getBoardGameVideosByGameId();
      getBoardGameImagesByGameId()
      getBoardGameReviewsByGameId()
    });
    return {
      modules: [Pagination, Navigation],
      boardGame: computed(() => AppState.activeBoardGame),
      images: computed(() => AppState.activeBoardGameImages),
      videos: computed(() => AppState.activeBoardGameVideos),
      reviews: computed(() => AppState.activeBoardGameReviews),
      prices: computed(() => AppState.activeBoardGamePrices),
      modalImage: computed(() => AppState.activeImage)
    };
  },
  components: {
    ActiveBoardGameImages,
    Swiper,
    SwiperSlide,
    ActiveBoardGameVideos,
    ABGReviews,
    AddToList,
    ABGPrices
  }
}
</script>

$c1: #cff09e;
$c2: #a8dba8;
$c3: #79bd9a;
$c4: #3b8686;
$c5: #0B486B;
$c6: #ffa216;

<style lang="scss" scoped>
.customSize {
  height: 700px;

  object-fit: contain;
}

b {
  font-size: 14pt;
}

p {

  padding-top: 2.5px;
  margin-bottom: 0;

  font-weight: 600;
  color: #0B486B;
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