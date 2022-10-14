<template>
  <div class="modal" id="editBanner" tabindex="-1" aria-labelledby="bannerFormLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content bg-dark">
        <div class="modal-body FORM">
          <!-- -------------------SECTION FORM----------------------------------- -->
          <form @submit.prevent="handleSubmit" class="">
            <div class="row">
              <div class="col-md-8">
                <div>
                  <label for="profilebanner">Profile Banner Url:</label>
                  <input type="url" v-model="editable.coverImg" required name="coverImg">
                </div>
              </div>
            </div>

            <div class="my-3">
              <button class="btn btn-success selectable" type="submit" data-bs-dismiss="modal">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { accountService } from "../../services/AccountService.js";
import Pop from "../../utils/Pop.js";
export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })
    return {
      editable: editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          console.error(error)
          Pop.error(error, '[EditBanner]')
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>

</style>