<template>
  <div class="group-page container-fluid">
<div class="row">
  <GroupBanner />
  <div class="col-md-3">
    <div class="">

    </div>
    <div class="bg-dark rounded px-2 py-2 my-2 text-center"> <h4>Group Chat</h4></div>
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
    <GroupChatCard />
 
<div>
</div>
  </div>
  <div class="col-md-7">
  </div>
  <div class="col-md-2">
  </div>
</div>
  </div>
</template>
<script>
import GroupChatCard from "../components/GroupChatCard.vue";
import GroupBanner from "../components/GroupBanner.vue";

export default {
    setup() {
        return {};
    },
    components: { GroupChatCard, GroupBanner }
}
</script>
<style lang="scss" scoped>
</style>