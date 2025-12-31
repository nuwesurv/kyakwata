<script setup>
import { ref, onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import LiveBar from '@/components/LiveBar.vue';
import Profile from '@/components/Profile.vue';
import ExploreComponent from '@/components/ExploreComponent.vue';

import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/stores/NavBar';

const {iconSelected} = storeToRefs(useNavbarStore())

</script>

<template>
    <div class="homepage">
        <SearchBar />
        <ExploreComponent v-if="iconSelected==='explore'"/>
        <LiveBar v-if="iconSelected==='stream'"/>
        <Profile v-if="iconSelected==='profile'"/>

        <NavBar />
    </div>

</template>

<style scoped>
.homepage {
    background-image: linear-gradient(120deg,
            #2c0062,
            #1b003b);
    height: 100dvh;
    position: relative;
}
</style>