<template>
  <div class="card box-shadow p-0 mx-1">
    <img src="../assets/img/TungPicture.jpeg" alt="Tung Le " class="card-img" />

    <div class="card-img-overly">
      <div class="d-flex justify-content-around">
        <i class="mdi mdi-github fs-2"></i>
        <i class="mdi mdi-linkedin fs-2"></i>
        <i class="mdi mdi-email fs-2"></i>
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
.nameText {
  font-weight: 700;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 0.06em;
}

.forcedImg {
  height: 300px;
  width: auto;
  object-fit: cover;
  filter: brightness(70%);
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
