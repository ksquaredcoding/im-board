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
            <div class="row scrollableY p-2 dropdown-menu bg-dark">
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
              <button class="dropdown-toggle collapsed button-50 p-2 focus" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Mechanics
              </button>
              <div class="row scrollableY p-2 dropdown-menu bg-dark">
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
            <!-- <div class="form-control">
              <label for="playerCount">PlayerCount</label>
              <input type="number" min="1" max="10" name="playerCount" v-model="playerCount" />
            </div> -->
            <label for="playerCount">Player Count: </label>
            <select class="form-select" aria-label="Select Number of Players" v-model="playerCount" id="playerCount">
              <option selected>{{playerCount}}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6+</option>
            </select>
            <div class="form-control">
              <label for="playerCount">PlayTime</label>
              <input type="number" min="5" max="60" name="playTime" v-model="playTime" />
            </div>

            <button class="btn button-50 ms-2" type="submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </form>
    <button class="btn btn-danger" @click="incrementSkip('prev')" type="button">
      Previous
    </button>
    <button class="btn btn-primary" @click="incrementSkip('next')" type="button">
      Next
    </button>
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
    const playerCount = ref('Any');
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
          let skipQuery = `skip=${AppState.skip}`

          AppState.queryFilter = [
            ...AppState.queryFilter,
            search,
            search2,

            categoriesSearch,
            mechanicsSearch,
            skipQuery
          ];
          const arrToUse = AppState.queryFilter
          let finalSearch = arrToUse.join('&');
          console.log(AppState.queryFilter.join('&'));
          await atlasGamesService.getBoardGames(finalSearch);
          if (AppState.boardgames <= 0) {
            Pop.toast('Refine your search please')
          }
          if (AppState.skip > 0)


            AppState.queryFilter = [];
          AppState.skip = 0
          console.log(AppState.queryFilter);
        } catch (error) {
          Pop.error(error, '[Cool Search Method]');
        }
      },

      async incrementSkip(x) {
        try {
          switch (x) {
            case 'next':
              AppState.skip += 10
              break;
            case 'prev':
              if (AppState.skip <= 0) {
                return
              } else {
                AppState.skip -= 10
              }
              break;

            default:
              break;
          }
          console.log(AppState.skip);
        } catch (error) {
          Pop.error('[INCREMENT SKIP]', error)
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollableY {
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
}

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

.no-clicky {
  pointer-events: none;
}
</style>
