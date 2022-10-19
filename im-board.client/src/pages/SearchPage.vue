<template>
  <div class="container-fluid px-3 animate__animated animate__fadeInRight" v-if="boardGames">
    <div class="row justify-content-end g-md-0">
      <div class="col-md-12 border-secondary border-3 rounded-bottom">
        <div class="d-flex flex-column align-items-center" id="topOfSearchPage">
          <h3 class="searchText pt-3 text-dark">Search for board games</h3>
          <p class="col-md-4">
            <Searchbar />
          </p>
        </div>
      </div>

      <div class="col-md-12 d-flex bg-c5 rounded p-4 d-flex justify-content-center">


        <FilterBar />
      </div>

      <div class="col-md-12">
        <button class="btn btn-danger" @click="incrementSkip('prev')" type="button">
          Previous
        </button>
        <button class="btn btn-primary" @click="incrementSkip('next')" type="button">
          Next
        </button>
        <div class="row mx-2">
          <TransitionGroup name="custom-classes" enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__zoomOut animate__animated">
            <div class="col-md-3 mt-3" v-for="b in boardGames" :key="b.id">
              <BoardGameCardSearchPage :boardGame="b" />
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { atlasGamesService } from '../services/AtlasGamesService.js';
import Pop from '../utils/Pop.js';
import Filters from '../components/SearchPage/FiltersSideBar.vue';
import Searchbar from '../components/SearchPage/Searchbar.vue';
import BoardGameCard from '../components/BoardGame/BoardGameCard.vue';
import { AppState } from '../AppState.js';

import BGCardSearchPage from '../components/SearchPage/BoardGameCardSearchPage.vue';
import BoardGameCardSearchPage from '../components/SearchPage/BoardGameCardSearchPage.vue';
import FilterBar from '../components/SearchPage/FilterBar.vue';
import FiltersSideBar from "../components/SearchPage/FiltersSideBar.vue";


export default {
  setup() {
    const editable = ref('');

    async function getCategoryList() {
      try {
        await atlasGamesService.getBoardGameCategoriesList();
      } catch (error) {
        Pop.error(error, '[getCategoryList]');
      }
    }

    async function getMechanicsList() {
      try {
        await atlasGamesService.getBoardGameMechanicsList();
      } catch (error) {
        Pop.error(error, '[getMechanicsList]');
      }
    }
    onMounted(() => {
      getCategoryList();
      getMechanicsList();
    });

    return {
      editable,
      boardGames: computed(() => AppState.boardgames.slice(AppState.hopeItWorks, AppState.itsAMaybe)),
      categories: computed(() => AppState.bgCategories),
      skip: computed(() => AppState.skip),
      async incrementSkip(x) {
        try {
          switch (x) {
            case 'next':
              AppState.itsAMaybe += 10
              AppState.hopeItWorks += 10
              break;
            case 'prev':
              AppState.itsAMaybe -= 10
              AppState.hopeItWorks -= 10
              break;

            default:
              break;
          }
        } catch (error) {
          Pop.error('[INCREMENT SKIP]', error)
        }
      },
    };
  },
  components: {
    Filters,
    Searchbar,
    BoardGameCard,
    BGCardSearchPage,
    BoardGameCardSearchPage,
    FilterBar,
    FiltersSideBar,

  },
};
</script>

<style scoped lang="scss">
.searchText {
  font-size: 40px;
  font-weight: 900;
}

.filterBy {
  font-weight: 900;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.searchcol {
  height: 90.7vh;
}

.btn {
  width: 175px;
  height: 50px;
  overflow: hidden;
  font-size: larger;
  font-weight: bold;
  padding: 10px;
  font-family: 'Baloo 2', cursive;
}

.homepage {
  min-height: 90vh;
  background-image: url(../assets/img/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg);
  background-attachment: fixed;
  background-position: center;
}

.scrollableY {
  max-height: 79vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.presetfilters {
  background-color: #2c2c2fe7;
}

// @media screen AND (max-width: 768px){

// }
</style>
