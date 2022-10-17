<template>
  <div class="pb-2 pt-1">
    <div class="GameNightCard bg-dark card my-2 ">
      <div class="row justify-content-center">
        <div class="col-md-8 bg-dark rounded bg-c4 m-2">
          <div class="d-flex justify-content-center mt-2 ">
            <h2>Upcoming Gamenight</h2>
          </div>
          <div class="d-flex justify-content-center mb-2">
            <button class="btn bg-c6 "> I'm Attending!</button>
          </div>
          <div class="justify-content-center d-flex">
            <span>
              <p>{{new Date(gamenight?.startDate).toLocaleDateString('en-us',{month: 'short', day: '2-digit',
              year: 'numeric'})}}</p>
            </span>
            <span class="mx-4">
              <p>{{new Date(gamenight?.startDate).toLocaleTimeString('en-us', {hour: '2-digit', minute: '2-digit'})}}
              </p>
            </span>
            <span>
              <p>{{gamenight?.location}}</p>
            </span>
          </div>
        </div>
        <div class="col-md-6 p-0 ps-3">
          <div class="card m-2 noborder">
            <div class="bg-c4 text-center p-1 ">
              <h5 class="mt-1">Attending:</h5>
            </div>
            <div class="p-2 bg-c2 text-center">
              <img :src="gamenight?.groupMemberIds.creator.picture" :alt="gamenight?.groupMemberIds.creator.name"
                height="55" class="rounded-circle me-1 box-shadow" v-for="g in gamenight?.groupMemberIds"
                :groupMemberId="g">
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0 pe-3">
          <div class="card m-2 noborder">
            <div class="bg-c4 text-center p-1">

              <h5 class="mt-1">Playing:</h5>
            </div>
            <div class="gameImg">
              <div class="d-flex justify-content-center">
                <div class="bg-c3 rounded-5 fs-5 text-center px-3 py-1 my-1"> <b>Game Name</b></div>
              </div>
              <div class="bg-c3 rounded mx-5 p-2 mt-2 text-center">
                <div><b>Genre:</b> Strategy</div>
                <div><b>Players:</b> 3-7</div>
                <div><b>Rating:</b> 4/5</div>
              </div>
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
    gamenight: { type: Object, required: true }
  },

  setup(props) {

    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.bgc3 {
  background-color: rgba(0, 255, 157, 0.364);
}

.gameImg {
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F448%2F448821.jpg&f=1&nofb=1&ipt=c82f7488813551ce7475226bda34e557ed75955562a742824dae6d417ad79a5e&ipo=images);
  background-position: center;
  background-size: cover;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.noborder {
  border: none;
}
</style>
