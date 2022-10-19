<template>
 

    <div class="modal fade" id="gameNightForm" tabindex="-1" aria-labelledby="gameNightLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-body FORM">
        <div class="gameNight container">
    <div class="row">
    
        <form>
          <div class="inputBox">
           <span>What game do you want to play?</span>
            <input
              type="url"
              class="form-control"
              v-model="editable.game"
           
              name="game"
            />
          
          </div>
          <div class="inputBox">
        
            <input
              type="datetime-local"
              class="form-control"
              v-model="editable.StartDate"
              name="time"
            />
          </div>
          <div class="inputBox">
          <span>Location</span>
            <input
              type="text"
              class="form-control"
              v-model="editable.location"
              name="bio"
          
             
            >
          </div>
          <div>
            <button type="submit" class="btn btn-primary w-100 mt-2">
              Create Game Night
            </button>
          </div>
        </form>
      </div>
 
  </div>

         
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped>

.inputBox {
  position: relative;
  width: 250px;
}


.inputBox input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffbb00;
  border-bottom: 3px solid #ff5e00;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1em;
  background-color: transparent;
  transition: all 1.5s ease;
  box-shadow: 0.25px 0.25px 10px rgba(243, 236, 236, 0.308);
}

.inputBox span {
  position: absolute;
  left: 0;

  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #eddeed80;
  transition: all 1s ease;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  color: #27132a;
  transform: translateX(10px) translateY(-7px);
  padding: 0 10px;
  font-size: 0.65em;
  border-radius: 4px;
  font-weight: bold;
  background: #ffbb00;
  border-left: 1px solid #ff5e00;
  border-right: 1px solid #ff5e00;
  letter-spacing: 0.2em;
  transition: all 1s ease;
}

.modal-body {
  background-image: url(https://images.unsplash.com/photo-1615775642101-402e4d2c0e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
  background-size: cover;
  background-position: center;
  box-shadow: 1px 1px 10px rgba(243, 236, 236, 0.308);
}


</style>
