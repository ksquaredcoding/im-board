<template>
  <div class="ActiveBoardGameVideo">
    <iframe width="1424" height="612" :src="video.url"
      title="Claire Saffitz Makes CHOCOLATE CHIP COOKIES | Dessert Person" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>


<script>
import { ActiveBoardGameVideo } from "../models/ActiveBoardGameVideo.js";

export default {
  props:
  {
    video: { type: ActiveBoardGameVideo, required: true }
  },

  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>