<template>
  <header class="bg-dark">
    <Navbar class="animate__animated animate__fadeInDown d-none d-md-flex" />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="p-2 bg-dark mt-1">
    <Navbar class="animate__animated animate__fadeInDown d-md-none" />
    <Footer />
  </footer>
  <GroupForm />
  <EditGroupForm />
  <EditBanner />
  <EditName />
  <EditPic />
  <GoogleMapModal />
  <FAQModal />
  <GameNightForm />
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";

import EditBanner from "./components/AccountProfilePage/EditAccountModal.vue";
import EditName from "./components/AccountProfilePage/EditName.vue";
import EditPic from "./components/AccountProfilePage/EditPic.vue";
import Filters from "./components/SearchPage/FiltersSideBar.vue";
import { useRoute } from "vue-router";
import Footer from "./components/FooterFooter.vue";
import GoogleMapModal from "./components/GoogleMapModal.vue";
import FAQModal from "./components/FAQModal.vue";
import GameNightForm from "./components/GroupPage/GameNightForm.vue";
import GroupForm from "./components/GroupPage/GroupForm.vue";
import EditGroupForm from "./components/GroupPage/EditGroupForm.vue";

export default {
  setup() {
    const route = useRoute();
    return {
      route,
      appState: computed(() => AppState),
    };
  },
  components: {
    Navbar,
    EditBanner,
    EditName,
    EditPic,
    Filters,
    Footer,
    GoogleMapModal,
    FAQModal,
    GameNightForm,
    GroupForm,
    EditGroupForm
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
