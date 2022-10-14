<template>
  <div class="component justify-content-center price-info  my-2 text-center p-3 elevation-1 "
    v-if="price.in_stock == true">
    <h2>{{price.store_name}}</h2>
    <h5>{{price.name}}</h5>
    <div class="d-flex text-center justify-content-center gap-3">
      <p>{{price.updated_at_ago}}</p>
      <b>{{price.price_text}}</b>
    </div>

    <a :href="price.url" target="_blank">Buy here!</a>
  </div>
</template>


<script>
import { ActiveBoardGamePrice } from "../models/ActiveBoardGamePrice.js";

export default {
  props: {
    price: {
      type: ActiveBoardGamePrice, required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.price-info {
  background-color: rgb(225, 241, 217);
}
</style>