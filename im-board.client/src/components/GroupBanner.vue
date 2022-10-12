<template>
  <div class="col-md-12 banner ">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center bannerBg my-2 rounded text-light">
        <span> <h1>GROUP NAME</h1></span>
      
        <div>
          <span><small class="text-shadow">Members</small></span>
          <div class=" d-flex justify-content-center align-items-center bg-c2 p-2 rounded-5">
            <i class="mdi mdi-arrow-left-bold fs-1"></i>
            <img
              src="//thiscatdoesnotexist.com"
              alt="groupMember.name"
              title="groupMember.name"
              height="45"
              width="45"
              class="rounded-circle box-shadow mx-1 profile-img"
              v-for="i in 6"
            />
            <i class="mdi mdi-arrow-right-bold fs-1"></i>

          </div>
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
.bannerBg{
background-color: rgba(0, 0, 0, 0.517);
}
.banner {

  background-size: cover;

  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F448%2F448821.jpg&f=1&nofb=1&ipt=c82f7488813551ce7475226bda34e557ed75955562a742824dae6d417ad79a5e&ipo=images);
}
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>
