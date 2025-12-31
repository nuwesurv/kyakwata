import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchFilters = defineStore('searchFilters',()=>{
    const filterSelected = ref('litnow')
    const isMapSearch = ref(false)


    return {filterSelected, isMapSearch}
})