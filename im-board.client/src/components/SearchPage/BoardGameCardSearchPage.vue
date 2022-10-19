<template>

     <div class=" bg-transparent card my-4 " v-if="boardGame">
     <router-link class="text-center" :to="{ name: 'BoardGameDetails', params: { id: boardGame?.id } }"> 
      <img :src="boardGame?.coverImg" alt="" class="forcedImg rounded position-relative" @error="altImg()" />
</router-link>
      
      <div class="card-body p-1 mt-2 bg-grey rounded">
       <span class="text-center">

         <h5 class="text-decoration-underline text-wrap">{{ boardGame?.name }}</h5>
       </span>
        
    
        <div class="card-text d-flex justify-content-center">
          <i class="mdi mdi-account fs-5 "></i>
        <div class="mt-1"> {{ boardGame?.players}}</div>
        </div>
      <div class="card-text d-flex justify-content-center" title="Average User Rating">
        <i class="mdi mdi-star text-warning"></i> {{ boardGame?.average_user_rating.toFixed(2) }}
      
      </div>
        <div class="d-flex justify-content-center" v-if="boardGame.price >0 ">
          <img src="https://cdn-icons-png.flaticon.com/512/2178/2178616.png" alt="" height="15">
         <p > ${{boardGame.price}}</p>
           <small class="text-decoration-line-through opacity-75 ms-3 me-1">
              {{boardGame.retailPrice}} 
        </small>
      <small class="opacity-75">retail price</small>
        </div>
        <div class="d-flex justify-content-center align-items-center" v-else >
          <img src="https://cdn-icons-png.flaticon.com/512/8634/8634777.png" alt="" height="40" width="40">
          <p class="mb-0">Currently unavailable</p>
        </div>

        <div class="d-flex justify-content-center">
       
        </div>
        <div class="d-flex justify-content-center discount" v-if="boardGame.discount >0" >
         {{(boardGame.discount*100).toFixed(0)}} <small>%off</small>

        </div>
     
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
import AddToList from "../BoardGame/AddToList.vue";

export default {
    props: {
    boardGame: { type: BoardGame, required: true },
    },
    setup(props) {
   const  route = useRoute()
        return {



          route

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
 
top: -5px;
  position: absolute;
  font-weight: 500;
  font-size: 16pt;
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
