<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref, onMounted } from 'vue';

</script>

<template>
    <div class="homepage">
        <div class="homepage-container">

        </div>
    </div>

</template>

<style scoped>
.homepage {
    background-image: linear-gradient(120deg,
            #2c0062,
            #1b003b);
    height: 100dvh;
    display: flex;
    align-items: flex-end;
}

.homepage-container {
    height: 100%;
    /* border: 1px solid rgb(1, 133, 6); */
    width: 100%;
}
</style>