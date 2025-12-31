<script setup>
import { ref, onMounted, defineProps } from 'vue'
import { useSearchFilters } from '@/stores/SearchFilters'
import { storeToRefs } from 'pinia'
import { useNavbarStore } from '@/stores/NavBar'

const { iconSelected } = storeToRefs(useNavbarStore())
const { filterSelected, isMapSearch } = storeToRefs(useSearchFilters())

const props = defineProps({
    barName: String,
    videoData: Object
})


</script>


<template>
    <div class="video-card">
        <div class="image-wrapper">
            <img :src="videoData.image" :alt="barName" loading="lazy" />
        </div>

        <div class="details">
            <div class="title-and-viewers">
                <p class="title">{{ barName }}</p>
                <p class="viewers">{{ videoData.viewers }} viewers</p>
            </div>
            <p class="presence"> {{ videoData.vibe }} 🔥 </p>
        </div>
    </div>
</template>

<style scoped>
.video-card {
    height: 16rem;
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    position: relative;
    border: 0.5px solid rgba(126, 128, 127, 0.274);
}

.video-card:hover {
    transform: translateY(-4px);
}

/* IMAGE */
.image-wrapper {
    position: relative;
    flex: 1;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.video-card:hover img {
    transform: scale(1.05);
}


/* DETAILS */
.details {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1rem;
    background-color: rgba(47, 227, 255, 0.096);
    background-image: linear-gradient(90deg, #00000062, #ffffff21);
    backdrop-filter: blur(5px);
}

.title {
    font-size: 1.1rem;
    font-weight: 600;
    color: aliceblue;
}
.viewers{
    font-size: 0.8rem;
    color: var(--text-secondary);

}

.presence {
    font-size: 0.8rem;
    color: #9be7ff;
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
    align-items: center;
    background-color: rgba(17, 1, 66, 0.514);
}
</style>
