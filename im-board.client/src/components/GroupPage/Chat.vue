<template>
  
  <div class="chatContainer container animate__animated animate__fadeInRight">
    <div class="row">
      <div class="col-12">
        <div
          class="d-flex gap-1 justify-content-end"
          v-if="chat?.creatorId == account?.id"
        >
          <div class="bg-primary rounded-3  p-2" :class="!account? 'bg-success' :'bg-c1 '">
            <span class="">{{ chat.body }}</span>
          
          </div>
        </div>


        <div class="d-flex gap-1 justify-content-start animate__animated animate__fadeInLeft" v-else>
          <div class="bg-primary rounded p-2 my-2">
            <img
              :src="chat.creator.picture"
              alt=""
              class="rounded-circle me-2"
              height="20"
            />
            <span class="">{{ chat.body }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
import { GroupChat } from "../../models/GroupsAndGameNight/GroupChat.js";

export default {
  props: {
    chat: { type: GroupChat, required: true },
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped></style>
