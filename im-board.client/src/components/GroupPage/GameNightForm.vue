<template>
  <div class="gameNight container">
    <div class="row">
      <div class="col-md-8">
        <form>
          <div>
            <label for="resume">Resume:</label>
            <input
              type="url"
              class="form-control"
              v-model="editable.game"
              name="resume"
            />
          </div>
          <div>
            <label for="bio">Bio:</label>
            <textarea
              type="text"
              class="form-control"
              v-model="editable.bio"
              name="bio"
              rows="4"
              style="resize: none"
            ></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary w-100 mt-2">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped></style>
