<template>
  <!-- <div class="aboutPage container-fluid bg-secondary">
    <div class="row justify-content-center">
      <div class="col-md-6 justify-content-center d-flex ">
        <p class="teamText rounded mt-2 px-4">Meet Our Team</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-2 cardSection  d-flex  p-0 " v-for="i in 5" >
        <AuthorCard />
     
      </div>
    </div>
  </div> -->
  <div class="aboutPage">

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
.cardSection {
  max-height: 50vh;
}

.teamText {
  font-size: 50pt;
  font-weight: 700;
  font-family: Helvetica;
  color: #2c2c2c;
  background-color: #d5d5d5;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);
}

.banner {
  height: 600px;
  object-fit: cover;
}

.aboutPage {
  height: 100vh;
  background-image: url(https://mj-gallery.com/c8886f1a-3612-4f2e-a100-764330c494be/grid_0.png);
  background-position: center;
  background-size: cover;
}
</style>
