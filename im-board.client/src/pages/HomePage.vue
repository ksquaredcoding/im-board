<template>
<div class="container-fluid">
<div class="row ">

       <div class="col-md-2 bg-c4 p-0 searchcol"> 
<Searchbar/>
<Filters/>
    </div>

    <div class="col-md-10 ">
        <div class="row bg-grey p-3">
            <div class="col-md-12 d-flex justify-content-around align-items-center ">
                <a name="" id="" class="btn bg-c3 text-dark" href="#" role="button">All</a>
                <a name="" id="" class="btn bg-c3 text-dark" href="#" role="button">Popular</a>
                <a name="" id="" class="btn bg-c3 text-dark" href="#" role="button">Highest Rated</a>
                <a name="" id="" class="btn bg-c3 text-dark" href="#" role="button">Wishlist</a>
            </div>
        </div>

          <div class="row justify-content-center">
        <BoardGameCard/>
        <BoardGameCard/>
        <BoardGameCard/>
    </div> 

    </div>

 

</div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from '../utils/Pop.js';
import Filters from "../components/Filters.vue";
import Searchbar from "../components/Searchbar.vue";
import BoardGameCard from "../components/BoardGameCard.vue";

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
    components: { Filters, Searchbar, BoardGameCard }
};
</script>

<style scoped lang="scss">
.searchcol{
   height: 600px;
}

.btn {
  width: 175px;
  font-size: larger;
  font-weight: bold;
  padding: 10px;
  font-family: 'Baloo 2', cursive;
}
</style>
