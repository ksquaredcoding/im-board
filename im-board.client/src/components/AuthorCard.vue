<template>
 <div class="col-md-3">
<div class="card text-bg-dark border-0 ">
  <img src="../assets/img/Tung Le.4.jpg" class="card-img " alt="Tung Le photo">
  <div class="card-img-overlay">
 <div class="d-flex flex-column align-items-end rounded">
  <a href="https://github.com/TungLe0319">

    <i class="mdi mdi-github fs-2"></i>
  </a>
  <a href="www.linkedin.com/in/tung-le0319
">
<i class="mdi mdi-linkedin fs-2"></i>
</a>
<a href="mailto:tung.le0319@gmail.com">

  <i class="mdi mdi-email fs-2"></i>
</a>
      </div>

  </div>
</div>
 </div>

</template>

<script>
export default {
  props: {},

  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-img{
   height: 300px;

  object-fit: cover;
  object-position: top;
}
.tri-card-img{
   height: 300px;
  width: 300px;
  object-fit: contain;
}

.nameText {
  font-weight: 700;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.06em;
}

.forcedImg {
 
}

.profileImg {
  height: 150px;
  border-radius: 50%;
  border: 8px solid rgb(255, 255, 255);
  position: absolute;
  top: -175px;
  left: 25px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
</style>
