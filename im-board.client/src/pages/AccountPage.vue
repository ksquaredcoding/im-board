<template>
  <div class="account Page container-fluid">

    <!-- <div class="row">
      <div class="col-md-12">
        <div>
          <button class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#groupForm">
            Create Group
          </button>
          <GroupForm />
        </div>
      </div>
      <div class="col-md-2" v-for="g in groups" :key="g.id">
        <GroupCard :group="g" />

      </div>
    </div> -->

<div class="row bg-c5 banner eum-ipsum">
      <div class="col-md-12 d-flex justify-content-center ">
        <img src="//thiscatdoesnotexist.com" alt="" height="150" width="150" class="eum rounded-circle mt-2 icon">
      </div>
    </div>

    <div class="row justify-content-center align-items-center p-4">
    </div>
    <div class="row justify-content-center align-items-center g-2 mt-3 mb-2">
      <div class="col-md-12 d-flex justify-content-center username">User Name</div>
    </div>

    <div class="row bg-dark flex-wrap justify-content-between pt-4 pb-3">
<ListCard/>
<ListCard/>
<ListCard/>
      <!-- NOTE group card start -->
      <div class="col mx-3 bg-grey">
        <div class="row bg-c6">
          <div class="col d-flex justify-content-center pt-2">
            <h2>Groups</h2>
          </div>
        </div>
        <div class="cardholder">
         <GroupGamesCard/>
          <GroupGamesCard/>
           <GroupGamesCard/>
            <GroupGamesCard/>
             <GroupGamesCard/>
              <GroupGamesCard/>
               <GroupGamesCard/>
        </div>
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
import ListCard from "../components/AccountProfilePage/ListCard.vue"
import GroupGamesCard from "../components/GroupPage/GroupGamesCard.vue"
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
  components: { GroupCard, GroupForm, ListCard, GroupGamesCard }
}
</script>

<style scoped>

.banner {
  min-height: 188px;
  background-size: cover;
  background-position: center center;
  background-image: url(https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80);
}

.icon {
  border: 3px solid white;
}

.eum-ipsum {
  position: relative;
}

.eum {
  position: absolute;
  bottom: -35%;
}

.username {
  font-size: 3rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 600;
}

.cardholder {
  max-height: 44vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
