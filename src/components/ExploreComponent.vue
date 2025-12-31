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


const places = ref([
  {
    id: 1,
    name: 'The Warehouse',
    category: 'Electronic',
    distance: '0.2 mi',
    vibe: 98,
    status: 'Crowded',
    updated: 'Updated 2m ago',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  {
    id: 2,
    name: 'Blue Velvet',
    category: 'Cocktail Bar',
    distance: '0.5 mi',
    vibe: 72,
    status: 'Moderate',
    updated: '5m ago',
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc'
  },
  {
    id: 3,
    name: 'Library Bar',
    category: 'Dive Bar',
    distance: '0.8 mi',
    vibe: 15,
    status: 'Quiet',
    updated: '12m ago',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039'
  }
])





</script>


<template>
  <div class="explore-container">
    <div class="fake-searchbar" :style="{ height: '7.5rem' }"></div>
    <div class="explore-wrapper">
      <!-- insert here the elements -->
      <div v-for="place in places" :key="place.id" class="vibe-card">
        <img :src="place.image" class="vibe-image" />

        <div class="vibe-info">
          <h3>{{ place.name }}</h3>
          <p class="meta">
            {{ place.category }} • {{ place.distance }}
          </p>

          <span class="status" :class="place.status.toLowerCase()">
            {{ place.status }}
          </span>

          <small :style="{color: 'var(--text-secondary)'}">{{ place.updated }}</small>
        </div>

        <div class="vibe-score">
          <span class="score">{{ place.vibe }}</span>
          <span class="label">VIBE</span>
        </div>
      </div>

    </div>
    <div class="fake-navbar"> </div>

  </div>

</template>

<style scoped>
.explore-container {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explore-wrapper {
  flex: 1;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: scroll;
  width: 95%;
  scrollbar-width: none;
}




.vibe-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem;
  border-radius: 1.2rem;
  background-color: var(--theme3);
  /* background: linear-gradient(145deg, #0c1322, #0f1a33); */
}

.vibe-image {
  width: 56px;
  height: 56px;
  border-radius: 0.9rem;
  object-fit: cover;
}

.vibe-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.vibe-info h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.meta {
  font-size: 0.75rem;
  opacity: 0.7;
  color: var(--text-primary);
}

.status {
  width: fit-content;
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 0.6rem;
}

.status.crowded {
  background: #ff3b3b33;
  color: #ff4d4d;
}

.status.moderate {
  background: #ff9f1c33;
  color: #ff9f1c;
}

.status.quiet {
  background: #4cd96433;
  color: #4cd964;
}

.vibe-score {
  text-align: right;
}

.score {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ff4d4d;
}

.label {
  font-size: 0.6rem;
  opacity: 0.6;
  color: var(--text-primary);
}











.fake-navbar {
  height: 3.8rem;
}
</style>