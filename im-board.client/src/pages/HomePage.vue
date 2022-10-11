<template>

</template>

<script>
export default {
  setup() {
    return {







      //Infinite Scroll need to add to it and test
      getNextSetOfBoardGames(){
        window.onscroll(()=>{
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
          if (bottomOfWindow) {
            //await service.getNextPage or something()
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
