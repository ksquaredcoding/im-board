<template></template>

<script>
import { onMounted } from "vue";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getBoardGames() {
      try {
        await atlasGamesService.getBoardGames()
      } catch (error) {
        Pop.error(error, '[getBoardGames]');
      }
    }

    onMounted(()=>{
      getBoardGames()
    })
    return {
      //Infinite Scroll need to add to it and test
      getNextSetOfBoardGames() {
        window.onscroll(() => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            //await service.getNextPage or something()
          }
        });
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
