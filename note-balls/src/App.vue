<template>
  <NavBar/>
  <!-- <RouterLink to="/" class="button">Notes</RouterLink>
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
  <div class="container is-max-desktop px-2 py-4">
    <RouterView/>
  </div>
</template>
<script setup>
import NavBar from '@/components/Layout/NavBar.vue'
import { onMounted } from 'vue'
import { useStoreAuth } from './stores/storeAuth'


const storeAuth = useStoreAuth()

onMounted(()=>{
storeAuth.init()
})
</script>
<style>
@import '\vue-composition-api\note-balls\note-balls\node_modules\bulma\css\bulma.min.css';

</style>
