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
  <div class="profile-container">

    <!-- Profile header -->
    <div class="profile-div">
      <div class="top-section">
        <p>Profile</p>
        <div class="icon-div">
          <span class="material-symbols-outlined">settings</span>
        </div>
      </div>

      <!-- User info -->
      <div class="user-profile">
        <div class="profile1">
          <div class="user-profile-icon-div">
            <img src="@/assets/profile-theme.svg" alt="Profile" />
          </div>
          <div class="user-details">
            <p class="user-name">Anonymous User</p>
            <p class="user-since">since 2024</p>
          </div>
        </div>

        <!-- Reputation Score -->
        <div class="reputation-card">
          <p>Reputation Score</p>
          <p class="points">847 points</p>
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
        </div>
      </div>

      <!-- Settings -->
      <div class="section">
        <p class="section-title">SETTINGS</p>
        <div class="section-item">
          <span class="material-symbols-outlined">location_on</span>
          <p>Location</p>
          <span class="arrow material-symbols-outlined">chevron_right</span>
        </div>
        <div class="section-item">
          <span class="material-symbols-outlined">notifications</span>
          <p>Notifications</p>
          <span class="status">On</span>
          <span class="arrow material-symbols-outlined">chevron_right</span>
        </div>
      </div>

      <!-- Support -->
      <div class="section">
        <p class="section-title">SUPPORT</p>
        <div class="section-item">
          <span class="material-symbols-outlined">chat_bubble</span>
          <p>Feedback</p>
          <span class="arrow material-symbols-outlined">chevron_right</span>
        </div>
        <div class="section-item">
          <span class="material-symbols-outlined">help</span>
          <p>Help Center</p>
          <span class="arrow material-symbols-outlined">chevron_right</span>
        </div>
      </div>

      <!-- Logout -->
      <button class="logout-btn">
        <span class="material-symbols-outlined">logout</span> Logout
      </button>

    </div>

    <div class="fake-navbar"></div>
  </div>
</template>

<style scoped>
.profile-container {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f1a;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.profile-div {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  /* border: 1px solid white; */
  overflow: scroll;
}

/* Top section */
.top-section {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.top-section p {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
}

.icon-div {
  height: 2.1rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #4b3f72;
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-symbols-outlined {
  font-size: 1.5rem;
  color: #fff;
}

/* User Profile */
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 90%;
}

.profile1 {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-profile-icon-div {
  height: 4rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

.user-profile-icon-div img {
  width: 100%;
  height: 100%;
}

.user-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.user-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
}

.user-since {
  font-size: 0.8rem;
  color: #aaa;
}

/* Reputation */
.reputation-card {
  width: 100%;
  background-color: #1a1a2e;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.reputation-card p {
  margin: 0;
}

.points {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.3rem 0;
}

.progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: #2c2c3c;
  border-radius: 0.25rem;
}

.progress-fill {
  width: 70%;
  height: 100%;
  background-color: #8b5cf6;
  border-radius: 0.25rem;
}

/* Sections */
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-title {
  font-size: 0.8rem;
  color: #888;
  margin: 0.5rem 0;
}

.section-item {
  background-color: #1a1a2e;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  justify-content: space-between;
}

.section-item p {
  flex: 1;
}

.arrow {
  font-size: 1rem;
}

.status {
  font-size: 0.8rem;
  color: #8b5cf6;
  margin-right: 0.5rem;
}

/* Logout */
.logout-btn {
  margin-top: 1rem;
  width: 90%;
  background-color: #63171b;
  border: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.fake-navbar {
  height: 3.8rem;
}
</style>
