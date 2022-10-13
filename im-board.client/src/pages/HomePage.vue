<template>
  <div class="container-fluid homepage">
    <div class="row">
      <div class="col-md-2 bg-c4 p-0 searchcol d-none d-sm-block inset-shadow">
        <Searchbar />
        <Filters />
      </div>

      <div class="col-md-10">
        <div class="row p-3 presetfilters d-none d-sm-block">
          <div
            class="col-md-12 d-flex justify-content-around align-items-center"
          >
            <button class="btn bg-c3 text-dark box-shadow">All</button>
            <button class="btn bg-c3 text-dark box-shadow">Popular</button>
            <button class="btn bg-c3 text-dark box-shadow">
              Highest Rated
            </button>
            <button class="btn bg-c3 text-dark box-shadow">Wishlist</button>
          </div>
        </div>

        <div class="row scrollableY">
          <TransitionGroup
            name="custom-classes"
            enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__bounceOutRight animate__animated"
          >
            <div class="col-md-3" v-for="b in boardGames" :key="b.id">
              <BoardGameCard :boardGame="b" />
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
import Filters from '../components/Filters.vue';
import Searchbar from '../components/Searchbar.vue';
import BoardGameCard from '../components/BoardGameCard.vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    const editable = ref('');
    async function getBoardGames() {
      try {
        await atlasGamesService.getBoardGames();
      } catch (error) {
        Pop.error(error, '[getBoardGames]');
      }
    }
    onMounted(() => {
      getBoardGames();
    });
    return {
      editable,
      boardGames: computed(() => AppState.boardgames),

      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
        }
      },
      //Infinite Scroll need to add to it and test
      getNextSetOfBoardGames() {
        window.onscroll(() => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          
          if (bottomOfWindow) {
           atlasGamesService.getBoardGames()
          }
        });
      },
    };
  },
  components: { Filters, Searchbar, BoardGameCard },
};
</script>

<style scoped lang="scss">
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
  height: 100vh;
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
  height: 100vh;
  background-image: url(../assets/img/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg);
  background-attachment: fixed;
  background-position: center;
}


.scrollableY{
    max-height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
}
.presetfilters {
  background-color: #2c2c2fe7;
}

// @media screen AND (max-width: 768px){

// }
</style>
