<template>

 <div class="card profileCard  box-shadow mx-4 my-2 " >
          
              <img src="https://grottonetwork.com/wp-content/uploads/2017/11/iStock-611620630.jpg" alt=""
                class="forcedImg  elevation-2">
           
            <div class="card-body position-relative">
              <span> <img src="../assets/img/TungPicture.jpeg" alt="" class="profileImg"></span>
              <div class="d-flex justify-content-center mt-3 nameText text-shadow2">
                <h4>Tung Le</h4>
               
              </div>
           <div>
             <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio similique vero expedita ipsum rem.</p>
           </div>
           <div class="d-flex justify-content-around">
            <i class="mdi mdi-github fs-1"></i>
            <i class="mdi mdi-linkedin  fs-1"></i>
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


.nameText{
  font-weight: 700;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
letter-spacing: 0.06em;
}

.profileCard{

}
.forcedImg{
  height: 300px;
  width: auto;
  object-fit: cover;

}

.profileImg{
  height: 200px;
border-radius: 50%;
border: 8px solid rgb(255, 255, 255);
position: absolute;
top: -175px;
left: 100px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
</style>
