<template>
    <div class="stats">
     <table class="table is-fullwidth">
    <thead>
        <tr>
            <th>Stat</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Number of Notes</td>
            <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
            <tr>
            <td>Number of Character (of all notes)</td>
            <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>

    </tbody>
    </table>
    <input
    v-model="noteInput"
    type="text"
    placeholder=" use the note balls....!"
    v-autofocus
    />
        
    </div>
</template>

<script setup>

import { vAutofocus } from '@/directives/vAutofocus';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';
import { ref } from 'vue';

 const storeNotes = useStoreNotes()

  const  noteInput = ref('')
  useWatchCharacters(noteInput,50)

</script>