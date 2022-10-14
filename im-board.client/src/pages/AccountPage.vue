<template>
  <!-- TEST PUTTING COMMENT TUNG -->
  <div class="account Page container-fluid">

    <div class="row">
      <div class="col-md-12">
        <div>
          <button class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#groupForm">
            Create Group
          </button>
          <GroupForm />
        </div>
      </div>

    </div>

    <div class="row bg-c5 banner eum-ipsum">
      <div class="">
        <button class="btn" data-bs-toggle="modal" data-bs-target="#editBanner"><i
            class="mdi mdi-circle-edit-outline fs-3 bg-c6 rounded-circle ps-2 pe-2 py-1" alt=""
            title="Edit Profile Banner"></i></button>
        <!-- <EditBanner /> -->
      </div>
      <div class="col-md-12 d-flex justify-content-center ">

        <img src="//thiscatdoesnotexist.com" alt="" height="150" width="150"
          class="eum rounded-circle mt-2 icon position-relative">
        <button class="btn editprofilepic position-absolute"><i
            class="mdi mdi-circle-edit-outline fs-3 py-1 bg-c6 rounded-circle ps-2 pe-2" alt=""
            title="Edit Profile Picture"></i></button>
      </div>
    </div>

    <div class="row justify-content-center align-items-center p-4">
      <!-- <div class="d-flex justify-content-center editprofilebutton"><button class="btn bg-c6 rounded-circle"></button></div> -->
    </div>
    <div class="row justify-content-center align-items-center g-2 mt-3 mb-2">
      <div class="col-md"></div>
      <div class="col-md d-flex justify-content-center username">User Name</div>
      <div class="col-md d-flex justify-content-end">

        <router-link :to="{name: 'Profile'}">
          <button class="btn bg-c6 rounded-circle"><i class="ps-1 mdi mdi-account-check-outline fs-1" alt=""
              title="Save Changes"></i></button>
        </router-link>


      </div>
    </div>
    <div class="row bg-dark flex-wrap justify-content-between pt-4 pb-3">

      <div class="col-md bg-grey ms-2">
        <div class="row bg-c4">
          <div class="col d-flex justify-content-center pt-2">
            <h1>Favorites</h1>
          </div>
        </div>
        <div class="cardholder">
          <span v-for="b in favList" :key="b.id">
            <ListCard :boardGameList="b" />
          </span>
        </div>
      </div>

      <div class="col-md bg-grey mx-3">
        <div class="row bg-c4">
          <div class="col-md d-flex justify-content-center pt-2">
            <h1>Wishlist</h1>
          </div>
        </div>
        <div class="cardholder">
          <span v-for="b in wishList" :key="b.id">
            <ListCard :boardGameList="b" />
          </span>
        </div>
      </div>

      <div class="col-md bg-grey">
        <div class="row bg-c4">
          <div class="col-md d-flex justify-content-center pt-2">
            <h1>Games I own</h1>
          </div>
        </div>
        <div class="cardholder">
          <span v-for="b in ownedList" :key="b.id">
            <ListCard :boardGameList="b" />
          </span>
        </div>
      </div>

      <!-- NOTE group card start -->
      <div class="col-md mx-3 bg-grey">
        <div class="row bg-c3">
          <div class="col-md d-flex justify-content-center pt-2">
            <h2>Groups</h2>
            <div><i class="mdi mdi-information-outline fs-5" alt=""
                title="Groups only visisble to you, not other users."></i></div>
          </div>
        </div>
        <div class="cardholder">
          <!-- <div class="" v-for="g in groups" :key="g.id">
            <GroupCard :group="g" />

          </div> -->
          <div v-for="g in groups" :key="g.id">
<GroupCard :group="g"  />

          </div>
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
import EditBanner from "../components/AccountProfilePage/EditBanner.vue"
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
      groups: computed(() => AppState.groups),
      bgLists: computed(() => AppState.bgLists),
      wishList: computed(() => AppState.bgLists.filter(w => w.listName == "wish")),
      favList: computed(() => AppState.bgLists.filter(f => f.listName == "favorite")),
      ownedList: computed(() => AppState.bgLists.filter(o => o.listName == "owned"))
    };
  },
  components: { GroupCard, GroupForm, ListCard, GroupGamesCard, EditBanner }
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

/* .eum-ipsum {
  position: relative;
} */

.eum {
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

.editprofilepic {
  transform: translateY(4rem) translateX(50px);
}
</style>
