<template>
  <div class="component justify-content-center bg-light price-info my-2 text-center p-3 elevation-1"
    v-if="price.in_stock == true">
    <h2>{{price.store_name}}</h2>
    <div class="d-flex text-center justify-content-center gap-3">
       <p><b>Price:</b> {{price.price_text}}</p>
       <div></div>
       <p><b>Updated:</b> {{price.updated_at_ago}}</p>
     
    </div>

    <a class="btn bg-c6 elevation-5" :href="price.url" target="_blank">Buy here!</a>
  </div>
</template>


<script>
import { ActiveBoardGamePrice } from "../../models/BoardGame/ActiveBoardGamePrice.js";

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