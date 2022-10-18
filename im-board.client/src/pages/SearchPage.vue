<template>
  <div
    class="container animate__animated animate__fadeInRight"
    v-if="boardGames"
  >
    <div class="row justify-content-end g-md-0">
      <div
        class="col-md-12 border-secondary border-3 rounded-bottom"
      >
        <div class="d-flex flex-column align-items-center" id="topOfSearchPage">
          <h3 class="searchText">Search for board games</h3>
          <p class="col-md-4">
            <Searchbar/>
          </p>
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-12 d-flex bg-dark rounded p-2 d-flex justify-content-center">
        <!-- TODO MORE FILTERS HERE -->

        <FilterBar />
      </div>
      <div class="col-md-3">
        <FiltersSideBar/>
      </div>
      <div class="col-md-9">
        <div class="row mx-2">
          <TransitionGroup
            name="custom-classes"
            enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__zoomOut animate__animated"
          >
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
import Searchbar from '../components/BoardGame/Searchbar.vue';
import BoardGameCard from '../components/BoardGame/BoardGameCard.vue';
import { AppState } from '../AppState.js';

import BGCardSearchPage from '../components/SearchPage/BoardGameCardSearchPage.vue';
import BoardGameCardSearchPage from '../components/SearchPage/BoardGameCardSearchPage.vue';
import FilterBar from '../components/SearchPage/FilterBar.vue';
import FiltersSideBar from "../components/SearchPage/FiltersSideBar.vue";

export default {
  setup() {
    const editable = ref('');
    // async function getBoardGames() {
    //   try {
    //     await atlasGamesService.getBoardGames();
    //   } catch (error) {
    //     Pop.error(error, '[getBoardGames]');
    //   }
    // }
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
      // getCategoryList();
      // getMechanicsList();
      // AppState.skip = 0;
      // window.addEventListener('scroll', handleScroll)
      AppState.queryFilter = ''
    });
    // async function handleScroll(){
    //  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {

    // }
    // getMoreBoardGames()
    // }
    return {
      editable,
      boardGames: computed(() => AppState.boardgames),

      async getMoreBoardGames() {
        try {
          await atlasGamesService.getBoardGamesByCategories();
        } catch (error) {
          Pop.error(error, '[getBoardGames]');
        }
      },
      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
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
    FiltersSideBar
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
