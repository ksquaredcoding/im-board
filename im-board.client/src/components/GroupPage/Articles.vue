<template>


     
   <div class="col-md-2">
      <div class="bg-transparent card my-2" >
       <img src="https://www.grunge.com/img/gallery/heres-why-dice-were-invented/intro-1656601577.webp" alt="" class="forcedImg rounded" />
   
       <div class="card-body p-1  bg-dark rounded">
         <a href="https://www.grunge.com/912859/heres-why-dice-were-invented/">
   
           <h6 class="text-light">Heres why dice were invented</h6>
         </a>
       </div>
     </div>
   
   </div>
    
     
   <div class="col-md-2">
      <div class="bg-transparent card my-2" >
       <img src="https://geekgeargalore.com/wp-content/uploads/2019/11/Ancient-Dice.jpg" alt="" class="forcedImg rounded" />
   
       <div class="card-body p-1  bg-dark rounded">
         <a href="https://geekgeargalore.com/wp-content/uploads/2019/11/Ancient-Dice.jpg">
   
           <h6 class="text-light">The Complete History of Board Games
Byron
November 17, 2019</h6>
         </a>
       </div>
     </div>
   
   </div>
    
     
   <div class="col-md-2">
      <div class="bg-transparent card my-2" >
       <img src="https://www.sheknows.com/wp-content/uploads/2018/08/pd50yqoqpnwixdnavxuf.jpeg" alt="" class="forcedImg rounded" />
   
       <div class="card-body p-1  bg-dark rounded">
         <a href="https://www.sheknows.com/entertainment/articles/1137378/fun-facts-about-the-original-jumanji/">
   
           <h6 class="text-light">16 Fun Facts About the Original Jumanji
Samantha Puc

by SAMANTHA PUC

Plus Icon

DECEMBER 18, 2017 AT 1:00PM PM EST</h6>
         </a>
       </div>
     </div>
   
   </div>
    
     
   <div class="col-md-2">
      <div class="bg-transparent card my-2" >
       <img src="https://whatnerd.com/wp-content/uploads/2020/05/board-game-types-genres-explained-featured.jpg" alt="" class="forcedImg rounded" />
   
       <div class="card-body p-1  bg-dark rounded">
         <a href="ttps://www.grunge.com/912859/heres-why-dice-were-invented/">
   
           <h6 class="text-light">The Most Popular Types of Board Games: Board Game Genres, Explained
            <br>

BY
JOEL LEE
MAR 10, 2021
           </h6>
         </a>
       </div>
     </div>
   
   </div>
    
   <div class="col-md-2">
      <div class="bg-transparent card my-2" >
       <img src="https://lovethynerd.com/wp-content/uploads/2019/02/Among-The-Stars-822x675.jpg?x99318" alt="" class="forcedImg rounded" />
   
       <div class="card-body p-1  bg-dark rounded">
         <a href="https://lovethynerd.com/why-do-board-games-matter/">
   
           <h6 class="text-light">Why Do Board Games Matter? 
            By Mike Perna FEB 18,2021
           </h6>
         </a>
       </div>
     </div>
   
   </div>
    

      

</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { AppState } from '../../AppState.js';
import { BoardGame } from '../../models/BoardGame/BoardGame.js';
import { BoardGameCategory } from '../../models/BoardGame/BoardGameCategory.js';


export default {

  setup(props) {
    const route = useRoute();
    return {
      route,
      //  categories : props.boardGame.categories.map(b=> new BoardGameCategory(b)),

      //TODO SORTING BOARD GAME CATEGORIES TO SHOW ON THE HOMEPAGE CARD
      //NEED TO MATCH THE ID AND FIND THE NAME ATTACHED
    };
  },

};
</script>

<style lang="scss" scoped>
.addToList {
  opacity: 0;
  transition: all 0.5s ease;
}

.addToList:hover {
  opacity: 100%;
  transition: all 0.5s ease;
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
  transition: 0.5s ease;
}

.card:hover {
  transform: scale(1.04);
  filter: brightness(110%);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: all 0.5s ease;
}
</style>
