<template>
  <div class="homePage container-fluid">
  <div class="row">
    <div class="col-md-12">
      <Filters />
    </div>
  </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from '../utils/Pop.js';
import Filters from "../components/Filters.vue";

export default {
    setup() {
        const editable = ref("");
        async function getBoardGames() {
            try {
                await atlasGamesService.getBoardGames();
            }
            catch (error) {
                Pop.error(error, "[getBoardGames]");
            }
        }
        onMounted(() => {
            getBoardGames();
        });
        return {
            editable,
            async getBoardGamesByCategories(category) {
                try {
                    await atlasGamesService.getBoardGamesByCategories(category);
                }
                catch (error) {
                    Pop.error(error, "[getBoardGamesByCategories]");
                }
            },
            //Infinite Scroll need to add to it and test
            getNextSetOfBoardGames() {
                window.onscroll(() => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight ===
                        document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        //await service.getNextPage or something()
                    }
                });
            },
        };
    },
    components: { Filters }
};
</script>

<style scoped lang="scss"></style>
