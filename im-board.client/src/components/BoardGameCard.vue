<template>
    <div class="card elevation-4 my-2" v-if="boardGame">
     <router-link class="text-center" :to="{ name: 'BoardGameDetails', params: { id: boardGame.id } }"> 
      <img :src="boardGame.coverImg" alt="" class="forcedImg rounded" />
</router-link>
      
      <div class="card-body p-1 bg-dark rounded-bottom">
        <p class="card-title d-flex justify-content-center">
          {{ boardGame.name }}
        </p>
        <p class="card-text d-flex justify-content-center">
          {{ boardGame.average_user_rating.toFixed(2) }} of 5
        </p>
        <p class="d-flex justify-content-center">
          <!-- TODO MAKE IT ITS OWN -->
          <AddToList/>
          <!-- <button class="btn bg-c1 text-dark"><b>+ List</b></button> -->
        </p>
      </div>
    </div>
    <div v-else>🦆</div>
  

</template>

<script>
import { BoardGame } from '../models/BoardGame.js';
import AddToList from "./AddToList.vue";

export default {
    props: {
        boardGame: { type: BoardGame, required: true },
    },
    setup(props) {
        return {};
    },
    components: { AddToList }
};
</script>

<style lang="scss" scoped>
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
