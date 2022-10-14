<template>
  <div class="container-fluid">

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
          <GroupGamesCard />
          <GroupGamesCard />
          <GroupGamesCard />
          <GroupGamesCard />
          <GroupGamesCard />
          <GroupGamesCard />
          <GroupGamesCard />
        </div>
      </div>
    </div>


  </div>
</template>


<script>

import GroupGamesCard from "../components/GroupPage/GroupGamesCard.vue";
import ListCard from "../components/AccountProfilePage/ListCard.vue";

export default {
  setup() {

    return {};
  },
  components: { GroupGamesCard, ListCard }
}
</script>


<style lang="scss" scoped>
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