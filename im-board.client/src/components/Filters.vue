<template>
  <div class="filters container-fluid">
    <div class="row">
      <div class="col-md-2 ">
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Categories
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div
      class="list-group-item inputBox"
      v-for="category in categories"
      :key="category.id"
    >
      <input
        class="checkBox"
        type="checkbox"
        :value="category.id"
        :checked="category.checked"
        :id="category.name"
        @change="checkBoxMethod($event)"
      />
      <label for="card-game">{{ category.name }}</label>
    </div>

    </div>
  </div>


</div>
 
      </div>
    </div>
    <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
  
    <div></div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { AppState } from '../AppState.js';
import { atlasGamesService } from '../services/AtlasGamesService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {},

  setup(props) {
    const editable = ref('');
    return {
      categories: computed(() => AppState.categories),
      filter: computed(() => AppState.activeCategoryFilters),
      editable,

      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
        }
      },

      async checkBoxMethod(event) {
        try {
          // console.log(event.target);
          if (event.target.checked) {
            this.filter.push(event.target.value);
            // console.log(this.filter.toString());
          } else if (!event.target.checked) {
            const index = this.filter.indexOf(event.target.value);
            this.filter.splice(index, 1);
            // console.log(this.filter.toString());
          }

          await atlasGamesService.getBoardGamesByCategories(
            this.filter.toString()
          );
        } catch (error) {
          Pop.error(error, '[checkBoxMethod]');
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
input.checkBox {
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
</style>
