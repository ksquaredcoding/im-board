<template>
  <div class="chatContainer container animate__animated animate__fadeInRigh ">
    <div class="row">
      <div class="col-12">
        <div class="d-flex gap-1 justify-content-end " v-if="chat?.creatorId == account?.id">

          <span class="mt-2 time">{{chat.createdAt}}</span>
          <div class="bg-primary rounded-3 p-2" :class="!account ? 'bg-success' : 'bg-c1 '">
            <span class="">{{ chat.body }}</span>
          </div>
        </div>

        <div class="d-flex gap-1 justify-content-start animate__animated animate__fadeInLeft " v-else>
          <div class="bg-primary rounded p-2 my-2">
            <img :src="chat.creator.picture" :alt="chat.creator.name" :title="chat.creator.name"
              class="rounded-circle me-2 profilePic " height="20" width="20" />
            <span class="">{{ chat.body }}</span>
          </div>
          <span class="mt-2 time">{{chat.createdAt}}</span>
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

<style lang="scss" scoped>
.time {
  opacity: 60%;
  font-size: 12px;
}
.profilePic:hover {
  transform: scale(1.04);
  transition: all 0.75s ease;
  filter: saturate(120%);
  filter: brightness(120%);
}

</style>
