<template>
    <div class="row">
        <div class="col-12 mb-1">
            <label>Event description</label>
            <Popper
                hover="true"
                arrow="true"
                content="Add a description for your event. The description should contain key information for attendees."
            >
                <button>
                    <TooltipIcon />
                </button>
            </Popper>
        </div>
        <div class="col-12">
            <textarea class="w-100" :placeholder="placeholder" :value="modelValue" @input="updateValue($event)" rows="3"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from "vue";
    import TooltipIcon from "./icons/TooltipIcon.vue";

    const props = defineProps({
        label: String,
        name: String,
        modelValue: String,
        placeholder: String,
    });

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

    button {
        border: none;
        margin: 0 0 0 0.25rem;
        padding: 0;
        background-color: inherit;
    }
    button:hover {
        outline: auto;
    }
</style>
