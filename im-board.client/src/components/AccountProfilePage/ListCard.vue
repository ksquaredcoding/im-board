<template>
    <div class="cardholder">
      {{boardGameList?.boardGameName}}
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