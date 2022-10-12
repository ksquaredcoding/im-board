<template>
  <div class="col-md boardgamecard  py-4 px-4 ">
  <div class="box-shadow">
    <div class="text-start ">
      <img class="card-img-top forcedImage rounded-top" src="https://thiscatdoesnotexist.com/" alt="Title">
      <div class="card-body p-1 bg-dark">
        <p class="card-title d-flex justify-content-center">Name: Cool Name</p>
        <p class="card-text d-flex justify-content-center">Rating: 5/5</p>
        <p class="d-flex justify-content-center"><button class="btn bg-c1 text-dark"><b>+ List</b></button></p>
      </div>
    </div>
  </div>
  </div>

  <!-- <div class="col-3 pt-2 cardimg">
    <img class="img-fluid rounded-top" src="https://thiscatdoesnotexist.com/" alt="Title">
    <div class="bg-dark">
    <p class="card-title d-flex justify-content-center">Name: Cool Name</p>
        <p class="card-text d-flex justify-content-center">Rating: 5/5</p>
        <p class="d-flex justify-content-center"><button class="">+ List</button></p>
      </div></div> -->
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
.forcedImage{
  height: 200px;

  object-fit: cover;
}
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

.card{
  border: none;
}




</style>
