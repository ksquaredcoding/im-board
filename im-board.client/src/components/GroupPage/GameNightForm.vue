<template>
  <div class="gameNight container">
    <div class="row">
      <div class="col-md-8">
        <form>
          <div>
            <label for="game">what do you want to play?</label>
            <input
              type="url"
              class="form-control"
              v-model="editable.game"
              placeholder="pick a game or enter game info"
              name="game"
            />
            <div class="d-flex justify-content-end">
              <button class="btn btn-sm my-1 btn-primary">pick a game</button>

            </div>
          </div>
          <div>
            <label for="time">pick a time</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="editable.StartDate"
              name="time"
            />
          </div>
          <div>
            <label for="bio">location:</label>
            <textarea
              type="text"
              class="form-control"
              v-model="editable.location"
              name="bio"
              rows="1"
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
