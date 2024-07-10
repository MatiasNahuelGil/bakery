<template>
    <div class="p-5 breads">
        <div>
            <img v-bind:src="require('/src/assets/Breads/baguette.jpg')" alt="baguette" class="m-5">
             <h2><b>BAGUETTE</b></h2>
             <p>Iconic, crispy and simple.</p>
             <p>${{ prices.baguette }}</p>

        </div>
        <div>
            <img v-bind:src="require('/src/assets/Breads/cheeseBread.jpg')" alt="cheeseBread" class="m-5">
             <h2><b>CHEESE BREAD</b></h2>
             <p> Brazilian delight, soft and savory.</p>
             <p>${{prices.cheeseBread}}</p>

        </div>
        <div>
            <img v-bind:src="require('/src/assets/Breads/farmingBread.jpg')" alt="farmingBread" class="m-5">
             <h2><b>FARMING BREAD</b></h2>
             <p>Rustic, hearty, with a golden crust.</p>
             <p>${{ prices.farmingBread }}</p>

        </div>
        <div>
            <img v-bind:src="require('/src/assets/Breads/milkBread.jpg')" alt="milkBread" class="m-5">
             <h2><b>MILK BREAD</b></h2>
             <p>Light, fluffy, and delicious.</p>
             <p>${{ prices.milkBread }}</p>

        </div>
        <div>
            <img v-bind:src="require('/src/assets/Breads/mixedGrain.jpg')" alt="mixedGrain" class="m-5">
             <h2><b>MIXED GRAIN</b></h2>
             <p>Nutritious multi-grain bread.</p>
             <p>${{ prices.mixedGrain }}</p>

        </div>
        <div>
            <img v-bind:src="require('/src/assets/Breads/brownBread.jpg')" alt="brownBread" class="m-5">
             <h2><b>BROWN BREAD</b></h2>
             <p>Nutritious, fiber-rich, wholesome.</p>
             <p>${{ prices.brownBread }}</p>

        </div>
            
            
            

    
    </div>
 
</template>

<script setup>
import {ref} from "vue"


//Precios de los panes
let prices = ref({
    baguette : 4.50,
    cheeseBread : 3.50,
    brownBread : 4.20,
    milkBread : 3.80,
    mixedGrain : 4.70,
    farmingBread : 5.00,
});

</script>

<style lang="scss" scoped>
.breads{

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
     div{
        display: flex;
        flex-direction: column;

        
      img{
        width: 270px;
        height: 270px;
        border-radius: 50%;
        object-fit: cover;
       }
     }

    
}

</style>