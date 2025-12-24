import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavbarStore = defineStore('navBar',()=>{
    const iconSelected = ref('home')


    return {iconSelected}
})