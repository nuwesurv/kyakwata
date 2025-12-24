<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref, onMounted } from 'vue';

</script>

<template>
    <div class="homepage">
        <div class="top-section">
                <div class="search-div">
                    <input class="text-input" type="text">
                </div>
                <div class="categories-query">
                    <div class="quick-query1">
                        <p>Lit now</p>
                    </div>
                    <div class="quick-query2">
                        <p>Near me</p>
                    </div>
                    <div class="quick-query2">
                        <p>Chill</p>
                    </div>
                </div>
        </div>
    </div>
    <NavBar/>

</template>

<style scoped>
.homepage {
    background-image: linear-gradient(120deg,
            #2c0062,
            #1b003b);
    height: 100dvh;
    display: flex;
    flex-direction: column;
    
}

.top-section {
    /* height: 10rem; */
    /* border: 1px solid rgb(1, 133, 6); */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    /* justify-content: center; */
    margin-top: 2rem;
}



/* Search div */
.search-div {
  height: var(--div-height-primary);
  background-color: #3b0084;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
}

.text-input {
  color: var(--text-secondary);
  width: 100%;
  border-radius: var(--border-radius);
  border: 1px solid #5f00d4;
  outline: none;
  padding: 0 1rem;
  font-size: 1.2rem;
  height: var(--div-height-primary);
  background-color: #3b0084;
}


.categories-query{
    /* border: 1px solid red; */
    width: 88%;
    display: flex;
    gap: 1rem;
    height: 2.3rem;
}

.quick-query1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5f00d4;
    border-radius: var(--border-radius);
    padding: 0 1rem;
    color: var(--text-primary);
    /* font-size: 0.9rem; */
}

.quick-query2{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5f00d437;
    border-radius: var(--border-radius);
    padding: 0 1rem;
    color: var(--text-secondary);
}

.quick-query2:active{
    background-color: #5f00d48c;
}








</style>