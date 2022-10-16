<template>
  <div class="d-flex align-items-center">
    <small>Order By</small>
    <select
      v-model="editable"
      class="form-select bg-transparent border-0 "
      aria-label="Default select example"
      @click.prevent="searchOrder_By()"
    >
   
      <option value=""></option>
      <option :value="o.name" v-for="o in order_By">{{ o.name }}</option>
    </select>
  </div>
  <div class="d-flex align-items-center">
     <small>Players</small>
    <select
      v-model="editable"
      class="form-select bg-transparent border-0"
      aria-label="Default select example"
      @click="searchByPlayerCount()"
    >
  <option value=""></option>
      <option v-for="i in 9">{{ i }}</option>

      <option value="10">10+</option>
    </select>
  </div>


  <div class="d-flex align-items-center">
     <small>PlayTime</small>
    <select
      v-model="editable"
      class="form-select bg-transparent border-0"
      aria-label="Default select example"
      @click="searchByPlayTime()"
    >
  <option value="10">10min</option>
  <option value="15">15min</option>
  <option value="20">20min</option>
  <option value="25">25min</option>
  <option value="30">30min</option>
  <option value="40">40min</option>
  <option value="50">50min</option>
   
    </select>
  </div>

  <div class="d-flex align-items-center">
     <small>Rating</small>
    <select
      v-model="editable"
      class="form-select bg-transparent border-0"
      aria-label="Default select example"
      @click="searchByRating()"
    >
  <option value="2" >2  ⭐️</option>
  <option value="2.5">2.5 ⭐️</option>
  <option value="3">3 ⭐️</option>
  <option value="3.5">3.5 ⭐️</option>
  <option value="4">4 ⭐️</option>
  <option value="4.5">4.5 ⭐️</option>

 
    </select>
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

    async searchByRating(){
try {
    await atlasGamesService.getBoardGamesByRating(editable.value)
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
</style>
