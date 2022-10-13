<template>
  <div class="GameNightCard card">
    <div  class="row">
<div class="col-md-8 bg-dark rounded">
<div class="d-flex">
  <button class="btn btn-secondary"> I'm Attending!</button>
  <h2>Game Night Name</h2>
</div>
</div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {

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
