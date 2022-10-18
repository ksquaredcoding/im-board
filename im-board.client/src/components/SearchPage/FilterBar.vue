<template>
  <div class="d-flex align-items-center">
    <form @submit.prevent="searchOrder_By()">
      <div>
        <button class="btn" type="submit">{{ editable }}</button>
      </div>
      <select
        v-model="editable"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">Order By</option>
        <option :value="o.name" v-for="o in order_By" :key="o.id">
          {{ o.name }}
        </option>
      </select>
    </form>
  </div>

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
          v-model="editable"
        />
        <label for="playerCount">PlayTime/Max is 60 min</label>
        <button class="btn" type="submit">submit</button>
      </div>
    </form>
  </div>

  <div class="dropdown bg-transparent">
    <button
      type="button"
      class="btn dropdown-toggle button-52"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      Year
    </button>
    <form class="dropdown-menu px-2" @submit.prevent="searchByYear()">
      <div class="mb-3">
        <label for="minYear" class="form-label">Minimum year </label>
        <input
          type="number"
          class="form-control"
          id="minYear"
          v-model="editable"
          min="1950"
          max="9999"
        />
      </div>

      <button type="submit" class="btn button-50">Search</button>
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
// let  test3 = ref([])
    watchEffect(() => {});
    return {
      // test3,
      editable,
      queryFilter: computed(() => AppState.queryFilter),
      testFilter: [
        'https://api.boardgameatlas.com/api/search?pretty=true&client_id=2I6DeypMLL',
      ],
 
      order_By: computed(() => AppState.order_By),
    
      async searchOrder_By() {
        try {
          
          this.testFilter.push(`&order_By=${editable.value}`);
          console.log(this.testFilter.join(''));
          // await atlasGamesService.getBoardGamesByOrder_By(editable.value);
        } catch (error) {
          Pop.error(error, '[searchOrder_By]');
        }
      },
      async searchByPlayerCount() {
        try {
        // test3.value = [...test3.value,editable.value]
        // console.log(test3.value.join(''));
          // this.queryFilter.push(editable.value);
// console.log(test3.value);
          this.testFilter.push(`&min_players=${editable.value}`);
          console.log(this.testFilter.join(''));

          // await atlasGamesService.getBoardGamesByMinimumPlayers(editable.value);
        } catch (error) {
          Pop.error(error, '[searchOrder_By]');
        }
      },

      async searchByPlayTime() {
        try {
          // console.log(test3.value);
          this.testFilter.push(`&min_playtime=${editable.value}`);
          // await atlasGamesService.getBoardGamesByPlayTime(editable.value)
          console.log(this.testFilter.join(''));
        } catch (error) {
          Pop.error(error, '[searchByPlayTime]');
        }
      },

      async searchByYear() {
        try {
          // console.log(test3.value);
          this.testFilter.push(`&lt_year_published=${editable.value}`);
          console.log(this.testFilter.join(''));

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
