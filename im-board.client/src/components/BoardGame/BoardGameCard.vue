<template>
    <div class="card elevation-4 my-2" v-if="boardGame">
     <router-link class="text-center" :to="{ name: 'BoardGameDetails', params: { id: boardGame?.id } }"> 
      <img :src="boardGame?.coverImg" alt="" class="forcedImg rounded"  />
</router-link>
      
      <div class="card-body p-1 bg-dark rounded-bottom">
        <p class="card-title d-flex justify-content-center">
           <h4>{{ boardGame?.name }}</h4>
        </p>
        <div class="card-text d-flex justify-content-center">
          Categories: 
        </div>
        <div class="card-text d-flex justify-content-center">
          Players: {{ boardGame?.players}}
        </div>
        <div class="card-text d-flex justify-content-center">
          Rating: {{ boardGame?.average_user_rating.toFixed(2) }} of 5
        </div>
        <div class="addToList">
            <p class="d-flex justify-content-center " >
          <AddToList :boardGameOnHomePage="boardGame" />
        </p>
        </div>
      
      </div>
    </div>
    <div v-else>🦆</div>
  

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
import { BoardGame } from '../../models/BoardGame/BoardGame.js';
import { BoardGameCategory } from "../../models/BoardGame/BoardGameCategory.js";
import AddToList from "./AddToList.vue";

export default {
    props: {
    boardGame: { type: BoardGame, required: true },
    },
    setup(props) {
    
        return {
      //  categories : props.boardGame.categories.map(b=> new BoardGameCategory(b)),
  
   //TODO SORTING BOARD GAME CATEGORIES TO SHOW ON THE HOMEPAGE CARD
  //NEED TO MATCH THE ID AND FIND THE NAME ATTACHED
        };
    },
    components: { AddToList }
};
</script>

<style lang="scss" scoped>

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
  height: 170px;
  width: auto;
  object-fit: contain;
}

.card {
  border: none;
}
</style>
