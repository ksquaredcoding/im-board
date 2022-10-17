<template>
  <div class="ActiveBoardGameVideo">
    <iframe :src="video.url"
    class="rounded"
      title="Claire Saffitz Makes CHOCOLATE CHIP COOKIES | Dessert Person" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>


<script>
import { ActiveBoardGameVideo } from "../../models/BoardGame/ActiveBoardGameVideo.js";

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