<template>
  <header class="bg-dark">
    <Navbar class="animate__animated animate__fadeInDown" />
  </header>
  <main>
    <router-view />
  </main>
<Filters />
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

main{
  background-image: url(../assets/img/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg);
  background-attachment: fixed;
  background-position: center;
}
</style>
