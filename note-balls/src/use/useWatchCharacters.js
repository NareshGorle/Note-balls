import { watch } from "vue"

export function useWatchCharacters(valuetowatch,maxChar){
    watch(valuetowatch,(newValue)=>{
        if(newValue.length === maxChar){
          alert(`only ${maxChar}  characters are allowed...`)
        }
       })
}