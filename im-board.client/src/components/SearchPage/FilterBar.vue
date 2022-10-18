<template>

  <div class=" ">
    <form @submit.prevent="searchByPlayerCount()">
      <div class="form-control">
        <input
          type="number"
          min="1"
          max="10"
         
          name="playerCount"
          v-model="editable"
        />
        <label for="playerCount">PlayerCount/Max 10</label>
        <button class="btn" type="submit">submit</button>
      </div>

      <div>
        <button class="btn" type="submit"></button>
      </div>
    </form>
  </div>

  <div class="">
    <form @submit.prevent="searchByPlayTime()">
      <div class="form-control">
        <input
          type="number"
          min="5"
          max="60"
          name="playerCount"
          v-model="editable2"
          
        />
        <label for="playerCount">PlayTime/Max is 60 min</label>
        <button class="btn" type="submit">submit</button>
      </div>
    </form>
  </div>

<div >
    <form class="px-2" @submit.prevent="searchByYear()">
      <div class="form-control d-flex">
        <label for="minYear" class="form-label">Minimum year </label>
        <input
          type="number"
          class="form-control"
          id="minYear"
          v-model="editable3"
          min="1950"
          max="9999"
        />
        <button type="submit" class="btn  ">Search</button>
      </div>
<div >

</div>
    </form>
</div>
   
  

</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';
import { ref, watchEffect } from 'vue';
import Pop from '../../utils/Pop.js';
import { atlasGamesService } from '../../services/AtlasGamesService.js';
export default {
  props: {},

  setup(props) {
    const editable = ref('');
   const editable2 = ref('');
      const editable3 = ref('');
    watchEffect(() => {});
    return {
      editable,
      editable2,
      editable3,
      queryFilter: [
    
      ],
      async searchOrder_By() {
        try {
          
          this.queryFilter.push(`&order_By=${editable.value}`);
          
          console.log(this.queryFilter.join(''));
          // await atlasGamesService.getBoardGamesByOrder_By(editable.value);
        } catch (error) {
          Pop.error(error, '[searchOrder_By]');
        }
      },
      async searchByPlayerCount() {
        try {
 
          this.queryFilter.push(`&min_players=${editable.value}`);
          console.log(this.queryFilter.join(''));

          // await atlasGamesService.getBoardGamesByMinimumPlayers(editable.value);
        } catch (error) {
          Pop.error(error, '[searchOrder_By]');
        }
      },

      async searchByPlayTime() {
        try {
   
          this.queryFilter.push(`&min_playtime=${editable2.value}`);
          // await atlasGamesService.getBoardGamesByPlayTime(editable.value)
          console.log(this.queryFilter.join(''));
        } catch (error) {
          Pop.error(error, '[searchByPlayTime]');
        }
      },

      async searchByYear() {
        try {
     
          this.queryFilter.push(`&lt_year_published=${editable3.value}`);
          console.log(this.queryFilter.join(''));

          // await atlasGamesService.getBoardGamesByYear(editable.value)
        } catch (error) {
          Pop.error(error, '[searchByRating]');
        }
      },
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

button:focus {
  color: rgb(31, 28, 28);

  background: linear-gradient(to bottom right, #ff5e00, #ffbb00);
}
</style>
