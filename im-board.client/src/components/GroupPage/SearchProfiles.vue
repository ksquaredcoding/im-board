<template>
  <form>
    <div class="d-flex">
      <input
        v-model="editable.term"
        type="text"
        class="form-control phtext"
        placeholder="Search Users By Name . . ."
        aria-label="Search"
        aria-describedby="button-addon2"
        @keyup.prevent="searchProfiles()"
      />
      <button
        class="btn button-50 py-1 px-2 mx-2"
        type="submit"
        id="button-addon2"
      >
        <i class="mdi mdi-magnify mx-2" alt="" title="search By Name"></i>
      </button>
    </div>
    <div class="d-flex justify-content-center">
      <ul class="list-group mt-2 justify-content-center">
        <li @click="inviteToGroup(p.id)" class="list-group-item   " v-for="p in profiles">
          <img :src="p.picture" alt="" height="30" width="30" class="rounded-circle">   {{ p.name.split('@')[0] }}  {{p.id}}
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import { onMounted, ref } from 'vue';
import { atlasGamesService } from '../../services/AtlasGamesService.js';
import { profilesService } from '../../services/ProfilesService.js';
import Pop from '../../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';
export default {
  setup() {
    onMounted(() => {
      // searchProfiles()
    });
    const editable = ref({});

    return {
      editable,
      profiles: computed(() => AppState.profiles.filter(p => p.name.includes(editable.value.term))),
      async searchProfiles() {
        try {
          console.log(editable.value.term);
          await profilesService.getProfiles(editable.value.term);
        
        } catch (error) {
          console.error('dfd', error);
        }
      },


      async inviteToGroup(profile){
AppState.profileIdToInviteBy = profile

console.log(AppState.profileIdToInviteBy);
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.phtext {
  font-size: 12px;
}
</style>
