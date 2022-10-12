<template>
  <div class="ActiveBoardGameImage">


    <img :src="images.original" alt="" class="forced-image">

  </div>
</template>


<script>
import { ActiveBoardGameImages } from "../models/ActiveBoardGameImage.js";

export default {
  props: {
    images: {
      type: ActiveBoardGameImages,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.forced-image {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>