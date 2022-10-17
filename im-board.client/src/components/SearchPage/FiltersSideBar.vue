<template>

<div class="d-flex flex-column justify-content-center mb-4">
  <span class="mb-2 d-flex ms-3">

    <h3>Deals</h3>
  </span>
<div class="flex-column d-flex">
  <button @click.prevent="searchByLT_Price()" class="btn ">Under 20$</button>
  <button class="btn ">Over 50% off</button>

 
</div>
</div>






  <!-- <div class="filters container">
    <div class="row">
      <div class="col-md-12">
        <h4>Categories</h4>
        <div
          class="list-group-item inputBox d-flex"
          v-for="category in categories"
          :key="category.id"
        >
          <input
            class="checkBox"
            type="checkbox"
            :value="category.id"
            :checked="category.checked"
            :id="category.name"
            @change="checkBoxMethod($event)"
          />
          <label for="card-game" class="ms-2">{{ category.name }}</label>
        </div>
        
      </div>
    </div>

  </div> -->


  <div class="accordion  " id="accordionFlushExample">
  <div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed button-50" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Categories
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse bg-dark" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

    <div class="row scrollableY p-2">
      <div class="col-md-12 ">
     
        <div
          class="list-group-item inputBox d-flex"
          v-for="category in categories"
          :key="category.id"
        >
          <input
            class="checkBox"
            type="checkbox"
            :value="category.id"
            :checked="category.checked"
            :id="category.name"
            @change="checkBoxMethodForCategory($event)"
          />
          <label for="card-game" class="ms-2">{{ category.name }}</label>
       
        
      </div>
    </div>
    <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
  </div>
    </div>
  </div>


</div>

  <div class="accordion  " id="accordionFlushExample2">
  <div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed button-50" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Mechanics
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse bg-dark" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample2">

    <div class="row scrollableY p-2">
      <div class="col-md-12 ">
     
        <div
          class="list-group-item inputBox d-flex"
          v-for="m in mechanics"
          :key="m.id"
        >
          <input
            class="checkBox"
            type="checkbox"
            :value="m.id"
            :checked="m.checked"
            :id="m.name"
            @change="checkBoxMethodForMechanics($event)"
          />
          <label for="card-game" class="ms-2">{{ m.name }}</label>
       
        
      </div>
    </div>
    <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
  </div>
    </div>
  </div>


</div>

  
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { AppState } from '../../AppState.js';
import { atlasGamesService } from '../../services/AtlasGamesService.js';
import Pop from '../../utils/Pop.js';

export default {
  props: {},

  setup(props) {
    const editable = ref('');
    return {
      categories: computed(() => AppState.bgCategories),
      mechanics: computed(()=>AppState.bgMechanics),
      categoryFilters: computed(() => AppState.activeCategoryFilters),
      mechanicFilters:computed(()=>AppState.activeMechanicsFilters),
      editable,

      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
        }
      },

      async checkBoxMethodForMechanics(event) {
        try {
  
          if (event.target.checked) {
            this.mechanicFilters.push(event.target.value);
      
          } else if (!event.target.checked) {
            const index = this.mechanicFilters.indexOf(event.target.value);
            this.mechanicFilters.splice(index, 1);
         
          }

          await atlasGamesService.getBoardGamesByMechanics(
            this.mechanicFilters.toString()
          );
        } catch (error) {
          Pop.error(error, '[checkBoxMethod]');
        }
      },
      async checkBoxMethodForCategory(event) {
        try {
  
          if (event.target.checked) {
            this.categoryFilters.push(event.target.value);
      
          } else if (!event.target.checked) {
            const index = this.categoryFilters.indexOf(event.target.value);
            this.categoryFilters.splice(index, 1);
         
          }

          await atlasGamesService.getBoardGamesByCategories(
            this.categoryFilters.toString()
          );
        } catch (error) {
          Pop.error(error, '[checkBoxMethod]');
        }
      },

async searchByLT_Price(){
  try {
      await atlasGamesService.getBoardGamesByPrice()
    } catch (error) {
      Pop.error(error,'[searchByLT_Price]')
    }
},




    };
  },
};
</script>

<style lang="scss" scoped>
// input.checkBox {
// }

.scrollableY{
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
</style>
