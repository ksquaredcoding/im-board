<template>
  <div class="board-game-card"></div>
</template>





//Add Method/Button to Add to List
//Add routerlink to send to detailsPage 
<script>
export default {
  props: {
//boardGame:{type:BoardGame,required:true}
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
