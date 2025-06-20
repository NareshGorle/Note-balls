<template>
    <div
      class="card mb-4">
      <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>

      <div class="columns is-mobile has-text-grey-light">
        <small class="column">{{ dateFormatted}}</small>
        <small class="column has-text-right">{{ characterLength}}</small>
      </div>
    </div>
 
    <footer class="card-footer">  
      <RouterLink
        :to="`/editNote/${note.id}`"
        href="#"
        class="card-footer-item">
        Edit</RouterLink>
        <a
        @click.prevent ='storeNotes.deleteNote(note.id)'
        href="#" 
        class="card-footer-item">
        Delete</a>
    </footer>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useDateFormat} from '@vueuse/core'
import { useStoreNotes } from '@/stores/storeNotes';

  const props = defineProps({
      note:{
          type:Object,
          required:true
      }   
  })

  // const emit = defineEmits(['deleteClicked'])

  const storeNotes = useStoreNotes()

   const dateFormatted = computed(()=>{
    let date =new Date(parseInt(props.note.date))
    let formatteddate = useDateFormat(date, 'YYYY-MM-DD @ HH:mm:ss')
    return formatteddate.value
   })


    const characterLength = computed(()=>{
      let length = props.note.content.length
      let descripton = length > 1 ? 'characters':'character'
      return ` ${length} ${descripton} `

    })

//  const handeleDeleteClicked = () =>{
//  emit('deleteClicked',props.note.id)
//  }
</script>