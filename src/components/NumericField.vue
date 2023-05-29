<template>
  <div class="form-field">
    <label class="label" :for="id">{{ label }}<span v-if="required" class="required">*</span></label>
    <input
      :id="id"
      class="input-field"
      type="number"
      :value="modelValue"
      @input="updateValue($event)"
      :required="required"
      :aria-required="required ? 'true' : 'false'"
      :aria-describedby="error ? `${id}-error` : undefined"
      :min="min"
      :max="max"
      :step="step"
    />
    <p v-if="error" :id="`${id}-error`" class="error">{{ error }}</p>
  </div>
</template>
  
<script setup lang="ts">
  import { ref, watchEffect, defineProps, defineEmits } from 'vue'
    
  let props = defineProps({
    modelValue: { type: Number, default: 0 },
    id: String,
    label: String,
    required: { type: Boolean, default: false },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 }
  })

  let error = ref<string | null>(null)

  const emit = defineEmits(['update:modelValue']);
    
  let updateValue = ($event: Event) => {
    let value = ($event.target as HTMLInputElement).valueAsNumber
    emit('update:modelValue', value)
  }

  watchEffect(() => {
    if (props.required && props.modelValue == null) {
      error.value = `${props.label} is required.`
    } else {
      error.value = null
    }
  })
</script>
  
<style scoped>
  .input-wrapper {
    margin-bottom: 1rem;
  }

  .label {
    display: inline-block;
    margin-bottom: 0.5em;
  }

  .error {
    color: #AD0000;
    font-weight: 700;
  }
</style>