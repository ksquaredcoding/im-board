<template>
  <header class="bg-dark">
    <Navbar class="animate__animated animate__fadeInDown" />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="p-2 bg-dark mt-1">
    <Footer />
  </footer>
  <GroupForm />
  <EditBanner />
  <EditName />
  <EditPic />
  <GoogleMapModal />
  <FAQModal />
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import Navbar from './components/Navbar.vue';
import GroupForm from './components/GroupPage/GroupForm.vue';
import EditBanner from './components/AccountProfilePage/EditAccountModal.vue';
import EditName from './components/AccountProfilePage/EditName.vue';
import EditPic from './components/AccountProfilePage/EditPic.vue';
import Filters from './components/SearchPage/FiltersSideBar.vue';
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import GoogleMapModal from './components/GoogleMapModal.vue';
import FAQModal from './components/FAQModal.vue';

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
    GroupForm,
    EditBanner,
    EditName,
    EditPic,
    Filters,
    Footer,
    GoogleMapModal,
    FAQModal,
  },
};
</script>
<style lang="scss">
@import './assets/scss/main.scss';
*::-webkit-scrollbar {
  width: 13px;
  width: 13px;
}
*::-webkit-scrollbar-track {
  background-color: #ffff;
  cursor: pointer;
}

*::-webkit-scrollbar-track:hover {
  cursor: pointer;
}

*::-webkit-scrollbar-thumb {
  width: 100px;
  border-radius: 10px;
  background: linear-gradient(to bottom right, #a8dba8, #0b486b);
}

*::-webkit-scrollbar-thumb:active {
  width: 100px;
  border-radius: 10px;
  transition: all 0.5s ease;
  background: linear-gradient(to bottom right, #ff5e00, #ffbb00);
}
</style>
