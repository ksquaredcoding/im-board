<template>
  <div
            class="col-md-12 d-flex justify-content-around align-items-center animate__animated animate__fadeInRight"
          >
            <button  aria-label="All Categories" title="All Categories" class="btn bg-c3 text-dark box-shadow">All</button>
            <button  class="btn bg-c3 text-dark box-shadow">Popular</button>
            <button  class="btn bg-c3 text-dark box-shadow">
              Highest Rated
            </button>
            <button  class="btn bg-c3 text-dark box-shadow">New</button>
          </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop.js";
import { atlasGamesService } from '../services/AtlasGamesService.js';

export default {
  props: {},

  setup(props) {
    const editable = ref('');
    return {
      categories: computed(() => AppState.categories),
      filter: computed(() => AppState.activeCategoryFilters),
      editable,

      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category)
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.btn {
  width: 175px;
  height: 50px;
  overflow: hidden;
  font-size: larger;
  font-weight: bold;
  padding: 10px;
  font-family: 'Baloo 2', cursive;
}
</style>