<template>
  <div
    class="search Side Bar d-flex flex-column justify-content-end align-items-center mt-2"
  >
    <h4>Filter By</h4>

    <button @click="filterByOrderBy('')" class="btn bg-transparent"><h6>Most Popular</h6></button>
  
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { AppState } from '../../AppState.js';
import { atlasGamesService } from '../../services/AtlasGamesService.js';
import Pop from '../../utils/Pop.js';

export default {
  setup() {
    const editable = ref('');

    return {
      editable,

      async filterByOrderBy() {
        try {
          await atlasGamesService.getBoardGamesByOrder_By(editable.value);
        } catch (error) {
          Pop.error(error, '[searchByOrderBy]');
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollableY {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
}
.offcanvas {
  width: 200px;
}
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
button:focus {
  color: rgb(31, 28, 28);

  background: linear-gradient(to bottom right, #ff5e00, #ffbb00);
}
</style>
