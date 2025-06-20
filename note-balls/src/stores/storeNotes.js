import { defineStore } from 'pinia'
import { collection,doc,onSnapshot,deleteDoc,updateDoc,addDoc,query, orderBy} from "firebase/firestore"
import { db } from '@/js/firebase'
import { useStoreAuth } from './storeAuth'



let notesCollectionRef 
let noteCollectionQuery 
let getNotesSnapshot = null



export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes:[],
        notesLoaded:false,
    }
  },
  actions: {
     init(){
      const storeAuth = useStoreAuth()
      
      notesCollectionRef = collection(db, 'users',storeAuth.user.id,'notes')
      noteCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"),limit())

      this.getNotes()
     },

    async getNotes(){

    this.notesLoaded=false
       
       getNotesSnapshot = onSnapshot(noteCollectionQuery, (querySnapshot) => {
         let notes=[]
           querySnapshot.forEach((doc) => {
           let note = {
              id : doc.id,
              content:doc.data().content,
              date:doc.data().date
              }
            notes.push(note)
        })  
         this.notes = notes
        this.notesLoaded = true
         
      })

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
       
       },
       clearNotes(){
        this.notes= []
        if( getNotesSnapshot){
          getNotesSnapshot = 
         getNotesSnapshot()

        }
       },
       // here addDoc for auto genarete id's instead of setDoc
    async addNote(newNoteContent){
         let currentDate =  new Date().getTime(),
              date = currentDate.toString()
              await addDoc(notesCollectionRef, {
              content:newNoteContent,
               date
            });
        
          
        },
      async  deleteNote(idToDelete){
        await deleteDoc(doc(notesCollectionRef,idToDelete))

        // this.notes = this.notes.filter(note=> note.id !== idToDelete ) 
        },
       async updateNote(id,content){
         await updateDoc(doc(notesCollectionRef,id),{
              content
            })
          // let index = this.notes.findIndex(note => note.id ===id)
          // this.notes[index].content = content
           
        }
    
  },
  getters:{
    getNoteContent:(state)=>{
     return (id)=>{
      return state.notes.filter(note => note.id === id)[0].content

      }        
    },
    totalNotesCount:(state)=>{
      return state.notes.length
    },
    totalCharacterCount:(state)=>{
      let count = 0
      state.notes.forEach(note =>{
        count += note.content.length
      })
      return count
    }
  }
  
})