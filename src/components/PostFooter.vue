<template>
   <section class="footer d-flex justify-content-center p-2">
       <div class="text-align-center d-flex flex-column ">
             <div class="mx-auto mb-2">
               <img v-bind:src="require('/src/assets/logo.png')" alt="logo" class="footer-logo ">
            </div>
           <p> © 2024 desarrollado por Gil Matias</p>
       </div> 
   </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "/src/scss/variables";

.footer{
    border: 1px solid black;
    width: 100%;
    background-color: $tertiary-color;
    color: $fourth-color;
    .footer-logo{
        width: 3em;
        height: 3em;
    }
}
</style>