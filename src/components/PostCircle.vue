<template>
    <div class="circle">
        
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "/src/scss/mixin";
@import "/src/scss/variables";

 .circle{
    @include enlargeCircle(100px);
    border: 1px solid $secondary-color;
    border-radius: 50%;
 }
</style>