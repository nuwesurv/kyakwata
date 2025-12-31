<script setup>
import { ref, onMounted, watch } from 'vue'
import { useNavbarStore } from '@/stores/NavBar'
import { storeToRefs } from 'pinia'
import { useSearchFilters } from '@/stores/SearchFilters'

const { iconSelected } = storeToRefs(useNavbarStore())
const { filterSelected, isMapSearch } = storeToRefs(useSearchFilters())


const fontLoaded = ref(false)
onMounted(() => {
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    fontLoaded.value = true
  })
})
</script>

<template>
  <div class="navbar">
    <!-- <div class="navbar" :style="{ bottom: iconSelected === 'tour' ? '-10dvh' : '1dvh' }"> -->
    <div class="nav-item" @click="iconSelected = 'explore'">
      <!-- Only use class to toggle width; use inline style for background color if you prefer -->
      <div class="navbar-icondiv">
        <span v-if="isMapSearch" class="material-symbols-outlined" :class="{ iconactive: iconSelected === 'explore' }" > map </span>
        <span v-else class="material-symbols-outlined" :class="{ iconactive: iconSelected === 'explore' }" > explore </span>
      </div>
      <p v-if="!isMapSearch" :class="{ textactive: iconSelected === 'explore' }">
        Explore
      </p>
      <p v-else :class="{ textactive: iconSelected === 'explore' }">
        Map
      </p>
    </div>

    <!-- streaming panel -->
    <div class="nav-item" @click="iconSelected = 'stream' ">
      <div class="navbar-icondiv" :class="{ active: iconSelected === 'stream' }">
        <span class="material-symbols-outlined" :class="{ iconactive: iconSelected === 'stream' }" >stream</span>
      </div>
      <p :class="{ textactive: iconSelected === 'stream' }">
        Live
      </p>
    </div>

    <!-- profile panel -->
    <div class="nav-item" @click="iconSelected = 'profile'">
      <div class="navbar-icondiv">
        <span class="material-symbols-outlined" :class="{ iconactive: iconSelected === 'profile' }" >person</span>
      </div>
      <p :class="{ textactive: iconSelected === 'profile' }">
        Profile
      </p>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0%);
  height: 3.8rem;
  background-color: var(--background);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: bottom 0.2s ease;
  background-color: #1b003b;
  padding-top: 0.2rem;
  /* border-radius: 4dvh; */
  /* border: 1px solid white; */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 100%;
  gap: 0.2rem;
  position: relative;
  /* border: 1px solid red; */
}

.navbar-icondiv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  box-sizing: border-box;
  /* border: 1px solid white; */
}


.material-symbols-outlined {
  height: var(--div-height1);
  padding: 0.2rem;
  font-size: 1.5rem;
  color: var(--theme);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0%;
  transition: width 0.3s ease;
}

.material-symbols-outlined.iconactive {
  width: 100%;
  font-size: 1.8rem;
  color: var(--theme-highlight);
  border-radius: 0.75rem;
  border-radius: var(--border-radius1);
  background-color: var(--theme3);
}




p {
  font-size: 0.75rem;
  margin: 0;
  color: var(--theme);
  font-size: 0.7rem;
  font-weight: 200;
}

p.textactive {
  color: var(--theme-highlight);
  font-size: 0.8rem;
  font-weight: 500;
}


img {
  height: 80%;
  /* width: 100%; */
}

/* =============================== */
/* Laptops & Desktops (Google Maps style) */
@media (min-width: 720px) {
  .navbar {
    width: 30%;
    /* 30% of screen */
    left: 1rem;
    /* stick to left */
    transform: translate(0, 0);
    /* no centering */
    border-top-right-radius: 1.6rem;
    border-top-left-radius: 1.6rem;
  }
}
</style>
