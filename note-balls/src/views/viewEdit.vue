<template>
 <div class="edit">
    <AddEditNote
        v-model="noteContent"
        bgColor="link"
        placeholder="Edit note"
        label="Edit Note"
        ref ="addEditNoteRef"
     >
        <template #buttons>
         <button
          @click="$router.back"
          class="button is-link is-light mr-2"
        > 
          cancel
        </button>   
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >  
          save note
        </button>
        
        </template>
    </AddEditNote> 
 </div>
</template>
<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';

const storeNotes = useStoreNotes()

const route = useRoute()
const router = useRouter()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = ()=>{
  storeNotes.updateNote(route.params.id,noteContent.value)
  router.push('/') 
}





</script>
