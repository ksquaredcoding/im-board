<template>
  <div class="component" v-if="!routeHome" >
    <form @submit.prevent="handleSubmit()">
      <select v-model="editable" class="form-select border-secondary" aria-label="Default select example">
        <option value="favorite">Favorite</option>
        <option value="owned">Owned</option>
        <option value="wish">Wish</option>
      </select>
       <div class="text-center">
      <button class="btn bg-c1 mt-1" type="submit">Add!</button></div>
    </form>
  </div>
  <div class="component" v-else >
    <form @submit.prevent="handleSubmitOnHomePage()">
      <select v-model="editable" class="form-select border-secondary" aria-label="Default select example">
        <option value="favorite">Favorite</option>
        <option value="owned">Owned</option>
        <option value="wish">Wish</option>
      </select>
       <div class="text-center">
      <button class="btn bg-c1 mt-1" type="submit">Add!From Home Page</button></div>
    </form>
  </div>
  
</template>


<script>
import Pop from "../../utils/Pop.js"
import { listsService } from "../../services/ListsService.js";
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
import { ref } from 'vue';
import { useRoute } from "vue-router";
import { BoardGame } from "../../models/BoardGame/BoardGame.js";

export default {
props:{
boardGameOnHomePage: {type: BoardGame}
},
  setup(props) {
    const route = useRoute()
    const editable = ref('')
    return {
      routeHome: computed(() => route.name =='Home'),
      editable,
      boardGame: computed(() => AppState.activeBoardGame),
      // homePageBoardGame : computed(() => AppState.boardgames.find()),
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

          Pop.success(`You Added ${this.boardGame.name} to ${editable.value} list!`)
        } catch (error) {

          Pop.error('You Already Have It Part OF this List')
        }
      },
         async handleSubmitOnHomePage() {
        try {
          let formData = {
            gameId: props.boardGameOnHomePage.id,
            name: props.boardGameOnHomePage.name,
            imgUrl:props.boardGameOnHomePage.largeImage,
            rating: props.boardGameOnHomePage.average_user_rating,
            type: editable.value
          }
          await listsService.addGameToList(formData)

          Pop.success(`You Added ${props.boardGameOnHomePage.name} to ${editable.value} list!`)
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