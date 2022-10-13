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
  <div class="col-md-6">
     
      <GameNightCard />
  </div>
  <div class="col-md-2">
  </div>
</div>
  </div>
</template>
<script>
import GroupChatCard from "../components/GroupChatCard.vue";
import GroupBanner from "../components/GroupBanner.vue";
import GameNightCard from "../components/GameNightCard.vue";
import GroupChatInput from "../components/GroupChatInput.vue";

export default {
    setup() {
        return {};
    },
    components: { GroupChatCard, GroupBanner, GameNightCard, GroupChatInput }
}
</script>
<style lang="scss" scoped>
.groupchatbox{
height: 80vh;
}
</style>