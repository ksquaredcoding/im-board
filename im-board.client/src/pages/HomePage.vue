<template>
  <div class="container-fluid homepage animate__animated animate__fadeInDown" v-if="boardGames">
    <div class="row justify-content-center">
      <div class="col-md-11 my-2">
        <div class="card text-bg-dark">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftoplayishuman.com%2Fwp-content%2Fuploads%2F2019%2F01%2FIMG_20190130_152747_418.jpg%3Ffit%3D5036%252C2988%26ssl%3D1&f=1&nofb=1&ipt=9e11893fac6ce63d012fa63be477227bf1f90ae9e1d1700105291a01b6d9b874&ipo=images"
            class="card-img" alt="...">
          <div class="card-img-overlay">
            <h5 class="card-title">Fall In Love With BoardGames</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
        </div>

      </div>

      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3" v-for="f in forumPosts" :key="f.id">
            <ForumPosts :forumPost="f" />
          </div>
        </div>

        <div class="row mx-2">
          <TransitionGroup name="custom-classes" enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__zoomOut animate__animated">
            <div class="col-md-3" v-for="b in boardGames" :key="b.id">
              <BoardGameCard :boardGame="b" />

            </div>

          </TransitionGroup>
        </div>
      </div>
    </div>
    <div class="row justify-content-start">
      <button class="btn btn-dark">

        <a href="#">Return To Top</a>
      </button>
      <button @click="getMoreBoardGames()" class="btn btn-danger">
        Load More
      </button>

    </div>
  </div>
</template>
<TransitionGroup
  name="custom-classes"
  enterActiveClass="animate__zoomIn animate__animated"
  leaveActiveClass="animate__zoomOut animate__animated"
></TransitionGroup>
<script>
import { onMounted, ref, computed } from 'vue';
import { atlasGamesService } from '../services/AtlasGamesService.js';
import Pop from '../utils/Pop.js';
import Filters from '../components/BoardGame/Filters.vue';
import Searchbar from '../components/BoardGame/Searchbar.vue';
import BoardGameCard from '../components/BoardGame/BoardGameCard.vue';
import { AppState } from '../AppState.js';
import PresetFilterBar from '../components/BoardGame/PresetFilterBar.vue';
import ForumPosts from "../components/ForumPosts.vue";

export default {
  setup() {
    const editable = ref('');
    async function getBoardGames() {
      try {
        await atlasGamesService.getBoardGames();
      } catch (error) {
        Pop.error(error, '[getBoardGames]');
      }
    }

    async function getForumPosts() {
      try {
        await atlasGamesService.getForumPosts()
      } catch (error) {
        Pop.error(error, '[getForumPosts]')
      }
    }


    onMounted(() => {
      getBoardGames();
      getForumPosts()
      AppState.skip = 0
      // window.addEventListener('scroll', handleScroll)
    });

    // async function handleScroll(){
    //  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {

    // }
    // getMoreBoardGames()
    // }



    return {
      editable,
      boardGames: computed(() => AppState.boardgames),
      forumPosts: computed(() => AppState.forumPosts),

      async getMoreBoardGames() {
        try {
          await atlasGamesService.getBoardGamesOnScroll();
        } catch (error) {
          Pop.error(error, '[getBoardGames]');
        }
      }
      ,

      async getBoardGamesByCategories(category) {
        try {
          await atlasGamesService.getBoardGamesByCategories(category);
        } catch (error) {
          Pop.error(error, '[getBoardGamesByCategories]');
        }
      },



    };
  },
  components: { Filters, Searchbar, BoardGameCard, PresetFilterBar, ForumPosts },
};
</script>

<style scoped lang="scss">
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

.homepage {
  min-height: 90vh;
  background-image: url(../assets/img/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg);
  background-attachment: fixed;
  background-position: center;
}

.scrollableY {
  max-height: 79vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.presetfilters {
  background-color: #2c2c2fe7;
}

// @media screen AND (max-width: 768px){

// }
</style>
