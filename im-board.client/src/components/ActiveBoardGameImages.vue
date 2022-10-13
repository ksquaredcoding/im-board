<template>

  <img :src="images.original" alt="" data-bs-toggle="modal" data-bs-target="#activeImage" @click="setActiveImage()"
    class="forcedImg rounded elevation-2">

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import { ActiveBoardGameImage } from "../models/ActiveBoardGameImage.js";
import { AppState } from "../AppState.js";

export default {
  props: {
    images: {
      type: ActiveBoardGameImage,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    return {
      setActiveImage() {
        AppState.activeImage = props.images.original
        console.log(AppState.activeImage);
      },



      modules: [Pagination, Navigation],
    };
  },
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
  height: 250px;
  width: auto;
  object-fit: cover;
}

.card {
  border: none;
}
</style>