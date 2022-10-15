<template>
  <router-link :to="{ name: 'Group', params: { id: group?.groupId } }">
    <div class="card text-bg-dark my-2 elevation-3 groupCard"
      :style="{backgroundImage: `url(${group.group.coverImg})`}">
      <!-- <img :src="group?.group.coverImg" class="card-img" alt="..." /> -->
      <div class="card-img-overlay text-shadow">
        <h3 class="card-title">{{ group?.group.name }}</h3>
        <h1 class="text-c6"></h1>
        <p class="card-text"></p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { AppState } from '../../AppState.js';
import { GroupMemberShip } from '../../models/GroupMembership.js';
import { Group } from '../../models/Group.js';
export default {
  props: {
    group: { type: GroupMemberShip, required: true },
  },

  setup(props) {
    return {
      setActiveGroup() {
        let group = AppState.groups.find(
          (g) => g.groupId == props.group.groupId
        );
        AppState.activeGroup = group;
        console.log('activeGroup-tung', AppState.activeGroup);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px #79bd9a;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.groupCard {
  transition: all 0.55s ease;
  max-height: 30vh;
  min-height: 30vh;
  border: none;
  background-size: cover;
  background-position: center;
}

.groupCard:hover {
  // box-shadow: 0px 10px 20px #4c4747 inset !important;
  transform: scale(95%);
  transition: all 0.55s ease;
  filter: saturate(120%);
  filter: brightness(120%);
}

.card-img {
  // height: 30vh;
  overflow: hidden;
  max-width: auto;
  max-height: 16rem;
}
</style>
