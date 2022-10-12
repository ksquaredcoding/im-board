<template>
  <div class="filters">
      <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button>
    <div class="list-group-item" v-for="category in categories" :key="category.id">
      <input type="checkbox" value="eX8uuNlQkQ" id="cardGame"  @change="checkBoxMethod()" >
      <label for="card-game">{{category}}</label>
    </div>
   
    <div>
  
    
      
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
cardGame:'eX8uuNlQkQ',
fantasy:'ZTneo8TaIO',
economic:'N0TkEGfEsF',
scifi:'3B3QpKvXD3',
cityBuilding:'ODWOjWAJj3',
medieval:'QAYkTHK1Dd',
adventure:'KUBCKBkGxV'

      },
async getBoardGamesByCategories(category){
  try {
      await atlasGamesService.getBoardGamesByCategories(category)
    } catch (error) {
      Pop.error(error,'[getBoardGamesByCategories]')
    }
},



async checkBoxMethod(){
  try {
  console.log(category);
      await atlasGamesService.getBoardGamesByCategories()
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
