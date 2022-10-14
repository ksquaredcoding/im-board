<template>
  <div class="col mx-3 bg-grey">
          <div class="row bg-c4">
            <div class="col d-flex justify-content-center pt-2"><h2>{{this.type}}</h2></div>
            </div>
            <div class="cardholder">
            <!-- NOTE boardgamecard component here -->
            </div>
        </div>
</template>


<script>
import { BGList } from "../../models/BoardGame/BGList.js"
import { listsService } from "../../services/ListsService.js"
import Pop from "../../utils/Pop.js"

export default {
  props: {
    boardGameLists: {type: BGList, required: true}
  },
  setup(props){
    return {
    
      async removeGameFromList() {
        try {
            await listsService.removeGameFromList()
          } catch (error) {
            console.error('[RemoveGame]',error)
            Pop.error(error)
          }
      }

    }
  }
}
</script>


<style lang="scss" scoped>

</style>