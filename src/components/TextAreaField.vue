<template>
  <div class="form-field">
    <textarea
      :id="id"
      class="textarea-field"
      :name="name"
      :placeholder="label"
      :value="modelValue"
      @input="updateValue($event)"
    ></textarea>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, watchEffect, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    id: String,
    label: String,
    name: String,
    modelValue: String,
    placeholder: String
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
  }
  </script>
  
  <style scoped>
  .label {
    display: inline-block;
    margin-bottom: 0.5em;
  }
  </style>