<template>
  <div class="account Page">
 
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService.js"
import { groupsService } from "../services/GroupsService.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {

    async function getMyGroups(){
try {
    await accountService.getMyGroups()
  } catch (error) {
    Pop.error(error,'[getMyGroups]')
  }
    }
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
