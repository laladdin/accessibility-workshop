<template>
    <div class="row">
        <div class="col-12 mb-1">
            <label :for="id">Event description</label>
            <button type="button" @click="toggleTooltip()" :aria-expanded="showTooltip" :aria-label="'Show tooltip for event description'">
                <TooltipIcon />
            </button>
        </div>
        <div class="col-12" v-if="showTooltip">
            <span>
                <i>Add a description for your event. The description should contain key information for attendees.</i>
            </span>
        </div>
        <div class="col-12">
            <textarea class="w-100" :placeholder="placeholder" :value="modelValue" @input="updateValue($event)" :id="id" rows="3"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, type Ref, defineProps, defineEmits } from "vue";
    import TooltipIcon from "./icons/TooltipIcon.vue";

    const props = defineProps({
        id: String,
        label: String,
        name: String,
        modelValue: String,
        placeholder: String,
    });

    const showTooltip: Ref<boolean> = ref(false);

    function toggleTooltip(): void {
        showTooltip.value = !showTooltip.value;
    }

    const emit = defineEmits(["update:modelValue"]);

    const updateValue = (event: Event) => {
        emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
    };
</script>

<style scoped>
    .label {
        display: inline-block;
        margin-bottom: 0.5em;
    }
    .error {
        color: #ad0000;
        font-weight: 700;
    }

    button {
        border: none;
        margin: 0 0 0 0.25rem;
        padding: 0;
        background-color: inherit;
    }
    button:hover {
        outline: auto;
        outline-offset: 2px;
    }
</style>
