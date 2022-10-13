<template>
  <div class="component col-md-3 " v-if="price.in_stock == true">
    <h2>{{price.store_name}}</h2>
    <p>{{price.updated_at_ago}}</p>
    <a :href="price.url" target="_blank">{{price.url}}</a>

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

</style>