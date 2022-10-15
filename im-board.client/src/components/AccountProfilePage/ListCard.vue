<template>

  <div class="card elevation-4 my-2">
    <img src="https://d2k4q26owzy373.cloudfront.net/700x700/games/empty+box.jpg alt=" class="forcedImg rounded" />
    <div class="card-body p-1 bg-dark rounded-bottom">
      <p class="card-title d-flex justify-content-center">
      <h4>{{boardGameList?.boardGameName}}</h4>
      </p>
      <div class="card-text d-flex justify-content-center">
        Categories:
      </div>
      <div class="card-text d-flex justify-content-center">
        Players:
      </div>
      <div class="card-text d-flex justify-content-center">
        Rating:
      </div>
      <p class="d-flex justify-content-center">

      </p>
    </div>
  </div>
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

</style>