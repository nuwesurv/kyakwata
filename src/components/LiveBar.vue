<script setup>
import { ref, onMounted } from 'vue'
import VideoCard from './VideoCard.vue'

import { useSearchFilters } from '@/stores/SearchFilters'
import { storeToRefs } from 'pinia'
import { useNavbarStore } from '@/stores/NavBar'

const { iconSelected } = storeToRefs(useNavbarStore())
const { filterSelected, isMapSearch } = storeToRefs(useSearchFilters())

const fontLoaded = ref(false)
onMounted(() => {
    document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        fontLoaded.value = true
    })
})


import mystica1 from '@/assets/mystica1.png'
import mystica2 from '@/assets/mystica2.png'
import mystica3 from '@/assets/mystica3.png'
import mystica4 from '@/assets/mystica4.png'

const videos = ref({
  Mystica: {
    vibe: 100,
    viewers: '1.2k',
    image: mystica1
  },
  SkyLounge: {
    vibe: 85,
    viewers: '10.5k',
    image: mystica2
  },
  UrbanNest: {
    vibe: 72,
    viewers: '12k',
    image: mystica3
  },
  MoonlightBar: {
    vibe: 78,
    viewers: '3k',
    image: mystica4
  },
  AuraClub: {
    vibe: 92,
    viewers: '25.2k',
    image: mystica2
  },
  EchoLounge: {
    vibe: 68,
    viewers: '4.8k',
    image: mystica1
  },
  NovaSpot: {
    vibe: 88,
    viewers: '1.5k',
    image: mystica3
  }
})





</script>


<template>
    <div class="live-bar-container">
        <div class="fake-searchbar" :style="{ height: '5rem' }"></div>
        <div class="live-bar-wrapper">
            <div v-for="video, bar_name in videos">
                <VideoCard :bar-name="bar_name" :video-data="video" />
            </div>
        </div>
        <div class="fake-navbar"> </div>

    </div>

</template>

<style scoped>
.live-bar-container {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.live-bar-wrapper {
    flex: 1;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: scroll;
    width: 95%;
    scrollbar-width: none;
}



.fake-navbar {
    height: 3.8rem;
}
</style>