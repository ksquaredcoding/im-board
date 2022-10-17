<template>
  <div class="card text-bg-dark">
    <!-- <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftoplayishuman.com%2Fwp-content%2Fuploads%2F2019%2F01%2FIMG_20190130_152747_418.jpg%3Ffit%3D5036%252C2988%26ssl%3D1&f=1&nofb=1&ipt=9e11893fac6ce63d012fa63be477227bf1f90ae9e1d1700105291a01b6d9b874&ipo=images"
      class="card-img" alt="..." />
    <div class="card-img-overlay"><div class="d-flex"><h5 class="card-title p-2 rounded-1">Fall In Love With Board Games</h5></div>
      <div class="d-flex"><p class="card-text p-4 rounded-4">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p></div>
      
      
    </div> -->

    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
      <img src="https://cdn.thepennyhoarder.com/wp-content/uploads/2017/06/21140000/BOARDGAMENIGHT0617.jpg" class="d-block card-img" alt="...">
       <div class="card-img-overlay">
            <div class="d-flex">
              <h5 class="card-title p-2 rounded-1">
                Fall In Love With Board Games
              </h5>
            </div>
            <div class="d-flex">
              <p class="card-text p-4 rounded-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
    </div>
        <div class="carousel-item" v-for="u in urls">
          <img :src="u.url" class="d-block  card-img" alt="..." />
          <div class="card-img-overlay animate__animated animate__fadeInLeft">
            <div class="d-flex">
              <h5 class="card-title p-2 rounded-1">
                Fall In Love With Board Games
              </h5>
            </div>
            <div class="d-flex">
              <p class="card-text p-4 rounded-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';

export default {
  setup() {
    return {
      urls: computed(() => AppState.homePageBannerUrls),
    };
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  font-size: 50pt;
  font-weight: 700;
  text-shadow: 2px 2px 0px rgba(190, 205, 208, 0.92);
  background-color: #79bd9add;
  color: #2c2c2f;
}

.card-text {
  background-color: #2c2c2ff0;
  color: #e4e4e4;
  font-weight: 700;
  letter-spacing: 0.06em;
}
.card-img {
  height: 300px;
  object-fit: cover;

  box-shadow: inset 0 0 10px 10px #000;
}
</style>
