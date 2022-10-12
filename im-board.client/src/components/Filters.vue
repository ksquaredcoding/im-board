<template>
  <div class="filters">
    <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button>
    <div
      class="list-group-item"
      v-for="category in categories"
      :key="category.id"
    >
      <input
        type="checkbox"
        :value="category.id"
        id="cardGame"
        @change="checkBoxMethod(category.id)"
      />
      <label for="card-game">{{ category.name }}</label>
    </div>

    <div></div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { AppState } from "../AppState.js";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},

  setup(props) {
    // async function getCategories() {
    //   try {
    //     await atlasGamesService.getCategories();
    //   } catch (error) {
    //     Pop.error(error);
    //   }
    // }
    // onMounted(() => {
    //   getCategories();
    // });
    const editable = ref("");
    return {
      categories: computed(() => AppState.categories),
      filter: computed(() => AppState.activeCategoryFilters),
      editable,

      // categories: {
      //   cardGame: "eX8uuNlQkQ",
      //   fantasy: "ZTneo8TaIO",
      //   economic: "N0TkEGfEsF",
      //   scifi: "3B3QpKvXD3",
      //   cityBuilding: "ODWOjWAJj3",
      //   medieval: "QAYkTHK1Dd",
      //   adventure: "KUBCKBkGxV",
      // },
      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, "[getBoardGamesByCategories]");
        }
      },

      async checkBoxMethod(category) {
        try {
          this.filter.push(category);
          // console.log(this.filter);
          await atlasGamesService.getBoardGamesByCategories(this.filter.toString());
        } catch (error) {
          Pop.error(error, "[]");
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
</style>
