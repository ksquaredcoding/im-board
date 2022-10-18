<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="accordion pb-3" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed button-50 focus"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Categories
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse bg-dark"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="row scrollableY p-2">
                <div class="col-md-12">
                  <div
                    class="list-group-item inputBox d-flex"
                    v-for="c in categories"
                    :key="c.id"
                  >
                    <input
                      class="checkBox"
                      type="checkbox"
                      v-model="c.id"
                      :id="c.name"
                    />
                    <label for="card-game" class="ms-2">{{ c.name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <!-- ------------------------------------- -->
        <div class="accordion" id="accordionFlushExample2">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed button-52 focus"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Mechanics
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse bg-dark"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample2"
            >
              <div class="row scrollableY p-2">
                <div class="col-md-12">
                  <div
                    class="list-group-item inputBox d-flex"
                    v-for="m in mechanics"
                    :key="m.id"
                  >
                    <input
                      class="checkBox"
                      type="checkbox"
                      :value="m.id"
                      :id="m.name"
                    />
                    <label for="card-game" class="ms-2">{{ m.name }}</label>
                  </div>
                </div>
                <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div>
            <form @submit.prevent="searchByCoolMethod()" class="d-flex">
          <div class="form-control">
            <label for="playerCount">PlayerCount</label>
            <input
              type="number"
              min="1"
              max="10"
              name="playerCount"
              v-model="playerCount"
            />
          </div>
          <div class="form-control">
            <label for="playerCount">PlayTime</label>
            <input
              type="number"
              min="5"
              max="60"
              name="playTime"
              v-model="playTime"
            />
          </div>

          <div class="form-control d-flex">
            <label for="minYear" class="form-label">Minimum year </label>
            <input
              type="number"
              class="form-control"
              id="minYear"
              v-model="lt_year_published"
              min="1950"
              max="9999"
            />
          </div>

          <div></div>
          <button class="btn button-52" type="submit">SUBMIT YO ASS</button>
        </form>
        </div>
      
      </div>
    </div>
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
    const lt_year_published = ref('');

    return {
      playerCount,
      playTime,
      lt_year_published,
      categories: computed(() => AppState.activeCategoryFilters),
      mechanics: computed(() => AppState.activeMechanicsFilters),


      async searchByCoolMethod() {
        try {
          let search = `min_players=${playerCount.value}`;
          let search2 = `min_playtime=${playTime.value}`;
          let search3 = `lt_year_published=${lt_year_published.value}`;
          AppState.queryFilter = [
            ...AppState.queryFilter,
            search,
            search2,
            search3,
          ];

          let finalSearch = AppState.queryFilter.join('&');
          console.log(AppState.queryFilter.join('&'));
          await atlasGamesService.getBoardGames(finalSearch);

          AppState.queryFilter = [];
          console.log(AppState.queryFilter);
        } catch (error) {
          Pop.error(error, '[searchByPlayerCount');
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
