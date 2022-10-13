<template>

  <div class="groupCard card">
<img :src="group.coverImg" alt="">
<div class="card-body">
<h1>  Group Name: {{group.name}} </h1>
</div>
  </div>
</template>

<script>
import { Group } from "../models/Group.js";

export default {
  props: {
group:{type: Group, required:true}
  },

  setup(props) {

    return {

    };
  },
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>
