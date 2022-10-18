<template>
  <!-- TEST PUTTING COMMENT TUNG -->
  <div class="animate__animated animate__fadeOut" v-if="!account">
    <div class="loader"></div>
   
  </div>


  <div class="account Page container-fluid " v-else>
 
    <div class="row bg-c5 banner eum-ipsum" :style="{backgroundImage: `url(${account.coverImg})`}">
      <div class="">
        <button class="btn" data-bs-toggle="modal" data-bs-target="#editBanner"><i
            class="mdi mdi-circle-edit-outline fs-3 rounded-circle editbtn ps-2 pe-2 py-1" alt=""
            title="Edit Account"></i></button>
        <!-- <EditBanner /> -->
      </div>
      <div class="col-md-12 d-flex justify-content-center ">

        <img v-if="account?.picture" :src="account?.picture" alt="" class="eum rounded-circle mt-2 icon position-relative forcedImg">
        <button class="btn editprofilepic position-absolute" data-bs-toggle="modal" data-bs-target="#editProfilePic"><i
            class="mdi mdi-circle-edit-outline fs-3 py-1 rounded-circle editbtn ps-2 pe-2" alt=""
            title="Edit Profile Picture"></i></button>
        <!-- <EditPic /> -->
      </div>
    </div>

    <div class="row justify-content-center align-items-center p-4">
      <!-- <div class="d-flex justify-content-center editprofilebutton"><button class="btn bg-c6 rounded-circle"></button></div> -->
    </div>
    <div class="row justify-content-center align-items-center g-2 mt-3 mb-2">
      <div class="col-md"></div>
      <div class="col-md d-flex justify-content-center ">
        <h1 class="username">
          {{account.name}}
        </h1>

        <button class="btn" data-bs-toggle="modal" data-bs-target="#editName"><i
            class="mdi mdi-circle-edit-outline fs-3 py-1 rounded-circle editbtn ps-2 pe-2" alt=""
            title="Edit Username"></i></button>
        <!-- <EditName /> -->

      </div>
      <div class="col-md d-flex justify-content-end">

        <router-link :to="{name: 'Profile',params:{id: user.id }}">
          <button class="btn rounded-circle editbtn"><i class="ps-1 mdi mdi-account-check-outline fs-1" alt=""
              title="Save Changes"></i></button>
        </router-link>


      </div>
    </div>
    <div class="row bg-dark flex-wrap justify-content-between pt-4 pb-3 ">
      <!-- animate__animated animate__fadeInUp -->
      <div class="col-md bg-grey ms-md-2">
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

      <div class="col-md bg-grey mx-md-3">
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
                title="Groups only visible to you, not other users."></i></div>
          </div>
        </div>
        <div class="cardholder ">

          <div v-for="g in groups" :key="g.id">
            <GroupCard :group="g" />

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
import { Account } from "../models/Account.js"
import EditName from "../components/AccountProfilePage/EditName.vue"
import EditPic from "../components/AccountProfilePage/EditPic.vue"
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
      getMyGroups()
      getMyLists()
    })
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      groups: computed(() => AppState.groupMemberShips),
      bgLists: computed(() => AppState.bgLists),
      wishList: computed(() => AppState.bgLists.filter(w => w.listName == "wish")),
      favList: computed(() => AppState.bgLists.filter(f => f.listName == "favorite")),
      ownedList: computed(() => AppState.bgLists.filter(o => o.listName == "owned"))
    };
  },
  components: { GroupCard, GroupForm, ListCard, GroupGamesCard, EditBanner, EditName, EditPic }
}
</script>

<style scoped>
.forcedImg {
  height: 150px;
  width: 150px;
  object-fit: cover;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.banner {
  min-height: 188px;
  background-size: cover;
  background-position: center center;
  /* background-image: url(https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80); */
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
  font-family: 'Baloo 2', cursive;
  font-weight: 600;
}

.cardholder {
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.editprofilepic {
  transform: translateY(4rem) translateX(50px);
}

.editbtn {
  background: linear-gradient(to bottom right, #ff6f00, #ff9900);
}

.editbtn:hover {
  color: white !important;
  transform: scale(1.09);
  filter: brightness(110%);
  filter: contrast(110%);
  transition: 0.75s ease;
}
</style>
