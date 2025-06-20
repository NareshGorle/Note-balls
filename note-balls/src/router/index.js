import {createRouter, createWebHashHistory} from 'vue-router'
import viewNotes from '@/views/viewNotes.vue'
import viewStats from '@/views/viewStats.vue'
import ViewEdit from '@/views/viewEdit.vue'
import ViewAuth from '@/views/viewAuth.vue'
import { useStoreAuth } from '@/stores/storeAuth'


const routes = [
  {
    path:'/',
    name:'notes',
    component:viewNotes
},
 {
    path:'/editNote/:id',
    name:'edit',
    component:ViewEdit
},
{
    path:'/stats',
    name:'stats',
    component:viewStats
},
{
    path:'/auth',
    name:'auth',
    component:ViewAuth
}

]

 const router = createRouter({
  history:createWebHashHistory(),
  routes: routes
 })
 export default router

 router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()
  if(!storeAuth.user.id && to.name !== 'auth'){
    return {name:'auth'}
  }
  if(storeAuth.user.id && to.name === 'auth'){
    return false
  }
  
})


