<script setup>
import { ref, onMounted } from 'vue'
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

</script>


<template>
    <div class="search-bar" v-if="iconSelected != 'profile'">
        <div class="search-bar__input-wrapper">
            <input class="search-bar__input" type="text" />
            <div class="map-icondiv" @click="isMapSearch = !isMapSearch">
                <span class="material-symbols-outlined" v-if="!isMapSearch" >map</span>
                <span class="material-symbols-outlined" v-else >explore</span>
            </div>
        </div>

        <div class="search-bar__filters" v-if="iconSelected === 'explore'">
            <div class="search-bar__filter" @click="filterSelected = 'litnow'"
                :class="{ filteractive: filterSelected === 'litnow' }">
                <p>Lit now</p>
            </div>
            <div class="search-bar__filter" @click="filterSelected = 'nearme'"
                :class="{ filteractive: filterSelected === 'nearme' }">
                <p>Near me</p>
            </div>
            <div class="search-bar__filter" @click="filterSelected = 'chill'"
                :class="{ filteractive: filterSelected === 'chill' }">
                <p>Chill</p>
            </div>
        </div>
    </div>
</template>



<style scoped>
.search-bar {
    position: absolute;
    top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    /* border:  1px solid #cbcbcb84; */
}

/* Input */
.search-bar__input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 95%;
    border-radius: var(--border-radius);
}

.search-bar__input {
    width: 100%;
    height: 3rem;
    padding: 0.3rem 1.5rem;
    font-size: 1.2rem;
    color: var(--text-secondary);
    background-color: #3b0084;
    border: 1px solid #5f00d4;
    border-radius: 1.5rem;
    outline: none;
}
.search-bar__input:focus{
    border: 1px solid var(--theme);
    
}


.map-icondiv{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--theme3);
    height: 2.3rem;
    aspect-ratio: 1/1;
    /* width: 2.5rem; */
    border-radius: 50%;
}

.material-symbols-outlined {
  /* height: var(--div-height1); */
  /* padding: 0.2rem; */
  font-size: 1.7rem;
  color: var(--theme);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease;
  /* width: 0%; */
}






/* Filters */
.search-bar__filters {
    width: 93%;
    display: flex;
    gap: 0.7rem;
    height: var(--div-height1);
}

.search-bar__filter {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    border-radius: var(--border-radius1);
    background-color: #5f00d437;
    color: var(--text-secondary);
    transition: 0.3s ease;
}

.search-bar__filter.filteractive {
    background-color: #5f00d4;
    color: var(--text-primary);
}
</style>