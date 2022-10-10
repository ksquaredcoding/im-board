<template>

 <div class="card profileCard  elevation-3 mx-4 my-2 " >
          
              <img src="https://grottonetwork.com/wp-content/uploads/2017/11/iStock-611620630.jpg" alt=""
                class="forcedImg  elevation-2">
           
            <div class="card-body position-relative">
              <span> <img src="../assets/img/TungPicture.jpeg" alt="" class="profileImg"></span>
              <div class="border-bottom border-dark border-3">
                <h5>Title</h5>
              </div>
              <div class="d-flex justify-content-end text-shadow mt-2">
                <h6>PlaceHolder Text</h6>
              </div>
              <div>
                <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                  quaerat qui architecto!</small>
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

.profileCard{
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;

}
.forcedImg{
  height: 300px;
  width: auto;
  object-fit: cover;
    border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

.profileImg{
  height: 275px;
border-radius: 50%;
border: 8px solid rgb(255, 255, 255);
position: absolute;
top: -225px;
left: 60px;

}
</style>
