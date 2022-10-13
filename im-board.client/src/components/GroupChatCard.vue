<template>
      <Transition name="custom-class"
   enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__bounceOutRight animate__animated">
  <div class="groupChatCard card bg-c2 my-2 elevation-5 " >
    <div class="d-flex p-1 align-items-end ">
      <img src="//thiscatdoesnotexist.com" alt="" height="45" width="45" class="rounded-circle box-shadow profile-img">
      <p class="ms-1">Member Name</p>
    </div>
    <div class="bg-dark m-1 rounded ps-2 py-1">
Wow, this group feature rocks!When are we playing next?
    </div>
  </div>
      </Transition>
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
.groupChatCard{
  transition:  0.5s ease;

}

.groupChatCard:hover{
  background-color: #3b8686 !important;
  transition:  0.75s ease;
  transform: scale(1.04);
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