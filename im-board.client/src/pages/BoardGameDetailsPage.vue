<template>
  <section class="container" v-if="boardGame">
    <div class="row">
      <div
        class="col-md-12 gradient-box text-center my-3 py-3 rounded animate__animated animate__fadeInDown elevation-3">
        <div class="font">{{ boardGame.name }}</div>
      </div>
      <!-- <div class="col-6 game-img" :style="{backgroundImage: `url(${boardGame.coverImg})`}">
      </div> -->
      <div class="col-md-6 d-flex justify-content-center animate__animated animate__fadeInLeft">
        <img :src="boardGame.large" alt="" class="img-fluid rounded" />
      </div>
      <div class="col-md-6 p-3 animate__animated animate__fadeInRight info rounded elevation-3">
        <div class="d-flex">
          <b>Number of players : </b>
          <p class="ms-3">{{ boardGame.players }}</p>
        </div>
        <div class="d-flex">
          <b> Playtime:</b>
          <p class="ms-3">{{ boardGame.playtime }} mins</p>
        </div>
        <div class="d-flex">
          <b>Ages:</b>
          <p class="ms-3">{{ boardGame.min_age }}+</p>
        </div>
        <div class="d-flex">
          <b>Categories:</b>
          <p>{{ boardGame.categories.id}}</p>
        </div>
        <div class="d-flex">
          <b>Primary Publisher:</b>
          <p class="ms-3">{{ boardGame.primary_publisher }}</p>
        </div>
        <div class="text-center mt-1">
          <b>Average User Rating:</b>
          <p class="">{{ boardGame.average_user_rating.toFixed(2) }}</p>
        </div>
        <div class="text-center mt-1">
          <b>Average Learning Complexity:</b>
          <p>{{ boardGame.average_learning_complexity.toFixed(2) }}</p>
        </div>
        <div class="text-center mt-1">
          <b>Ranking:</b>
          <p>{{ boardGame.rank }}</p>
        </div>
        <div class="text-center mt-3">
          <b>Add to list</b>
        </div>
        <div class="d-flex justify-content-center">
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
      <div class="px-5 mt-5 d-flex justify-content-center pt-3">
        <div class="col-8 gradient-box p-5 my-5 rounded-4">
          <div class="d-flex justify-content-center">
            <h3 class="text-center bg-grey p-3 rounded-5">Description</h3>
          </div>

          <p class="p-3 bg-grey rounded-5 elevation-4 desctext">
            {{ boardGame?.description_preview }}
          </p>
        </div>
      </div>

      <div>

        <div v-if="reviews.length > 0">
          <h1>Reviews:</h1>
          <div class="row review-row">
            <div class="col-md-6" v-for="r in reviews" :key="r">
              <ABGReviews :review="r" />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
        <div class="col-md-10" v-if="prices.length > 0">
          <div class="mt-5">
            <h1>Purchase game at:</h1>
          </div>
          <div class="row justify-content-center prices gradient-box text-dark mb-5">
            <div v-for="p in prices" :key="p.id" class="col-md-6">
              <ABGPrices :price="p" />
            </div>
          </div>
        </div></div>

        <div v-if="videos.length > 0">
          <div class="mt-5">
            <h1>Videos about this game:</h1>
          </div>
          <div class="row ">
            <div class="col-md-3" v-for=" v in videos" :key="v.id">
              <ActiveBoardGameVideos :video="v" />
            </div>
          </div>

        </div>

        <!-- <iframe
          width="1424"
          height="612"
          src="https://www.youtube.com/embed/Dfq4dRPHIAM"
          title="Underrated MVP! | Top 15 Mythic | Dominaria United Draft | MTG Arena | Twitch Replay"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> -->

      </div>
    </div>
  </section>

  <!-- MODAL -->
  <div class="modal fade" id="activeImage" tabindex="-1" aria-labelledby="activeImageLabel" aria-hidden="true">
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
import { Pagination, Navigation } from 'swiper';
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
      modules: [Pagination, Navigation],
      boardGame: computed(() => AppState.activeBoardGame),
      images: computed(() => AppState.activeBoardGameImages),
      videos: computed(() => AppState.activeBoardGameVideos),
      reviews: computed(() => AppState.activeBoardGameReviews),
      prices: computed(() => AppState.activeBoardGamePrices),
      modalImage: computed(() => AppState.activeImage),

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

$c1: #cff09e; $c2: #a8dba8; $c3: #79bd9a; $c4: #3b8686; $c5: #0B486B; $c6:
#ffa216;

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
  letter-spacing: .05em;
}
</style>
