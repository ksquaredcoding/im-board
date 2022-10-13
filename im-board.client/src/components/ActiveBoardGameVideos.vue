<template>
  <div class="ActiveBoardGameVideo">
    <iframe width="400" height="400" :src="video.url"></iframe>

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