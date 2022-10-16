<template>
  <div class="container animate__animated animate__fadeInRight" v-if="boardGames">
    <div class="row justify-content-end g-md-0">
      <div
        class="col-md-12 border-bottom border-secondary border-3 rounded-bottom"
      >
        <div class="d-flex flex-column align-items-center">
          <h3 class="searchText">Search For Your BoardGames</h3>
          <p class=" ">
            we would be surprised if we didn't have it listed here...
          </p>
        </div>
      </div>
      <div class="col-md-3">
      
      </div>
      <div class="col-md-9 d-flex">

    <!-- TODO MORE FILTERS HERE -->

<FilterBar/>


      </div>
      <div class="col-md-3">
        <Filters/>
      </div>
      <div class="col-md-9">
        <div class="row mx-2">
          <TransitionGroup
            name="custom-classes"
            enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__zoomOut animate__animated"
          >
            <div class="col-md-3" v-for="b in boardGames" :key="b.id">
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
import Filters from '../components/BoardGame/FiltersSideBar.vue';
import Searchbar from '../components/BoardGame/Searchbar.vue';
import BoardGameCard from '../components/BoardGame/BoardGameCard.vue';
import { AppState } from '../AppState.js';
import PresetFilterBar from '../components/BoardGame/PresetFilterBar.vue';
import BGCardSearchPage from '../components/BoardGame/BoardGameCardSearchPage.vue';
import BoardGameCardSearchPage from '../components/BoardGame/BoardGameCardSearchPage.vue';
import FilterBar from "../components/BoardGame/FilterBar.vue";

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
async function getCategoryList(){
  try {
      await atlasGamesService.getBoardGameCategoriesList()
    } catch (error) {
      Pop.error(error,'[getCategoryList]')
    }
}
    onMounted(() => {
      getCategoryList()
      // AppState.skip = 0;
      // window.addEventListener('scroll', handleScroll)
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
          await atlasGamesService.getBoardGamesOnScroll();
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
    PresetFilterBar,
    BGCardSearchPage,
    BoardGameCardSearchPage,
    FilterBar
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
