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

  <nav class="navbar navbar-dark bg-dark px-3">

    <div class="col d-flex">

      <!-- TODO make into component -->
      <div class="ps-3 mt-4">
        <a name="" id="" class="btn bg-c2 me-2 px-2" href="#" role="button">Groups</a>
        <a name="" id="" class="btn bg-c2" href="#" role="button">Lists</a>
      </div>
      <!-- TODO END -->

    </div>
    <div class="col">

      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex align-items-center">
          <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/5569/5569273.png" height="45" />
          <h3 class="ms-3 navbar-title">I'm Game</h3>
        </div>
      </router-link>

    </div>

    <div class="col d-flex flex-row-reverse">

      <!-- TODO make into component -->
      <div class="pe-3 mt-4">
        <a name="" id="" class="btn bg-c5 me-2 px-2" href="#" role="button">Profile</a>
        <a name="" id="" class="btn bg-c5" href="#" role="button">Logout</a>
        <Login />
      </div>
      <!-- TODO END -->


    </div>

  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
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
  font-size: 65px;
}

.btn {
  width: 70px;
  font-weight: 600;
}
</style>
