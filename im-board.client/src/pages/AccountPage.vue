<template>
  <div class="account Page container">

    <div class="row">
      <div class="col-md-12">
        <div>
          <button class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#groupForm">
            Create Group
          </button>
          <GroupForm />
        </div>
      </div>
      <div class="col-md-6" v-for="g in groups" :key="g.id">
        <GroupCard :group="g" />

      </div>
    </div>



    
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService.js"
import { groupsService } from "../services/GroupsService.js"
import Pop from "../utils/Pop.js"
import GroupCard from "../components/GroupPage/GroupCard.vue"
import GroupForm from "../components/GroupPage/GroupForm.vue"
export default {
  setup() {
    async function getMyGroups() {
      try {
        await accountService.getMyGroups();
      }
      catch (error) {
        Pop.error(error, "[getMyGroups]");
      }
    }
    async function getMyLists() {
      try {
        await accountService.getMyLists()
      } catch (error) {
        console.error('[get my lists]', error)
        Pop.error(error)
      }
    }
    onMounted(() => {
      getMyGroups(),
        getMyLists()
    })
    return {
      account: computed(() => AppState.account),
      groups: computed(() => AppState.groups)
    };
  },
  components: { GroupCard, GroupForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
