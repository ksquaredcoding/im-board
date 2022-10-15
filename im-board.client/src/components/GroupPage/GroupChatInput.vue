<template>
  <div class="bg-dark rounded">
    <form @submit.prevent="handleSubmit">
      <div class="bg-grey p-2"></div>
      <div class="row">
        <div class="d-flex justify-content-between">
          <div class="p-2 mt-2 ms-1">Add post. . .</div>
          <button
            class="btn bg-c6 mx-2 my-2 rounded-pill"
            type="submit"
            aria-label="Submit Post"
            title="Submit"
          >
            Post
          </button>
        </div>
      </div>
      <div class="text-start d-flex justify-content-center">
        <div class="">
          <div class="form-group text-center m-1">
            <textarea
              class="p-2 rounded w-100"
              rows="2"
              v-model="editable.body"
              cols="150"
              placeholder=""
              name="postcontent"
            ></textarea>
          </div>
        </div>
        <div></div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const editable = ref({})
    return {
      editable
      async handleSubmit() {
        try {
        } catch (error) {}
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
