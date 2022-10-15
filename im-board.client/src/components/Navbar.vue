<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/5569/5569273.png" height="45" />
       <h3 class="ms-3">I'm Game</h3>
      </div>
    </router-link>
   
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
          <router-link :to="{ name: 'BoardGameDetails', params: {id: 'TAAifFP590' } }"
            class="btn text-success lighten-30 selectable text-uppercase">
            game details
          </router-link>
        </li>
      </ul>
      <Login />
    </div>
  </nav> -->

  <nav class="navbar navbar-dark bg-dark px-3  " data-bs-target="#topOfPage" >
    <div class=" col-md d-flex">
      <!-- TODO make into component. -->
      <div class="ps-3 d-none d-sm-block">

        <a class="btn button-51 py-1 px-2 mx-2" data-bs-toggle="modal" data-bs-target="#groupForm">
          Create Group
        </a>
        
      </div><div class="ps-4"><Searchbar/></div>
      <!-- TODO END -->
    </div>
    
    <div class="col-md d-flex justify-content-center align-items-center">
      
      <router-link class="navbar-brand d-flex justify-content-center" :to="{ name: 'Home' }">
        <div class="d-flex align-items-center justify-content-center">
          <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/5569/5569273.png" height="45" />
          <p class=" mb-0 mx-2 navbar-title justify-content-center">I'm Game</p>
        </div>
      </router-link>
     

    </div>
   
    
    <div class="col-md d-flex flex-row-reverse">
      <!-- TODO make into component -->
      <div class="pe-3  d-flex d-none d-sm-block">

        <router-link :to="{name: 'Profile'}">
          <a name="" id="" class="btn button-50 py-1 px-2 mx-2" href="#" role="button">Profile</a>
        </router-link>

        <router-link :to="{name: 'Account'}">
          <a name="" id="" class="btn button-50 py-1 px-2 mx-2" href="#" role="button">Account</a>
        </router-link>

        <Login />
      </div>
      <!-- TODO END -->
    </div>

    <div class="col-12 d-flex justify-content-between g-2 d-md-none">
      <i class="mdi mdi-magnify fs-1" alt="search" title="search"></i>
      <i class="mdi mdi-account-circle fs-1" alt="search" title="search"></i>
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { AuthService } from "../services/AuthService.js";
import Login from './Login.vue';
import GroupForm from "./GroupPage/GroupForm.vue";
import Searchbar from "./BoardGame/Searchbar.vue";
export default {
  setup() {
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

nav {
  font-family: 'Baloo 2', cursive;
}

.navbar-title {
  font-size: 40px;
}


@media screen AND (max-width: 768px) {}
</style>
