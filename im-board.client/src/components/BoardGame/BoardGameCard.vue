<template>

     <div class=" bg-transparent card my-2 " v-if="boardGame">
     <router-link class="text-center" :to="{ name: 'BoardGameDetails', params: { id: boardGame?.id } }"> 
      <img :src="boardGame?.coverImg" alt="" class="forcedImg rounded position-relative" @error="badImg" />
</router-link>
      
      <div class="card-body p-1 mt-2 bg-dark rounded">
       <span class="text-center" title="Game title">

         <h6 class="text-decoration-underline text-wrap">{{ boardGame?.name }}</h6>
       </span>
        
        <!-- <div class="card-text d-flex justify-content-center">
          Categories: 
        </div> -->
        <div class="card-text d-flex justify-content-center" title="Recommended Players">
          <i class="mdi mdi-account"></i>
         {{ boardGame?.players}}
        </div>
        <div class="card-text d-flex justify-content-center" title="Average User Rating">
       <i class="mdi mdi-star text-warning"></i>    {{ boardGame?.average_user_rating.toFixed(2) }} 

        </div>
        <div class="d-flex justify-content-center" title="Price">
          <img src="https://cdn-icons-png.flaticon.com/512/2178/2178616.png" alt="" height="15">
          ${{boardGame.price}}
          
        </div>
        <div class="d-flex justify-content-center discount  " v-if="(boardGame.discount*100) >= 45" title="Discounted Percent">
         {{(boardGame.discount*100).toFixed(0)}} <i class="mdi mdi-percent"></i> <p>off</p>

        </div>
        <!-- <div class="addToList">
            <p class="d-flex justify-content-center " >
          <AddToList :boardGameOnHomePage="boardGame" />
        </p>
        </div> -->
      
      </div>
    </div>
    <div v-else>🦆</div>


</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { AppState } from "../../AppState.js";
import { BoardGame } from '../../models/BoardGame/BoardGame.js';
import { BoardGameCategory } from "../../models/BoardGame/BoardGameCategory.js";
import AddToList from "./AddToList.vue";

export default {
    props: {
    boardGame: { type: BoardGame, required: true },
    },
    setup(props) {
   const  route = useRoute()
        return {
 badImg(event) {
        event.target.src =
          'https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/285341017_491972112936262_428169449585977605_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=luxW5EmZWc8AX_7Q3Ng&_nc_ht=scontent-fml2-1.xx&oh=00_AT_-9bi9Fn51koLGEax6amFRkok4JRe8L2X4z88qiPA4OA&oe=635181DB';
      },


          route
      //  categories : props.boardGame.categories.map(b=> new BoardGameCategory(b)),
  
   //TODO SORTING BOARD GAME CATEGORIES TO SHOW ON THE HOMEPAGE CARD
  //NEED TO MATCH THE ID AND FIND THE NAME ATTACHED
        };
    },
    components: { AddToList }
};
</script>

<style lang="scss" scoped>
.hvr-bob{
  transition: all 0.5s ease;
}
.discount{
 
top: -30px;
  position: absolute;
  font-weight: 700;
  font-size: 20pt;
  font-style: oblique;
  color: rgb(240, 69, 69);
}
.addToList{

  opacity: 0;
transition: all 0.5s ease;
}

.addToList:hover{

  opacity: 100%;
  transition:  all 0.5s ease;
}
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 125px;
  width: auto;
  object-fit: contain;
}


.card {
 
  border: none;
  transition: 0.5s ease;
  
}

.card:hover{

  transform: scale(1.04);
  filter: brightness(110%);
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition:all 0.5s ease;


  
}
</style>
