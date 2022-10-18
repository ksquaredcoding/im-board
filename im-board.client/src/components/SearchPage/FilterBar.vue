<template>
  <div class="container-fluid position-relative">
    <form @submit.prevent="searchByCoolMethod()">
      <div class="row">
        <div class="col-md-3">
          <div class="dropdown" id="dropdown">
            <button class="dropdown-toggle collapsed button-50 p-2 focus" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Categories
            </button>
            <div class="row scrollable-y p-2 dropdown-menu bg-dark">
              <div class="col-md-12">
                <div class="dropdown-item inputBox d-flex text-light" v-for="c in categories" :key="c.id"
                  id="CategoryDiv">
                  <input class="checkBox" type="checkbox" :value="c.id" v-model="filters1" />
                  <label for="card-game" class="ms-2">{{ c.name }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <!-- ------------------------------------- -->
          <div class="dropdown" id="dropdown2">
            <div class="dropdown-item">
              <button class="dropdown-toggle collapsed button-52 p-2 focus" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Mechanics
              </button>
              <div class="row scrollable-y p-2 dropdown-menu bg-dark">
                <div class="col-md-12">
                  <div class="dropdown-item inputBox d-flex text-light" v-for="m in mechanics" :key="m.id">
                    <input class="checkBox" type="checkbox" :value="m.id" v-model="filters2" />
                    <label for="card-game" class="ms-2">{{ m.name }}</label>
                  </div>
                </div>
                <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">

          <div class="d-flex">
            <div class="form-control">
              <label for="playerCount">PlayerCount</label>
              <input type="number" min="1" max="10" name="playerCount" v-model="playerCount" />
            </div>
            <div class="form-control">
              <label for="playerCount">PlayTime</label>
              <input type="number" min="5" max="60" name="playTime" v-model="playTime" />
            </div>

            <button class="btn button-52" type="submit">SUBMIT YO ASS</button>
          </div>
        </div>
      </div>
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
  setup() {
    const playerCount = ref('');
    const playTime = ref('');

    const filters1 = ref([]);
    const filters2 = ref([]);
    return {
      filters1,
      filters2,
      playerCount,
      playTime,

      categories: computed(() => AppState.bgCategories),
      mechanics: computed(() => AppState.bgMechanics),

      async searchByCoolMethod() {
        try {
          let categoriesSearch = `categories=${filters1.value}`;
          let mechanicsSearch = `mechanics=${filters2.value}`;

          let search = `gt_max_players=${playerCount.value}`;
          let search2 = `lt_max_playtime=${playTime.value}`;

          AppState.queryFilter = [
            ...AppState.queryFilter,
            search,
            search2,

            categoriesSearch,
            mechanicsSearch,
          ];

          let finalSearch = AppState.queryFilter.join('&');
          console.log(AppState.queryFilter.join('&'));
          await atlasGamesService.getBoardGames(finalSearch);

          AppState.queryFilter = [];
          console.log(AppState.queryFilter);
        } catch (error) {
          Pop.error(error, '[Cool Search Method]');
        }
      },

      async searchByPlayerCount() {
        try {
          let search = `&min_players=${playerCount.value}`;

          AppState.queryFilter = [...AppState.queryFilter, search];

          console.log(this.queryFilter.join(''));

          // await atlasGamesService.getBoardGamesByMinimumPlayers(editable.value);
        } catch (error) {
          Pop.error(error, '[searchByPlayerCount');
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
