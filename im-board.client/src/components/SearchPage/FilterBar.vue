<template>
  
  
  <!-- <div class="d-flex align-items-center ">
  
    <select
    v-model="editable"
      class="form-select bg-transparent border-0 text-light button-52"
      aria-label="Default select example"
      @click.prevent="searchOrder_By()"
    >
   
      <option  value="">Order By</option>
      <option  :value="o.name" v-for="o in order_By" :key="o.id">{{ o.name }}</option>
    </select>
  </div>


 -->



  

  <div class="d-flex align-items-center mx-2">
   
    <select
      v-model="editable"
      class="form-select bg-transparent border-0 text-light button-52"
      aria-label="Default select example"
      @click="searchByPlayerCount()"
    >
  <option value="" class="">Players</option>
      

      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>


  <div class="d-flex align-items-center">
 
    <select
      v-model="editable"
      class="form-select bg-transparent border-0 text-light button-52"
      aria-label="Default select example"
      @click="searchByPlayTime()"
    >
      <option value="">PlayTime</option>
  <option  value="10">10min</option>
  <option value="15">15min</option>
  <option value="20">20min</option>
  <option value="25">25min</option>
  <option value="30">30min</option>
  <option value="40">40min</option>
  <option value="50">50min</option>
   
    </select>
  </div>



 <div class="dropdown bg-transparent">
  <button type="button" class="btn dropdown-toggle button-52" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Year
  </button>
  <form    class="dropdown-menu px-2" @submit.prevent="searchByYear()">
    <div class="mb-3">
      <label for="minYear" class="form-label">Minimum year +</label>
      <input type="number" class="form-control" id="minYear" v-model="editable" min="1970" max="9999">
    </div>
   
    <button type="submit" class="btn btn-primary">search</button>
  </form>

</div>

 



</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';
import { ref } from 'vue';
import Pop from '../../utils/Pop.js';
import { atlasGamesService } from '../../services/AtlasGamesService.js';
export default {
  props: {},

  setup(props) {
    const editable = ref('');
    return {
      editable,


      order_By: computed(() => AppState.order_By),

      async searchOrder_By() {
        try {

          await atlasGamesService.getBoardGamesByOrder_By(editable.value);
        } catch (error) {
          Pop.error(error, '[searchOrder_By]');
        }
      },
      async searchByPlayerCount() {
        try {
          await atlasGamesService.getBoardGamesByMinimumPlayers(editable.value);
        } catch (error) {
          Pop.error(error, '[searchOrder_By]');
        }
      },


      async searchByPlayTime(){
        try {
            await  atlasGamesService.getBoardGamesByPlayTime(editable.value)

            
          } catch (error) {
            Pop.error(error,'[searchByPlayTime]')
          }
      },

    async searchByYear(){
try {
    await atlasGamesService.getBoardGamesByYear(editable.value)
  } catch (error) {
    Pop.error(error,'[searchByRating]')
  }
    }
    };
  },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
button:focus{
  color: rgb(31, 28, 28);

 background: linear-gradient(to bottom right, #ff5e00, #ffbb00);


}

</style>
