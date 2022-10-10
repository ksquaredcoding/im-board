<template>
  <div class="about container-fluid bg-secondary">
    <div class="row">
      <div class="col-md-4 " v-for="i in 5">
 <AuthorCard />

      </div>
    </div>
  </div>
</template>

<script>
import AuthorCard from "../components/AuthorCard.vue";
export default {
    setup() {
        return {};
    },
    components: { AuthorCard }
}
</script>
