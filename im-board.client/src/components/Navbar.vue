<template>
  <nav class="navbar  navbar-dark bg-dark px-md-3 justify-content-center  " data-bs-target="#topOfPage">
    <div class=" col-md d-flex">
      <!-- TODO make into component. -->
      <div class="ps-3 d-none d-sm-block">

        <a class="btn button-51 py-1 px-2 mx-2 " data-bs-toggle="modal" data-bs-target="#groupForm"
          v-if="user.isAuthenticated">
          Create Group
        </a>
        <button class=" button-51 disabled py-1 px-2 " disabled v-else title="Not Logged In">
          Create Group
        </button>

      </div>
      <div class="ps-4">
        <Searchbar class="d-none d-md-block" />
      </div>
      <!-- TODO END -->
    </div>

    <div class="col-md d-flex justify-content-end align-items-center">

      <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Home' }">
        <div class="d-flex align-items-center justify-content-center hover">
          <img alt="logo" src="src\assets\img\logonotext.png" height="45" id="gameLogo"
            class="bg-grey rounded-4  p-1 " />
          <p class=" mb-0 mx-2 navbar-title justify-content-center">
          <article class="">I'm Game!</article>
          </p>
        </div>
      </router-link>
    </div>

    <div class="col-md d-flex flex-row justify-content-end">

      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://cdn-icons-png.flaticon.com/512/1156/1156949.png" alt="" width="30" height="30" class="me-3">
          <img src="https://cdn-icons-png.flaticon.com/512/1182/1182769.png" alt="" width="50" height="50"
            class="me-3 heart animate__animated animate_fadeIn">

        </button>
        <ul class="dropdown-menu">
          <!-- <li class="dropdown-item" v-for="invite in invites" :key="invite.id">Hi</li> -->
         
        </ul>
      </div>
    </div>
    <div class="pe-3 d-flex d-none d-md-block">



      <!-- NOTE notification icon here -->






      <router-link :to="{name: 'Account'}" v-if="user.isAuthenticated">
        <a name="" id="" class="btn button-50 py-1 px-2 mx-2" href="#" role="button">Account</a>
      </router-link>

      <Login />

    </div>

    <!-- -----------------FOR MOBILE VIEW------------------------- -->
    <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">




      <Searchbar />




      <div class="col-md-12  d-flex  justify-content-center my-2">
        <div class="pe-3  d-flex">

          <!-- <router-link :to="{name: 'Profile', params:{id: user.id}}" v-if="user.isAuthenticated">
            <a name="" id="" class="btn button-52 py-1 px-2 mx-2" href="#" role="button">Profile</a>
          </router-link> -->

          <router-link :to="{name: 'Account'}" v-if="user.isAuthenticated">
            <a name="" id="" class="btn button-52 py-1 px-2 mx-2" href="#" role="button">Account</a>
          </router-link>

          <Login />
        </div>

      </div>
    </div>
  </nav>

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { AuthService } from "../services/AuthService.js";
import Login from './Login.vue';
import GroupForm from "./GroupPage/GroupForm.vue";
import Searchbar from "./SearchPage/Searchbar.vue";
import { onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";
export default {
  setup() {
    async function getInvites(){
      try {
          await accountService.getInvites()
        } catch (error) {
          Pop.error(error)
        }


    }
    onMounted(() => {
      getInvites()
    })
    return {
      groups: computed(() => AppState.groups),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
    };
  },
  components: { Login, GroupForm, Searchbar },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}


article {
  background: linear-gradient(to right,
      #ffbb00,
      #ff5e00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  font-family: 'Baloo 2', cursive;
}

@keyframes animateHeart {
  0% {
    transform: scale(0.8);
  }

  5% {
    transform: scale(0.8);
  }

  10% {
    transform: scale(0.85);
  }

  15% {
    transform: scale(0.85);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(0.8);
  }
}

.heart {
  animation: animateHeart 1.2s infinite;
}

@keyframes spinMeRightRound {
  0% {
    transform: rotate(90deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(270);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinMeRightRound {
  animation: spinMeRightRound 3.2s infinite;
}

.dropdown-content {
  z-index: 9999;
}

.dropdown {

  float: right;
}

.dropdown-menu {
  z-index: 9999;
}
</style>
