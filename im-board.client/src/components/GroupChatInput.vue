<template>
  <div class=" bg-dark">
<form @submit.prevent="handleSubmit">
  <div class="row">
    <div class="d-flex justify-content-between">
      <p class="p-2">Add post..</p>
<button class="btn bg-c6" type="submit" aria-label="Submit Post" title="Submit" >Post</button>
</div>
  </div>
 <div class="text-start mb-2 d-flex justify-content-center">
<div class="">
  <div class="form-group text-center">
    <textarea class="p-2 w-100" rows="4" cols="150" placeholder="" name="postcontent"></textarea>
    </div>
        </div>
      <div>
      
    </div>

  </div>



  </form></div>
</template>


<script>
export default {
  setup() {
    return {

      async handleSubmit() {
        try {
          
          } catch (error) {
            
          }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>