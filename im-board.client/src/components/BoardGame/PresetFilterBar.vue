<template>
  <div
            class="col-md-12 d-flex justify-content-around align-items-center animate__animated animate__fadeInRight"
          >
            <button @click="getBoardGamesByOrder_By('')" aria-label="All Categories" title="All Categories" class="btn bg-c3 text-dark box-shadow">All</button>
            <button  @click="getBoardGamesByOrder_By('rank')"  class="btn bg-c3 text-dark box-shadow">Popular</button>
            <!-- <button  @click="getBoardGamesByOrder_By('')" class="btn bg-c3 text-dark box-shadow">
              Highest Rated
            </button> -->
            <button  @click="getBoardGamesByOrder_By('year_published')" class="btn bg-c3 text-dark box-shadow">New</button>
          </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../../utils/Pop.js";
import { atlasGamesService } from '../../services/AtlasGamesService.js';

export default {
  props: {},

  setup(props) {
    const editable = ref('');
    return {
      categories: computed(() => AppState.categories),
      filter: computed(() => AppState.activeCategoryFilters),
      editable,

      async getBoardGamesByOrder_By(query) {
        try {
          await atlasGamesService.getBoardGamesByOrder_By(query)
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

button{
  transition:  0.5s ease;
}


button:focus{
 
  transition: 0.5s ease;
  color: rgb(31, 28, 28);
  border: 1px solid  #ffa216;
  background-color: #ffa216 !important;
border-bottom: 5px solid #ffc267;
box-shadow: #fbc756ac 0px 5px, rgba(240, 159, 46, 0.3) 0px 10px, rgba(240, 179, 46, 0.2) 0px 15px, rgba(240, 169, 46, 0.1) 0px 20px, rgba(240, 137, 46, 0.05) 0px 25px,inset 17px 17px 60px 1px #ffefaa ;

}
</style>