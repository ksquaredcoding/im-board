<template>
  <div class="col-md-12 banner elevation-3 ">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center bannerBg my-2 rounded text-light elevation-3">
        <span class="name">Group Name</span>
        <div>
          <span><small class="text-shadow">Members</small></span>
          <div class=" d-flex justify-content-center align-items-center bg-c2 p-2 rounded-5 mb-2  elevation- groupMemberBar">
         
            <img
              src="//thiscatdoesnotexist.com"
              alt="groupMember.name"
              title="groupMember.name"
              height="45"
              width="45"
              class="rounded-circle box-shadow mx-1 profile-img"
              v-for="i in 6"
            />
       
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
.groupMemberBar{
  // box-shadow: inset 0 2px 5px 0 #082f46e8;;
transition: 1s ease;
margin-inline: 7rem;
}
.groupMemberBar:hover{
  transition: 1s ease;
  filter: brightness(120%);
}
.bannerBg{
background-color: rgba(0, 0, 0, 0.517);
}
.banner {
  background-size: cover;
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F448%2F448821.jpg&f=1&nofb=1&ipt=c82f7488813551ce7475226bda34e557ed75955562a742824dae6d417ad79a5e&ipo=images);
}
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px #2c2c2f, 0px 0px 5px #79bd9a;;
  font-weight: bold;
  letter-spacing: 0.09rem;
  /* Second Color  in text-shadow is the blur */
}

.name{
  font-size: 55px;
}
</style>