<template>
    <header class="sticky-top">
         <PostMenu/>
    </header>
    <main >
         <slot></slot>
    </main>
    <footer >
        <PostFooter/>
    </footer>
</template>


<script setup>
 import PostMenu from '@/components/PostMenu.vue';
 import PostFooter from '@/components/PostFooter.vue';

</script>
