<template>
   
   <nav class="navbar is-success"
       role="navigation"
       aria-label="main navigation">
     <div class="container is-max-desktop px-2 "></div>
  <div class="navbar-brand">
    <div class="navbar-item is-size-3 is-family-monospace" >
      Noteballs
    </div>

    <a
      @click.prevent="showMobileNav = !showMobileNav"
      role="button"
      class="navbar-burger"
      :class="{ 'is-active' : showMobileNav} "
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      ref="navbarBurgerRef">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div
   id="navbarBasicExample"
    class="navbar-menu "
    :class="{ 'is-active' : showMobileNav} "
    ref="navbarMenuRef"
    >
    <div class="navbar-start">
      <button
      v-if="storeAuth.user.id"
      @click.prevent="logout"
       class="button is-small is-info mt-3 ml-3 mb-3">
        Log out - {{ storeAuth.user.email}}
      </button>
    </div>
    <div class="navbar-end"> 
        <RouterLink 
          @click="showMobileNav=false"
          to="/"
          class="navbar-item"
          active-class = 'is-active'
           >
            Notes
        </RouterLink>
        <RouterLink 
          @click="showMobileNav=false"
          to="/stats"
          class="navbar-item" 
          active-class = 'is-active'
          >
          Stats
        </RouterLink>
      
    </div>
  </div>
</nav>
</template>
<script setup>
import {ref} from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth'


const storeAuth = useStoreAuth()


const showMobileNav = ref(false)

const navbarMenuRef = ref(null)
const navbarBurgerRef=ref(null)
onClickOutside(navbarMenuRef, () =>{
  showMobileNav.value= false
}, {
  ignore:[navbarBurgerRef]
})

const logout=()=>{
 showMobileNav.value = false
 storeAuth.logoutUser()
}
</script>
<style>
@media(max-width:1023px){
   .navbar-menu {
    position:absolute;
    left:0;
    width: 100%;
   }
}
</style>