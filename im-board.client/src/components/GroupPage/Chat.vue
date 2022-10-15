<template>
  <div class="chatContainer container-fluid">
    <div class="row">
      <div class="col-12">
        <div
          class="d-flex gap-1 justify-content-end"
          v-if="chat?.creatorId == account?.id"
        >
          <div class="bg-primary rounded p-2">
            <span class="">{{ chat.body }}</span>
            <img :src="account.picture" alt="" class="rounded" height="25" />
          </div>
        </div>
        <div class="d-flex gap-1 justify-content-start" v-else>
          <div class="bg-primary rounded p-2">
            <img
              :src="chat.creator.picture"
              alt=""
              class="rounded"
              height="25"
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
import { GroupChat } from "../../models/GroupChat.js";

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
