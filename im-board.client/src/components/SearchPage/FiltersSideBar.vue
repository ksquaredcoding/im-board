<template>


  <!-- SECTION CATEGORIES ACCORDION -->
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
              v-for="category in categories"
              :key="category.id"
            >
              <input
                class="checkBox"
                type="checkbox"
                :value="category.id"
                :checked="category.checked"
                :id="category.name"
                @change="checkBoxMethodForCategory($event)"
              />
              <label for="card-game" class="ms-2">{{ category.name }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- !SECTION -->

  <!-- SECTION MECHANICS ACCORDION-->
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
                :checked="m.checked"
                :id="m.name"
                @change="checkBoxMethodForMechanics($event)"
              />
              <label for="card-game" class="ms-2">{{ m.name }}</label>
            </div>
          </div>
          <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- !SECTION -->
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { AppState } from '../../AppState.js';
import { atlasGamesService } from '../../services/AtlasGamesService.js';
import Pop from '../../utils/Pop.js';

export default {
  props: {},

  setup(props) {
    const editable = ref('');
    return {
      categories: computed(() => AppState.bgCategories),
      mechanics: computed(() => AppState.bgMechanics),
      categoryFilters: computed(() => AppState.activeCategoryFilters),
      mechanicFilters: computed(() => AppState.activeMechanicsFilters),


      editable,

      async checkBoxMethodForMechanics(event) {
        try {
          if (event.target.checked) {
            this.mechanicFilters.push(event.target.value);
          } else if (!event.target.checked) {
            const index = this.mechanicFilters.indexOf(event.target.value);
            this.mechanicFilters.splice(index, 1);
          }

          await atlasGamesService.getBoardGamesByMechanics(
            this.mechanicFilters.toString()
          );
        } catch (error) {
          Pop.error(error, '[checkBoxMethod]');
        }
      },
      async checkBoxMethodForCategory(event) {
        try {
          if (event.target.checked) {
            this.categoryFilters.push(event.target.value);
          } else if (!event.target.checked) {
            const index = this.categoryFilters.indexOf(event.target.value);
            this.categoryFilters.splice(index, 1);
          }

          await atlasGamesService.getBoardGamesByCategories(
            this.categoryFilters.toString()
          );
        } catch (error) {
          Pop.error(error, '[checkBoxMethod]');
        }
      },

      async searchByLT_Discount(event) {
        try {
          this.queryFilter.push(event.target.value);

          await atlasGamesService.getBoardGamesByDiscount();
        } catch (error) {
          Pop.error(error, '[searchByLT_Price]');
        }
      },
      async searchByPrice() {
        try {
          await atlasGamesService.getBoardGamesByPrice();
        } catch (error) {
          Pop.error(error, '[]');
        }
      },

      async searchByPopularity() {
        try {
          await atlasGamesService.getBoardGames();
        } catch (error) {
          Pop.error(error, '[searchByPopularity]');
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollableY {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
}
.offcanvas {
  width: 200px;
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
</style>
