<template>
  <div class="group-page container-fluid">
<div class="row">
 <GroupBanner  class=" mt-2 rounded "/>
  <div class="col-md-3 p-0">
    <div class="">

    </div>
    <div class="bg-dark rounded px-2 py-2 my-2 text-center m-3"> <h4>Group Chat</h4></div>

    <div class="col-12 p-2 overflow-auto groupchatbox">
        <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
</div>
  
 <div>
  
 </div>
<div>
</div>
<GroupChatInput/>
  </div>
  <div class="col-md-6 overflow-auto gamecardbox">
    <div class="px-1">
     <GameNightCard />
      <GameNightCard />
      <GameNightCard />
      <GameNightCard />
  </div></div>
  
  <div class="col-md-3 overflow-auto gamecardbox bg-dark pt-2">
    <div class="bg-c1 rounded text-center pt-2 pb-1 mx-5"> 
      <button class="btn btn-outline-secondary bg-c1" type="button" id="button-addon2"><i class="mdi mdi-magnify mx-2" alt="" title=""></i></button>
      <h4>Group Games</h4></div>
    <GroupGamesCard/>
  </div>
</div>
  </div>
</template>
<script>
import GroupChatCard from "../components/GroupChatCard.vue";
import GroupBanner from "../components/GroupBanner.vue";
import GameNightCard from "../components/GameNightCard.vue";
import GroupChatInput from "../components/GroupChatInput.vue";
import GroupGamesCard from "../components/GroupGamesCard.vue";

export default {
    setup() {
        return {};
    },
    components: { GroupChatCard, GroupBanner, GameNightCard, GroupChatInput, GroupGamesCard }
}
</script>
<style lang="scss" scoped>
.groupchatbox{
height: 80vh;
}

.gamecardbox{
  height: 113vh;
}
</style>