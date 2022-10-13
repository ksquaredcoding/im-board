<template>
  <div class="GameNightCard card">
    <div  class="row justify-content-center">
<div class="col-md-8 bg-dark rounded ">
<div class="d-flex justify-content-around mt-2">
  <button class="btn btn-secondary "> I'm Attending!</button>
  <h2>Game Night Name</h2>
</div>
<div class="justify-content-center d-flex">
<span> <p>Date: 11/12</p></span>
<span class="mx-4"> <p>Time: 7:00 PM</p></span>
<span> <p>Location: Molly's House</p></span>
</div>
</div>
<div class="col-md-6">
<div class="card m-2">
  <div class="bg-info text-center p-1">
<h5>Attending</h5>
  </div>
  <div class="card-body">
    <img src="//thiscatdoesnotexist.com" alt="" height="45" class="rounded-circle">
  </div>
</div>
</div>
<div class="col-md-6">
  <div class="card m-2">
  <div class="bg-info text-center p-1">
<h5 class="ms-2">Playing</h5>
  </div>
  <div class="card-body gameImg">
<div class="bgc3 rounded-5 text-center"> Game Name</div>
<div class="bgc3 rounded mx-5 p-2 mt-2 text-center"> 
 <p>Genre:Strategy</p>
 <p>Players: 3-7</p>
 <p>Rating: 4/5</p>
</div>
  </div>

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

.bgc3{
  background-color: rgba(0, 255, 157, 0.364);
}
.gameImg{
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F448%2F448821.jpg&f=1&nofb=1&ipt=c82f7488813551ce7475226bda34e557ed75955562a742824dae6d417ad79a5e&ipo=images);
  background-position: center;
  background-size: cover;
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


</style>
