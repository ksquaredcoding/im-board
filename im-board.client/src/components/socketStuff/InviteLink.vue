<template>
  <div class="component">
    <input type="text width" :value="account?.id" />
    <!-- <label for="" class="border">{{ account?.id }}</label> -->
    <button class="btn btn-51">your Link</button>
  </div>
</template>

<script>
export default {
  props: {
    account: { type: Object, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.width{
  min-width: 5rem;
}</style>
