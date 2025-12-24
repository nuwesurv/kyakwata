<script setup>
import { ref, onMounted, watch } from 'vue';
import { useNavbarStore } from '@/stores/NavBar';
import { storeToRefs } from 'pinia';

const { iconSelected } = storeToRefs(useNavbarStore())

const fontLoaded = ref(false);
onMounted(() => {
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    fontLoaded.value = true;
  });
});


</script>


<template>
  <div class="navbar">

      <!-- <div class="navbar" :style="{ bottom: iconSelected === 'tour' ? '-10dvh' : '1dvh' }"> -->
      <div class="nav-item" @click="iconSelected = 'home'">
        <!-- Only use class to toggle width; use inline style for background color if you prefer -->
        <div class="navbar-icondiv" :class="{ active: iconSelected === 'home', inactive: iconSelected != 'home' }">
          <img src="@/assets/compass-theme.svg" alt="" v-if="iconSelected=== 'home'">
          <img src="@/assets/compass.svg" alt="" v-else>
        </div>
        <p :class="{ active: iconSelected === 'home', inactive: iconSelected != 'home' }">
          Explore</p>
      </div>

      <!-- Filtering panel -->
      <div class="nav-item" @click="iconSelected = 'filter'">
        <div class="navbar-icondiv" :class="{ active: iconSelected === 'filter', inactive: iconSelected != 'home' }">
          <img src="@/assets/search-theme.svg" alt="" v-if="iconSelected=== 'filter'">
          <img src="@/assets/search.svg" alt="" v-else>
        </div>
        <p :class="{ active: iconSelected === 'filter', inactive: iconSelected != 'filter' }">
          Search</p>
      </div>


      <!-- Settings panel -->
      <div class="nav-item" @click="iconSelected = 'settings'">
        <div class="navbar-icondiv" :class="{ active: iconSelected === 'settings', inactive: iconSelected != 'home' }">
          <img src="@/assets/profile-theme.svg" alt="" v-if="iconSelected=== 'settings'">
          <img src="@/assets/profile.svg" alt="" v-else>
        </div>
        <p :class="{ active: iconSelected === 'settings', inactive: iconSelected != 'settings' }">
          Profile</p>
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
  /* border-radius: 4dvh; */
  /* border: 1px solid white; */
}


.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
  gap: 0.1rem;
  position: relative;
  /* border: 1px solid red; */
}


.navbar-icondiv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  border-radius: var(--button-radius);
  transition: width 0.2s ease, background-color 0.2s ease;
  box-sizing: border-box;
  /* border: 1px solid white; */
}


.navbar-icondiv.active {
  color: var(--primary);
  /* background-color: var(--theme-highlight); */
}



.navbar-icondiv.inactive {
  box-shadow: none;
  background-color: transparent;
  color: var(--secondary-text);
}


p {
  font-size: 0.75rem;
  margin: 0;
}

p.active {
  color: var(--theme);
  font-size: 0.8rem;
  font-weight: 500;
}

p.inactive {
  color: var(--text-secondary);
  font-size: 0.70rem;
  font-weight: 200;
}

img{
  height: 80%;
  /* width: 100%; */
}




/* =============================== */
/* Laptops & Desktops (Google Maps style) */
@media (min-width: 720px) {
  .navbar {
    width: 30%;                 /* 30% of screen */
    left: 1rem;                    /* stick to left */
    transform: translate(0, 0); /* no centering */
    border-top-right-radius: 1.6rem;
    border-top-left-radius: 1.6rem;
  }
}


</style>
