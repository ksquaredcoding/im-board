<template>
<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade " id="FAQ" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="FAQLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl  ">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h1 class="modal-title fs-5" id="FAQLabel">Site Tour</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {

  },

  setup(props) {

    return {

    };
  },
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>
