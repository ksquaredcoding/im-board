<template>
  <div class="aboutPage container-fluid bg-secondary">
    <div class="row">
      <div class="col-md-4 d-flex " >
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorCard from '../components/AuthorCard.vue';
export default {
  setup() {
    return {};
  },
  components: { AuthorCard },
};
</script>

<style scoped lang="scss">
.banner {
  height: 600px;
  object-fit: cover;
}
.aboutPage {
  background-image: url(https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80);
  background-position: center;
  background-size: cover;
}
</style>
