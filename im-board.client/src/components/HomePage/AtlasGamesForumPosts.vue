<template>
  <a :href="forumPost?.postUrl" target="_blank">
    <div class="card bg-transparent border-0 my-2" v-if="forumPost">
      <img
        :src="forumPost?.images.small"
        alt=""
        class="forcedImg rounded"
        @error="badImg"
      />

      <div class="card-body p-1 rounded-bottom">
        <p class="card-title d-flex justify-content-center">
          <a class="text-dark" :href="forumPost.postUrl" target="_blank">
            <div class="text-wrap p-1">
              <h6>{{ forumPost.title }}</h6>
            </div>
          </a>
        </p>
      </div>
    </div>
    <div v-else>loading...</div>
  </a>
</template>

<script>
import { ForumPost } from '../../models/ForumPost.js';

export default {
  props: {
    forumPost: { type: ForumPost, required: true },
  },
  setup(props) {
    return {
      badImg(event) {
        event.target.src =
          'https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/285341017_491972112936262_428169449585977605_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=luxW5EmZWc8AX_7Q3Ng&_nc_ht=scontent-fml2-1.xx&oh=00_AT_-9bi9Fn51koLGEax6amFRkok4JRe8L2X4z88qiPA4OA&oe=635181DB';
      },
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
  transition: 0.5s ease;
}

.card:hover {
  transform: scale(1.04);
  filter: brightness(110%);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: all 0.5s ease;
}
</style>
