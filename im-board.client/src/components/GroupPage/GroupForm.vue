<template>
  <div
    class="modal"
    id="groupForm"
    tabindex="-1"
    aria-labelledby="groupFormLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-body FORM">
          <!-- -------------------SECTION FORM----------------------------------- -->
          <form @submit.prevent="handleSubmit" class="">
            <div class="row">
              <div class="col-md-6">
                <div class="">
                  <img
                    :src="editable.coverImg"
                    alt=""
                    class="forcedImg smallerImg mt-2 Img1 bg-light opacity-25"
                  />
                </div>
                <div class="mt-3 inputBox">
                  <input
                    type="url"
                    class="bg-light text-dark opacity-50"
                    v-model="editable.coverImg"
           required 
           aria-required="true"
                  />
                  <span class="font">CoverImg</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mt-3 inputBox">
                  <input
                    type="text"
                    class="bg-light opacity-50 text-dark"
                    v-model="editable.name"
           required 
           aria-required="true"
                  />
                  <span class="font">Group Name</span>
                </div>
              </div>
            </div>

            <div class="my-3">
              <button
                class="btn btn-success selectable font"
                type="submit"
                data-bs-dismiss="modal"
              >
                Create Group
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- 
  <div
 
    class="modal"
    id="groupForm"
    tabindex="-1"
    aria-labelledby="groupFormLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-body FORM">
     
          <form @submit.prevent="handleSubmitForEdit()" class="">
            <div class="row">
              <div class="col-md-6">
                <div>
                  <img
                    :src="editable.coverImg"
                    alt=""
                    class="forcedImg smallerImg mt-2 Img1"
                  />
                </div>
                <div class="mt-3 inputBox">
                  <input type="url" class=" " v-model="editable.coverImg" required aria-required="true" />
                  <span>CoverImg</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mt-3 inputBox">
                  <input type="text" class=" " v-model="editable.name"  aria-required="true" required/>
                  <span>group Name</span>
                </div>
              </div>
            </div>

            <div class="my-3">
              <button class="btn btn-success selectable" type="submit" data-bs-dismiss="modal" >
               Edit Group
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  
  </div> -->
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

import { groupsService } from "../../services/GroupsService.js";
import Pop from "../../utils/Pop.js";
import { AppState } from "../../AppState.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const editable = ref({});
    return {
      route,
      editable,
      group: computed(() => AppState.groups),

      async handleSubmit() {
        try {
          await groupsService.createGroup(editable.value);
          editable.value = {};
        } catch (error) {
          Pop.error(error, "[handleSubmit(createGroup)]");
        }
      },

      async handleSubmitForEdit() {
        try {
          await groupsService.editGroup(editable.value);
          editable.value = {};
        } catch (error) {
          Pop.error(error, "[handleSubmit(createGroup)]");
        }
      },
    };
  },
};
</script>

<style scoped>
.forcedImg {
  border-radius: 4px;
  border: dashed 4px #ff5e00;
}

.checkbox {
  width: 30px;
  height: 30px;
}

.smallerImg {
  height: 200px;
  width: 375px;
  object-fit: cover;
}

.form-Banner {
  background-image: url(https://i.pinimg.com/564x/ca/db/46/cadb46a6ac190342d8152d4240952333.jpg);
  background-position: center;
  background-size: cover;
}

.Img1 {
  transition: all 0.5s ease;
}

.Img1:hover {
  transform: scale(1.01);
  transition: all 0.4s ease;
  filter: brightness(110%);
}

.checkBoxInput input {
  color: #27132a;
  background-color: #27132a;
  padding: 0 10px;
  font-size: 0.65em;

  border: 1px solid #ff5e00;

  letter-spacing: 0.2em;
  transition: all 1s ease;
}

.inputBox {
  position: relative;
  width: 250px;
}

/* ------------------------------------------------------------------------------------ */
.inputBox2 {
  position: relative;
  width: auto;
}

.inputBox2 textarea {
  width: 100%;

  text-align: right;
  padding: 10px;
  border: 1px solid #ffbb00;
  border-bottom: 3px solid #ff5e00;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1em;
  background-color: transparent;
  transition: all 1.5s ease;
  box-shadow: 0.25px 0.25px 10px rgba(243, 236, 236, 0.308);
}

.inputBox2 span {
  position: absolute;
  left: 0;
  bottom: 4.2em;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #f1ecf180;
  transition: all 1s ease;
}

.inputBox2 textarea:valid ~ span,
.inputBox2 textarea:focus ~ span {
  color: #27132a;
  transform: translateX(10px) translateY(-70px);
  padding: 0 10px;
  font-size: 1em;
  border-radius: 4px;
  font-weight: bold;
  background: #ffbb00;
  border-left: 1px solid #ff5e00;
  border-right: 1px solid #ff5e00;
  letter-spacing: 0.2em;
  transition: all 1s ease;
}

/* ---------------------------------------------------------------------------- */
.inputBox input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffbb00;
  border-bottom: 3px solid #ff5e00;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1em;
  background-color: transparent;
  transition: all 1.5s ease;
  box-shadow: 0.25px 0.25px 10px rgba(243, 236, 236, 0.308);
}

.inputBox span {
  position: absolute;
  left: 0;
  bottom: 3em;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #f1ecf180;
  transition: all 1s ease;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #27132a;
  transform: translateX(10px) translateY(-7px);
  padding: 0 10px;
  font-size: 0.65em;
  border-radius: 4px;
  font-weight: bold;
  background: #ffbb00;
  border-left: 1px solid #ff5e00;
  border-right: 1px solid #ff5e00;
  letter-spacing: 0.2em;
  transition: all 1s ease;
}

/* .inputBox:nth-child(2) input:valid ~ span,
.inputBox:nth-child(2) input:focus ~ span {
  background: #92c5f5;
  color: #27132a;
  border-radius: 2px;
} */
.modal-body {
  background-image: url(https://images.unsplash.com/photo-1615775642101-402e4d2c0e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
  background-size: cover;
  background-position: center;
  box-shadow: 1px 1px 10px rgba(243, 236, 236, 0.308);
}

.font {
  font-family: "Baloo 2", cursive;
}
</style>
