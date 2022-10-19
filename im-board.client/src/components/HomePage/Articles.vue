<template>
  <div class="col-md-3 mb-3" v-for="a in articles">
    <a :href="a.url" target="_blank">
      <div class="bg-transparent card my-2">
        <img :src="a.coverImg" alt="" class="forcedImg rounded" />

        <div class="card-body p-1 bg-dark rounded">
          <h6 class="text-light">{{ a.name }}</h6>

          <small>{{ a.credit }}</small>
        </div>
      </div>
    </a>
  </div>
</template>
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { AppState } from '../../AppState.js';

export default {
  setup() {
    const route = useRoute();
    return {
      route,

      articles: computed(() => AppState.articles.sort(()=> Math.random() - 0.5))

    };
  },
};
</script>

<style lang="scss" scoped>
.addToList {
  opacity: 0;
  transition: all 0.5s ease;
}

.addToList:hover {
  opacity: 100%;
  transition: all 0.5s ease;
}

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
  object-fit: cover;
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
