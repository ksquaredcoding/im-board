<template>
  <div
            class="col-md-12 d-flex justify-content-around align-items-center animate__animated animate__fadeInRight"
          >
            <button @click="filterPreset('')" aria-label="All Categories" title="All Categories" class="btn bg-c3 text-dark box-shadow">All</button>
            <button @click="filterPreset('popular')" class="btn bg-c3 text-dark box-shadow">Popular</button>
            <button @click="filterPreset('highest-Rated')" class="btn bg-c3 text-dark box-shadow">
              Highest Rated
            </button>
            <button @click="filterPreset('wishlist')" class="btn bg-c3 text-dark box-shadow">Wishlist</button>
          </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.btn {
  width: 175px;
  height: 50px;
  overflow: hidden;
  font-size: larger;
  font-weight: bold;
  padding: 10px;
  font-family: 'Baloo 2', cursive;
}
</style>