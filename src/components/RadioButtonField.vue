<template>
  <fieldset class="form-field">
    <legend class="radio-buttons-label">{{ label }}</legend>
    <div v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="`${id}-${option.value}`"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="updateValue(option.value)"
      >
      <label :for="`${id}-${option.value}`">{{ option.text }}</label>
    </div>
  </fieldset>
</template>
  
<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  
  interface Option {
    text: string;
    value: string;
  }
  
  const props = defineProps({
    id: String,
    label: String,
    name: String,
    modelValue: String,
    options: {
      type: Array as () => Option[],
      required: true,
    },
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const updateValue = (value: string) => {
    emit('update:modelValue', value)
  }
</script>
  
<style scoped>
  input {
    margin-right: 0.5rem;
  }
  .label {
    display: inline-block;
    margin-bottom: 0.5em;
  }
</style>