<template>
  <div class="form-field">
    <label :for="id" class="label">
      {{ label }}<span v-if="required" class="required">*</span>
    </label>
    <input 
      :id="id"
      class="input-field"
      :value="modelValue"
      @input="updateValue($event)"
      :placeholder="placeholder"
      :required="required"
      :aria-required="required ? 'true' : 'false'"
      :aria-describedby="isErrorVisible && error ? `${id}-error` : undefined"
      :type="type"
    />
    <p v-if="isErrorVisible && error" :id="`${id}-error`" class="error">{{ error }}</p>
  </div></template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref, watch, onMounted, nextTick } from 'vue';

  const props = defineProps({
    id: String,
    label: String,
    modelValue: String,
    placeholder: String,
    required: Boolean,
    error: String,
    isErrorVisible: Boolean,
    type: { type: String, default: 'text' }    
  });

  const emit = defineEmits(['update:modelValue']);

  const updateValue = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };

  const inputElement = ref<HTMLInputElement | null>(null);

  onMounted(() => {
    if (props.id) {
      inputElement.value = document.getElementById(props.id) as HTMLInputElement;
    }    
  });

  watch(() => props.isErrorVisible, (newValue) => {
    if (newValue) {

      nextTick(() => {
        if (inputElement.value) {
          inputElement.value.focus();
        }
      });
    }
});

</script>

<style scoped>
  .required {
    font-weight: 900;
  }

  .error {
    color: #AD0000;
    font-weight: 700;
  }

  .label {
    display: inline-block;
    margin-bottom: 0.5em;
  }
</style>
