<template>
  <div class="container" v-if="boardGame">
    <!-- SECTION start game info -->
    <div class="row justify-content-center">
      <div
        class=" col-10  col-md-12 gradient-box text-center my-3 py-3   rounded animate__animated animate__fadeInDown elevation-3"
      >
        <div class="font">{{ boardGame?.name }}</div>
        <h6>
          <b class="fs-4"
            >{{ boardGame?.year_published }} ·
            <i class="bi bi-people-fill fs-4"></i> {{ boardGame?.players }} 
            ·
            <i class="bi bi-clock-fill fs-5"></i>
            {{ boardGame?.playtime }} mins</b
          >
        </h6>
      </div>

      <div
        class="col-md-6 d-flex justify-content-center animate__animated animate__fadeInLeft"
      >
        <img :src="boardGame?.large" alt="" class="img-fluid rounded" />
      </div>

      <div
        class="col-md-6 p-3 mt-4 mt-md-0 animate__animated animate__fadeInRight info rounded elevation-3"
      >
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex">
              <b>Categories:</b>
              <p class="ms-2">{{ boardGame?.categories.id }}</p>
            </div>

            <div class="d-flex">
              <b>Ages:</b>
              <p class="ms-2">{{ boardGame?.min_age }}+</p>
            </div>

            <div class="d-flex">
              <b>Publisher:</b>
              <p class="ms-2">{{ boardGame?.primary_publisher }}</p>
            </div>
          </div>
          <div class="col-md-6">

            <div v-if="boardGame?.average_learning_complexity > 0">
            <div class="d-flex">
              <b>Average User Rating:</b>
              <p class="ms-2">
                {{ boardGame?.average_user_rating.toFixed(2) }} <b>/</b> 5
              </p>
            </div></div>

            <div v-if="boardGame?.average_learning_complexity > 0">
            <div class="d-flex">
              <b>Learning Complexity:</b>
              <p class="ms-2">
                {{ boardGame?.average_learning_complexity.toFixed(2) }}
                <b>/</b> 5
              </p>
            </div>
            </div>
            
            <div class="d-flex"  v-if="boardGame?.rank <100">
              <b>Ranking:</b>
              <p class="ms-2">#{{ boardGame?.rank }}</p>
            </div>
          </div>
        </div>

        <div class="col-md">
          <div class="p-4 rounded-5 desctext overflow-auto">
            {{ boardGame?.description_preview }}
          </div>
        </div>
        <div class="text-center">
          <b>Add to list</b>
        </div>
        <div class="d-flex justify-content-center my-3 my-md-0">
          <div class="col-3 text-center ">
            <AddToList  />
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION end -->

    <div class="row game-images mt-3 ms-1 horizontal-scroll">



    <ActiveBoardGameImages :images="i"  v-for="i in images" :key="i.id"/>
 


  
    </div>
    

    <div>
      <div v-if="reviews?.length > 0">
        <h1>Reviews:</h1>
        <div class="row review-row">
          <div class="col-md-6" v-for="r in reviews" :key="r">
            <ABGReviews :review="r" />
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div class="col-md-10" v-if="prices?.length > 0">
          <div class="mt-5">
            <h1>Purchase game at:</h1>
          </div>
          <div
            class="row justify-content-center prices gradient-box text-dark mb-5"
          >
            <div v-for="p in prices" :key="p.id" class="col-md-6">
              <ABGPrices :price="p" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="videos?.length > 0">
        <div class="mt-5">
          <h1>Videos about this game:</h1>
        </div>
        <div class="row ">
          <div class="col-md-3" v-for="v in videos" :key="v.id">
            <ActiveBoardGameVideos :video="v" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL -->
  <div
    class="modal fade"
    id="activeImage"
    tabindex="-1"
    aria-labelledby="activeImageLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <img :src="modalImage" alt="" class="rounded elevation-2 customSize" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { atlasGamesService } from '../services/AtlasGamesService.js';
import Pop from '../utils/Pop.js';
import ActiveBoardGameImages from '../components/BoardGame/ActiveBoardGameImages.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation,FreeMode} from 'swiper';
import { ActiveBoardGameImage } from '../models/BoardGame/ActiveBoardGameImage.js';
import ActiveBoardGameVideos from '../components/BoardGame/ActiveBoardGameVideos.vue';
import ABGReviews from '../components/BoardGame/ABGReviews.vue';
import AddToList from '../components/BoardGame/AddToList.vue';
import ABGPrices from '../components/BoardGame/ABGPrices.vue';

export default {
  setup() {
    const route = useRoute();
    async function getBoardGameDetailsById() {
      try {
        await atlasGamesService.getBoardGameDetailsById(route.params.id);
      } catch (error) {
        console.error('[getBoardGameDetailsById]', error);
        Pop.error(error);
      }
    }

    async function getBoardGameImagesByGameId() {
      try {
        await atlasGamesService.getBoardGameImagesByGameId(route.params.id);
      } catch (error) {
        console.error('[getBoardGameImagesByGameId]', error);
        Pop.error(error);
      }
    }

    async function getBoardGamePricesByGameId() {
      try {
        await atlasGamesService.getBoardGamePricesByGameId(route.params.id);
      } catch (error) {
        console.error('[getBoardGamePricedByGameId]', error);
        Pop.error(error);
      }
    }
    async function getBoardGameVideosByGameId() {
      try {
        await atlasGamesService.getBoardGameVideosByGameId(route.params.id);
      } catch (error) {
        console.error('[getBoardGameVideosByGameId]', error);
        Pop.error(error);
      }
    }

    async function getBoardGameReviewsByGameId() {
      try {
        await atlasGamesService.getBoardGameReviewsByGameId(route.params.id);
      } catch (error) {
        console.error('[getBoardGameReviewsByGameId]', error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      getBoardGameDetailsById();
      getBoardGamePricesByGameId();
      getBoardGameVideosByGameId();
      getBoardGameImagesByGameId();
      getBoardGameReviewsByGameId();
    });
    return {
      modules: [Pagination, Navigation,FreeMode],
      boardGame: computed(() => AppState.activeBoardGame),
      images: computed(() => AppState.activeBoardGameImages),
      videos: computed(() => AppState.activeBoardGameVideos),
      reviews: computed(() => AppState.activeBoardGameReviews),
      prices: computed(() => AppState.activeBoardGamePrices),
      modalImage: computed(() => AppState.activeImage),


    async  nextSet(){
try {

    await atlasGamesService.getBoardGameImagesByGameId()
  } catch (error) {
    Pop.error(error,'[nextSetBGImages]')
  }
      },
    async  previousSet(){
try {
 
  await atlasGamesService.getBoardGameImagesByGameId()
  } catch (error) {
    Pop.error(error,'[previousSetBGImages]')
  }
      }
    };
  },
  components: {
    ActiveBoardGameImages,
    Swiper,
    SwiperSlide,
    ActiveBoardGameVideos,
    ABGReviews,
    AddToList,
    ABGPrices,
  },
};
</script>

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
  color: #0b486b;
}

.price-row {
  height: 20rem;
  overflow: auto;
}

.horizontal-scroll {
  border-radius: 4px;
  max-height: 30rem;
  height: 30rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.review-row {
  height: 20rem;
  overflow: auto;
}

.game-images {
  height: 25vh;
}

.game-img {
  background-size: cover;
}

.list-button {
  background-color: #8adab0;
}

.info {
  background-color: #dbdbdbd7;
}

.hi {
  padding-left: 9rem;
  padding-right: 9rem;
}

.prices {
  height: 350px;
  overflow: auto;
  // border: #3b8686 solid 10px;
}

.reviews {
  overflow: auto;
}

.desc {
  padding-left: 300px;
  padding-right: 300px;
}

.font {
  font-weight: 600;
  font-size: 50px;
  text-shadow: 2px 2px 0px rgba(231, 239, 240, 0.92);
}

* {
  font-family: 'Baloo 2', cursive;
}

.desctext {
  font-size: larger;
  // letter-spacing: .06em;
  max-height: 40vh;
}
</style>
