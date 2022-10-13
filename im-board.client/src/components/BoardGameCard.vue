<template>
 
  <router-link
    :to="{ name: 'BoardGameDetails', params: { id: boardGame.id } }"
    v-if="boardGame"
  >
    <div class="card bg-transparent elevation-4 my-2">
      <img :src="boardGame.coverImg" alt="" class="forcedImg rounded" />
      <div class="card-body p-1 bg-dark rounded-bottom">
        <p class="card-title d-flex justify-content-center">
          {{ boardGame.name }}
        </p>
        <p class="card-text d-flex justify-content-center">
          {{ boardGame.average_user_rating.toFixed(2) }} of 5
        </p>
        <p class="d-flex justify-content-center">
       <!-- TODO MAKE IT ITS OWN -->
          <button class="btn bg-c1 text-dark"><b>+ List</b></button>
        </p>
      </div>
    </div>
  </router-link>

</template>

<script>
import { BoardGame } from '../models/BoardGame.js';

export default {
  props: {
    boardGame: { type: BoardGame, required: true },
  },

  setup(props) {
    return {};
  },
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
