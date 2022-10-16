<template>
  <header class="bg-dark">
    <Navbar class="animate__animated animate__fadeInDown" />
  </header>
  <main>
    <router-view />
  </main>

 <GroupForm/>
  <EditBanner/>
  <EditName/>
  <EditPic/>
  <!-- <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer> -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import GroupForm from "./components/GroupPage/GroupForm.vue"
import EditBanner from "./components/AccountProfilePage/EditBanner.vue"
import EditName from "./components/AccountProfilePage/EditName.vue"
import EditPic from "./components/AccountProfilePage/EditPic.vue"
import Filters from "./components/BoardGame/Filters.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, GroupForm, EditBanner, EditName, EditPic, Filters }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
*::-webkit-scrollbar {
  width: 13px;
  width: 13px;
}
*::-webkit-scrollbar-track {

  background-color: #2c2c2f;
  cursor: pointer;
}

*::-webkit-scrollbar-track:hover {
  cursor: pointer;
}

*::-webkit-scrollbar-track:active {
 
}


*::-webkit-scrollbar-thumb {
  width: 100px;
  border-radius: 10px;
 background: linear-gradient(to bottom right, #a8dba8, #0B486B);
}

*::-webkit-scrollbar-thumb:active {
  width: 100px;
  border-radius: 10px;
  transition: all 0.5s ease;
  background: linear-gradient(to bottom right, #ff5e00, #ffbb00);
}
</style>
