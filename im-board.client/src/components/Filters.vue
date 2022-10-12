<template>
  <div class="filters">
      <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button>
    <div class="box">
      <input type="checkbox" value="eX8uuNlQkQ" id="cardGame" v-model="categories.cardGame">
      <label for="card-game"></label>
    </div>
    <div class="box">
      <input type="checkbox" value="ZTneo8TaIO" id="fantasy" @click="checkBoxMethod('ZTneo8TaIO')">
      <label for="card-game"></label>
    </div>
    <div class="box">
      <input type="checkbox" value="eX8uuNlQkQ" id="cardGame" v-model="categories.cardGame">
      <label for="card-game"></label>
    </div>
    <div>
      {{categories.cardGame}}
    
      <!-- <ul>
        <li v-for="category in categories.cardGame"></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {

  },

  setup(props) {
const editable = ref('')
    return {
      editable,
      categories:{
cardGame:[]
      },
async getBoardGamesByCategories(category){
  try {
      await atlasGamesService.getBoardGamesByCategories(category)
    } catch (error) {
      Pop.error(error,'[getBoardGamesByCategories]')
    }
},



async checkBoxMethod(category){
  try {
  console.log(category);
      await atlasGamesService.getBoardGamesByCategories(category)
    } catch (error) {
      Pop.error(error,'[]')
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
