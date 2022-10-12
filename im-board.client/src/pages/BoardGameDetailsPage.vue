<template>
  <section class="container" v-if="boardGame">
    <div class="row">
      <div class="col-12 bg-info text-center my-3 py-3">
        <h1>{{boardGame.name}}</h1>
      </div>
      <div class="col-6" :style="{backgroundImage: `url(${boardGame.coverImg})`}"></div>
      <div class="col-6"></div>
    </div>
  </section>
</template>


<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    // const route = useRoute();

    async function getBoardGameDetailsById() {
      try {
        await atlasGamesService.getBoardGameDetailsById('TAAifFP590')
      } catch (error) {
        console.error('[]', error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      getBoardGameDetailsById()
    })
    return {
      boardGame: computed(() => AppState.activeBoardGame)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>