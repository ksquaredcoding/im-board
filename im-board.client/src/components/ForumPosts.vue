<template>
  <div class="card elevation-4 my-2" v-if="forumPost">

    <img :src="forumPost.images.small" alt="" class="forcedImg rounded" />

    <div class="card-body p-1 bg-dark rounded-bottom">
      <p class="card-title d-flex justify-content-center">
        <a class="text-light" :href="forumPost.postUrl" target="_blank">

          <h4>{{ forumPost.title}}</h4>

        </a>

      </p>


    </div>
  </div>



</template>

<script>


import { ForumPost } from "../models/ForumPost.js";

export default {
  props: {
    forumPost: { type: ForumPost, required: true }
  },
  setup(props) {

    return {

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
  height: 170px;
  width: auto;
  object-fit: contain;
}

.card {
  border: none;
}
</style>
