<template>
      <Transition name="custom-class"
   enterActiveClass="animate__zoomIn animate__animated"
            leaveActiveClass="animate__bounceOutRight animate__animated">
            <div class="p-2">
  <div class="groupChatCard card bg-c3 elevation-5 " >
    <div class="d-flex p-1 align-items-end ps-2">
      <img src="//thiscatdoesnotexist.com" alt="" height="45" width="45" class="rounded-circle box-shadow profile-img mt-2">
      <p class="ms-2"><b>Member Name</b></p>
    </div>
    <div class="p-1">
    <div class="bg-dark m-1 rounded px-2 py-1 ">
Wow, this group feature rocks! When are we playing next?
    </div></div>
  </div></div>
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
border: none;
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