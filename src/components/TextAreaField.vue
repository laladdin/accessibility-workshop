<template>
    <div class="form-field">
      <label :for="id" class="label">{{ label }}</label>
      <textarea
        :id="id"
        class="textarea-field"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue($event)"
        :aria-invalid="error ? 'true' : 'false'"
        :aria-describedby="error ? `${id}-error` : undefined"
      ></textarea>
      <p v-if="error" :id="`${id}-error`" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watchEffect, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    id: String,
    label: String,
    name: String,
    modelValue: String,
    placeholder: String,
    error: String
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
  .error {
    color: #AD0000;
    font-weight: 700;
  }
  </style>