<template>
    <div 
     class="card p-4 mb-5"
     :class="`has-background-${bgColor}-dark`"
    >

     <label 
       v-if="label"
       class="label has-text-white"
     > {{ label }}
    </label>

      <div class="field">
        <div class="control">
              <textarea
                :value="props.modelValue" 
                @input="$emit('update:modelValue',$event.target.value)"
                class="textarea"
                :placeholder="placeholder"
                ref="textareaRef"
                maxlength="100"
                v-autofocus
                />
         </div>
       </div>

            <div class="field is-grouped is-grouped-right ">
                <div class="control">
                <slot name="buttons"/>
                </div>   
                </div>
     </div>
</template>
<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { ref } from 'vue'


    const props = defineProps({
        modelValue:{
            type:String,
            required:true
        },
        bgColor:{
            type:String,
            default:'success'
        },
        placeholder:{
            type:String,
            default:'type something'
        },
        label:{
            type:String,
            default:''
        }
    })

    const emit = defineEmits(['update:modelValue'])


    const textareaRef = ref(null)

    const focusTextarea = ()=>{
        textareaRef.value.focus()
    }

    defineExpose({
        focusTextarea
    })

    // // directives 
    // const vAutofocus = {
    //     mounted:(ele)=>{
    //         ele.focus()
    //     }
    // }
</script>