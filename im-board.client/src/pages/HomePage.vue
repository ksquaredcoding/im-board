<template>
  <div class="container-fluid homepage" v-if="boardGames">
    <div class="row">
      <div class="col-md-2 bg-c4 p-0 searchcol d-none d-sm-block animate__animated animate__fadeInLeft ">
      <Searchbar />
        <Filters class="" />
      </div>

      <div class="col-md-10">
        <div class="row p-3 presetfilters d-none d-sm-block">
          <PresetFilterBar/>
        </div>

        <div class="row scrollableY mx-2">
          <TransitionGroup
            name="custom-classes"
            enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__zoomOut animate__animated"
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
import Filters from '../components/BoardGame/Filters.vue';
import Searchbar from '../components/BoardGame/Searchbar.vue';
import BoardGameCard from '../components/BoardGame/BoardGameCard.vue';
import { AppState } from '../AppState.js';
import PresetFilterBar from "../components/BoardGame/PresetFilterBar.vue";

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
  components: { Filters, Searchbar, BoardGameCard, PresetFilterBar },
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


.scrollableY{
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
