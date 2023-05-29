<template>
  <div class="form-field">
    <select 
      :id="id"
      class="select-field"
      :name="name"
      :value="modelValue"
      @change="updateValue($event)"
    >
      <option disabled selected value="">Select an option</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
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
    placeholder: String,
    options: {
        type: Array as () => Option[],
        required: false,
    },
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLSelectElement).value)
  }
  </script>
  
  <style scoped>
  .label {
    display: inline-block;
    margin-bottom: 0.5em;
  }
  </style>