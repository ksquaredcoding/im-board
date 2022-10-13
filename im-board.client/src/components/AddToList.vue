<template>
  <div class="component">
    <form @submit.prevent="handleSubmit()">
      <select v-model="editable" class="form-select" aria-label="Default select example">
        <option value="favorite">Favorite</option>
        <option value="owned">Owned</option>
        <option value="wish">Wish</option>
      </select>
      <button class="btn bg-c1 mt-1" type="submit">Add!</button>
    </form>
  </div>
</template>


<script>
import Pop from "../utils/Pop.js"
import { listsService } from "../services/ListsService.js";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { ref } from 'vue';

export default {

  setup() {
    const editable = ref('')
    return {
      editable,
      boardGame: computed(() => AppState.activeBoardGame),
      async handleSubmit() {
        try {
          let formData = {
            gameId: this.boardGame.id,
            name: this.boardGame.name,
            imgUrl: this.boardGame.coverImg,
            rating: this.boardGame.average_user_rating,
            type: editable.value
          }
          await listsService.addGameToList(formData)
        } catch (error) {

          Pop.error('You Already Have It Part OF this List')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>