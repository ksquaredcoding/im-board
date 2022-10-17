<template>
<div class="container ">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted footer-text fs-5">© 2022 I'm Game, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted footer-text">Home</a></li>
      <li class="nav-item"><a href="#/search" class="nav-link px-2 text-muted footer-text">Search</a></li>

      <li class="nav-item"><button type="button" class="btn footer-text text-muted" data-bs-toggle="modal" data-bs-target="#FAQ">
  FAQ
</button>
</li>
      <li class="nav-item"><a href="#/about" class="nav-link px-2 text-muted footer-text">About</a></li>
    </ul>
  </footer>
</div>
<FAQModal/>
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
            groupPage: computed(() => AppState.activeGroup)
        };
    },
    components: { FAQModal }
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.footer-text {
  background: linear-gradient(to right,
      #ffbb00,
      #ff5e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center; 
  font-size: 30px;
  font-weight: bolder;
  font-family: 'Baloo 2', cursive;
}


</style>
