<template>
<div class="container-fluid px-0">

    <div class="col-3 bg-c4 searchcol"> 
<Searchbar/>
<Filters/>
    </div>

</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from '../utils/Pop.js';
import Filters from "../components/Filters.vue";
import Searchbar from "../components/Searchbar.vue";

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
    components: { Filters, Searchbar }
};
</script>

<style scoped lang="scss">
.searchcol{
   height: 600px;
}
</style>
