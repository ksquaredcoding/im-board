<template>
<form @submit.prevent="searchOrder_By()"></form>
    <div>
          <select
          v-model="editable"
            class="form-select bg-transparent border-0"
            aria-label="Default select example"
          >
            <option selected>Sort By</option>
            <option :value="o.name" v-for="o in order_By">{{o.name}}</option>

          </select>
        </div>



   

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
import { ref } from 'vue';
import Pop from "../../utils/Pop.js";
import { atlasGamesService } from "../../services/AtlasGamesService.js";
export default {
  props: {

  },

  setup(props) {
 const editable = ref('')
    return {
      editable,
order_By : computed(()=> AppState.order_By),

async searchOrder_By(){
  try {
      await atlasGamesService.getBoardGamesByOrder_By(editable.value)
    } catch (error) {
      Pop.error(error,'[searchOrder_By]')
    }
}



    };
  },
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>
