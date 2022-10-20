<template>
  <div class="GameNightCard bg-dark card my-2 elevation-3">
    <div class="row justify-content-center">
      <div class="col-7 col-md-8 rounded bg-c4 m-2 upcomingGameNight">
        <div class="d-flex justify-content-center mt-2 text-center">
          <h2>Upcoming Gamenight</h2>
        </div>
        <div class="d-flex justify-content-center mb-2">
          <button
            class="btn button-51 animate__animated animate__fadeIn"
            @click="attendGamenight(gamenight?.id)"
            v-if="!attending"
          >
            I'm Attending <i class="bi bi-person-plus-fill"></i>
          </button>
          <button
            class="btn button-52 animate__animated animate__fadeIn"
            @click="attendGamenight(gamenight?.id)"
            v-else
          >
            UnAttend <i class="bi bi-person-dash-fill"></i>
          </button>
        </div>
        <div class="justify-content-center d-flex">
          <span>
            <p>
              {{
                new Date(gamenight?.startDate).toLocaleDateString("en-us", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })
              }}
            </p>
          </span>
          <span class="mx-4">
            <p>
              {{
                new Date(gamenight?.startDate).toLocaleTimeString("en-us", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
            </p>
          </span>
          <span>
            <p>{{ gamenight?.location }}</p>
          </span>
        </div>
      </div>
      <div class="col-5 col-md-6 p-0 ps-md-3">
        <div class="card m-2 noborder">
          <div class="bg-c4 text-center rounded-top">
            <h5 class="mt-1">Attending:</h5>
          </div>
          <div
            class="p-2 bg-c2 text-center rounded-bottom"
            v-if="gamenight?.groupMemberIds"
          >
            <TransitionGroup
              name="custom-classes"
              enterActiveClass="animate__zoomIn animate__animated"
              leaveActiveClass="animate__zoomOut animate__animated"
            >
              <router-link
                :to="{ name: 'Profile', params: { id: g?.id } }"
                v-for="g in gamenight?.groupMemberIds"
                :key="g.id"
              >
                <img
                  :src="g?.picture"
                  :alt="g?.name"
                  :title="g?.name"
                  height="45"
                  width="45"
                  class="rounded-circle box-shadow m-1 profile-img"
                />
              </router-link>
            </TransitionGroup>

            <!-- <img :src="g.picture" :alt="g.name" height="55" class="rounded-circle me-1 box-shadow"
                v-for="g in gamenight?.groupMemberIds" :groupMemberId="g" /> -->
          </div>
        </div>
      </div>
      <div class="col-5 col-md-6 p-0 pe-md-3">
        <div class="card m-2 noborder elevation-4">
          <div class="bg-c4 text-center p-1 rounded-top">
            <h5 class="mt-1">Playing:</h5>
          </div>
          <div class="gameImg p-2 rounded-bottom">
            <div class="d-flex justify-content-center">
              <div class="bg-c3 rounded-5 fs-5 text-center px-3 py-1 my-1">
                <b class="namefont">{{ gamenight?.game }}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { next } from "dom7";
import { AppState } from "../../AppState.js";
import { gameNightsService } from "../../services/GameNightsService.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {
    gamenight: { type: Object, required: true },
  },

  setup(props) {
    return {
      attending: computed(() =>
        props.gamenight.groupMemberIds.find((g) => g.id == AppState.account.id)
      ),
      memberGoing: computed(() => {
        [
          seeTheSame(groupMembers, props.gamenight.groupMemberIds),
          seeTheSame(props.gamenight.groupMemberIds, groupMembers),
        ];
      }),
      seeTheSame(array1, array2) {
        return array1.filter((object1) => {
          return array2.some((object2) => {
            return object1.id === object2.id;
          });
        });
      },

      async addGameNight() {
        try {
          await gameNightsService.addGameNight(props.gamenight.id);
        } catch (error) {
          Pop.error(error);
        }
      },
      async attendGamenight(gamenightId) {
        try {
          await gameNightsService.attendGamenight(gamenightId);
        } catch (error) {
          console.error(error);
          Pop.error(error.message);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.gameNightBg {
  background-image: url(https://img.freepik.com/free-vector/board-game-astronauts-in-space-boardgame-strategy-kid-cartoon-template_33099-186.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.bgc3 {
  background-color: rgba(0, 255, 157, 0.364);
}

.gameImg {
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F448%2F448821.jpg&f=1&nofb=1&ipt=c82f7488813551ce7475226bda34e557ed75955562a742824dae6d417ad79a5e&ipo=images);
  background-position: center;
  background-size: cover;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.noborder {
  border: none;
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
</style>
