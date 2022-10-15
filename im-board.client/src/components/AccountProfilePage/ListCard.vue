<template>
<div class="hi">
  <div class="card elevation-4 my-2">
    <img :src="boardGameList.imgUrl" class="forcedImg rounded img-fluid" />
    <div class="card-body p-1 bg-dark rounded-bottom">
      <p class="card-title d-flex justify-content-center">
      <h4>{{boardGameList?.boardGameName}}</h4>
      </p>
      <div class="card-text d-flex justify-content-center">
        Categories:
      </div>
      <div class="card-text d-flex justify-content-center">
        Players: {{boardGameList.players}}
      </div>
      <div class="card-text d-flex justify-content-center">
        Rating:{{boardGameList.rating.toFixed(2)}}
      </div>
      <p class="d-flex justify-content-center">

      </p>
    </div>
  </div></div>
</template>


<script>
import { BGList } from "../../models/BoardGame/BGList.js"
import { listsService } from "../../services/ListsService.js"
import Pop from "../../utils/Pop.js"

export default {
  props: {
    boardGameList: {
      type: BGList,
      required: true
    }
  },
  setup(props) {
    return {

      async removeGameFromList() {
        try {
          await listsService.removeGameFromList()
        } catch (error) {
          console.error('[RemoveGame]', error)
          Pop.error(error)
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 170px;
  width: auto;
  object-fit: contain;
}

.card {
  border: none;

}

.hi{
  margin-bottom: 25px;
}
</style>