<template>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted footer-text fs-5">
        © 2022 I'm Game, Inc
      </p>

      <i class="mdi mdi-google-maps text-warning selectable" data-bs-toggle="modal" data-bs-target="#exampleModal"
        title="support your local game stores!"></i>

      <a href="/"
        class="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted footer-text">Home</a>
        </li>
        <li class="nav-item">
          <a href="#/search" @click="scrollToTop" class="nav-link px-2 text-muted footer-text">Search</a>
        </li>

        <li class="nav-item">
          <button type="button" class="btn footer-text text-muted" data-bs-toggle="modal" data-bs-target="#FAQ">
            FAQ
          </button>
        </li>
        <li class="nav-item">
          <a href="#/about" class="nav-link px-2 text-muted footer-text" @click="scrollToTop">About</a>
        </li>
      </ul>
    </footer>
  </div>
  <FAQModal />
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">


        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46217.91764516449!2d-116.3436803430798!3d43.61445619445511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slocal%20game%20stores%20near%20me!5e0!3m2!1sen!2sus!4v1666059193372!5m2!1sen!2sus"
          width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>


      </div>
    </div>
  </div>
</template>



<script>
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import FAQModal from "./FAQModal.vue";

export default {
  props: {},
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    return {
      route,
      router,
      groupPage: computed(() => AppState.activeGroup),
      scrollToTop() {
        document.documentElement.scrollTop = 0;
      },
    };
  },
  components: { FAQModal },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.footer-text {
  background: linear-gradient(to right, #ffbb00, #ff5e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  font-family: "Baloo 2", cursive;
}
</style>
