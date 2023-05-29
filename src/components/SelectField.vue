<template>
  <div class="form-field">
    <label :for="id" class="label">{{ label }}</label>
    <select 
      :id="id"
      class="select-field"
      :name="name"
      :value="modelValue"
      @change="updateValue($event)"
      :aria-invalid="error ? 'true' : 'false'"
      :aria-describedby="error ? `${id}-error` : undefined"
    >
      <option disabled selected value="">Select an option</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <p v-if="error" :id="`${id}-error`" class="error">{{ error }}</p>
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
    error: String,
    options: {
        type: Array as () => Option[],
        required: true,
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
  .error {
    color: #AD0000;
    font-weight: 700;
  }
  </style>