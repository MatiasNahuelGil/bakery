<template>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
          <img v-bind:src="require('/src/assets/Breakfast/brownies.jpg')" alt="Brownies" class="breakfast-img">
        </div>
        <h3>BROWNIES</h3>
        <p>Fudgy squares, chocolate-rich, decadent delight.</p>
     </div>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/cinnamonBun.jpg')" alt="Cinnamon Bun" class="breakfast-img">
        </div>
        <h3>CINNAMON BUN</h3>
        <p>Cinnamon-spiced, fluffy dough, irresistible swirl.</p>
     </div>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/cookies.jpg')" alt="Cookies" class="breakfast-img">
        </div>
        <h3>COOKIES</h3>
        <p>Crumbly cookies, chocolate chips, satisfying crunch.</p>
     </div>
      <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/croissant.jpg')" alt="Croissant" class="breakfast-img">
        </div>
        <h3>CROISSANT</h3>
        <p>Golden pastry, buttery crunch, exquisite flavor.</p>
      </div>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/doughnuts.jpg')" alt="Doughnuts" class="breakfast-img">
        </div>
        <h3>DOUGHNUTS</h3>
        <p>Sweet, glazed rings, fluffy inside, indulgent treat.</p>
     </div>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/shortBread.jpg')" alt="Short Bread" class="breakfast-img">
        </div>
        <h3>SHORT BREAD</h3>
        <p>Buttery shortbread, crumbly texture, melt-in-your-mouth</p>
     </div>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/tarts.jpg')" alt="Tarts" class="breakfast-img">
        </div>
        <h3>TARTS</h3>
        <p>Flaky tarts, fruity filling, delightful bite-sized.</p>
     </div>
     <div class="card-breakfast col-lg-3 me-2 mt-2">
        <div class="breakfast-container-img">
         <img v-bind:src="require('/src/assets/Breakfast/turkishBagels.jpg')" alt="Turkish Bagels" class="breakfast-img">
        </div>
        <h3>TURKISH BAGELS</h3>
        <p>Sesame-crusted, chewy delight, Turkish specialty.</p>
     </div> 

</template>

<script setup>
</script>

<style scoped lang="scss">
@import "/src/scss/variables";

.card-breakfast{
   display: flex;
   flex-direction: column;
   width: 270px;
   height: 350px;
   background-color: $fourth-color;

   .breakfast-container-img{
      margin:auto;
      margin-top: 10px;
      width: 200px;
      height: 180px;
      border-radius: 50%;
      .breakfast-img{
         max-width: 100%;
         object-fit: cover;
         border-radius: inherit;
         height: inherit;
      }
   }
   h3,p{
      color: $secondary-color; 
      text-align: center
   }
   
}


</style>