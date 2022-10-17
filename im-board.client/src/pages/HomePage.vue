<template>
  <div
    class="container-fluid px-4 homepage animate__animated animate__fadeInLeft"
    v-if="boardGames"
  >
    <div class="row justify-content-center">
      <div class="col-md-12 my-2">
      <HomePageBanner/>
      </div>


      <div class="row mx-2 my-4 ">
        <div class="col-md-12 ">
          <div @click="searchPopular()" class=" hoverable hvr-sweep-to-right bg-c4 rounded-1 p-3">
            <h2 class="rowTitle p-1">Popular Board Games</h2>
          </div>
        </div>
        <TransitionGroup
          name="custom-classes"
          enterActiveClass="animate__zoomIn animate__animated"
          leaveActiveClass="animate__zoomOut animate__animated"
        >
          <div class="col-md-2 mt-3 mb-2 "  v-for="p in popularBoardGames" :key="p.id">
            <BoardGameCard :boardGame="p" />
          </div>
        </TransitionGroup>
      </div>
 
          <div class="row mx-2 my-5">
        <div class="col-md-12">
          <div @click="searchPopular()" class="hoverable hvr-sweep-to-right rounded-1 p-3 bg-c4">
            <h2 class="rowTitle p-1">Games On Discount</h2>
          </div>
        </div>
        <TransitionGroup
          name="custom-classes"
          enterActiveClass="animate__zoomIn animate__animated"
          leaveActiveClass="animate__zoomOut animate__animated"
        >
          <div class="col-md-2 mt-5 mb-2" v-for="d in discountBoardGames" :key="d.id">
            <BoardGameCard :boardGame="d" />
          </div>
        </TransitionGroup>
      </div>
  
        <div class="col-md-12 mt-2 ms-3 ">
           <div  class="hoverable hvr-sweep-to-left p-1 rounded-1 p-3 bg-c5">
           <h3 class="pt-2">
            <b>Articles from </b>
            <img
              src="https://www.boardgameatlas.com/imgs/5cc-api-logo.png"
              alt=""
              height="30"
            />
            <b class="text-primary lighten-10"> Board Game Atlas </b>
          </h3>
          </div>
          
        </div>

        <div class="row horizontal-scrollable ">
          <div class="col-md-3 mt-5 mb-2" v-for="f in forumPosts" :key="f.id">
            <ForumPosts :forumPost="f" />
          </div>
   
      </div>
    </div>
   
      <div class="col-md-12 mt-4">
          <div class=" hvr-sweep-to-left rounded-1 p-3 bg-c5">
            <h2 class="rowTitle p-1 pt-2">Editor's Choice Articles</h2>
          </div>
</div>
      <div class="row horizontal-scrollable mb-4">
     
        <Articles  />
      </div>
    
      <!-- <button @click="getMoreBoardGames()" class="btn btn-danger">
        Load More
      </button> -->
  
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { atlasGamesService } from '../services/AtlasGamesService.js';
import Pop from '../utils/Pop.js';
import Filters from '../components/SearchPage/FiltersSideBar.vue';
import Searchbar from '../components/BoardGame/Searchbar.vue';
import BoardGameCard from '../components/BoardGame/BoardGameCard.vue';
import { AppState } from '../AppState.js';

import ForumPosts from '../components/HomePage/AtlasGamesForumPosts.vue';
import Articles from "../components/HomePage/Articles.vue";
import HomePageBanner from "../components/HomePage/HomePageBanner.vue";
import { router } from "../router.js";

export default {
  setup() {
    const editable = ref('');
    async function getBoardGamesByDiscount() {
      try {
        await atlasGamesService.getBoardGamesByDiscount();
      } catch (error) {
        Pop.error(error, '[getBoardGames]');
      }
    }

     async function getBoardGamesByPopularity() {
      try {
        await atlasGamesService.getBoardGamesByPopularity();
      } catch (error) {
        Pop.error(error, '[getBoardGames]');
      }
    }


    async function getForumPosts() {
      try {
        await atlasGamesService.getForumPosts();
      } catch (error) {
        Pop.error(error, '[getForumPosts]');
      }
    }

    onMounted(() => {
getBoardGamesByPopularity()
 getBoardGamesByDiscount()
      // getBoardGamesByPrice()
      getForumPosts();
      // AppState.skip = 0;
      // window.addEventListener('scroll', handleScroll)
    });

    // async function handleScroll(){
    //  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {

    // }
    // getMoreBoardGames()
    // }

    return {
      editable,
      popularBoardGames: computed(()=> AppState.popularBoardGames),
      boardGames: computed(() => AppState.boardgames),
      forumPosts: computed(() => AppState.forumPosts),
discountBoardGames: computed(()=> AppState.discountBoardGames),
      async getMoreBoardGames() {
        try {
          await atlasGamesService.getBoardGamesOnScroll();
        } catch (error) {
          Pop.error(error, '[getBoardGames]');
        }
      },
      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
        }
      },

      async searchPopular() {
       router.push({name:"Search"})
      },

      
    };
  },
  components: {
    Filters,
    Searchbar,
    BoardGameCard,
  
    ForumPosts,
    Articles,
    HomePageBanner
},
};
</script>

<style scoped lang="scss">
.rowTitle {
  font-weight: 700;
}
.horizontal-scrollable {
  border-radius: 4px;

  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.card-title {
  font-size: 50pt;
  font-weight: 700;
  text-shadow: 2px 2px 0px rgba(190, 205, 208, 0.92);
}

.card-img {
  height: 300px;
  object-fit: cover;

  box-shadow: inset 0 0 10px 10px #000;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.searchcol {
  height: 90.7vh;
}

.btn {
  width: 175px;
  height: 50px;
  overflow: hidden;
  font-size: larger;
  font-weight: bold;
  padding: 10px;
  font-family: 'Baloo 2', cursive;
}

.scrollableY {
  max-height: 79vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.scrollableX{
 border-radius: 4px;

  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}
.presetfilters {
  background-color: #2c2c2fe7;
}

// @media screen AND (max-width: 768px){

// }
</style>
