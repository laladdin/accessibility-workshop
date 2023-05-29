<template>
    <transition name="modal">
        <div v-show="isVisible" class="modal-backdrop">
            <div class="modal-content" role="dialog" aria-modal="true" :aria-labelledby="titleId" :aria-describedby="descriptionId" @click.stop>
                <button ref="closeButton" @click="closeModal" @keydown.enter.prevent>
                    Close
                </button>
                <slot name="title">
                    <h4 :id="titleId">{{ title }}</h4>
                </slot>
                <slot name="description">
                    <p :id="descriptionId">{{ description }}</p>
                    <p>
                        Vue.js is a progressive JavaScript framework that is used to build user interfaces. Unlike other monolithic frameworks, Vue is
                        designed from the ground up to be incrementally adoptable.
                    </p>
                    <p>
                        Accessibility (often abbreviated to A11Y, where the number 11 represents the eleven letters omitted) in Web development means
                        enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way.
                    </p>
                </slot>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits, onMounted, onUnmounted, ref, watchEffect, nextTick } from "vue";

    const props = defineProps({
        isVisible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        titleId: {
            type: String,
            default: "modal-title",
        },
        descriptionId: {
            type: String,
            default: "modal-description",
        },
    });

    const emit = defineEmits(["update:isVisible"]);
    const closeButton = ref<HTMLButtonElement | null>(null);

    const closeModal = () => {
        emit("update:isVisible", false);
    };

    watchEffect(() => {
        if (props.isVisible) {
            nextTick(() => {
                closeButton.value?.focus();
            });
        }
    });
</script>

<style scoped>
    .modal-backdrop {
        z-index: 1000;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .modal-content {
        height: 70%;
        width: 60%;
        background-color: #00D67D;
        z-index: 1001;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .close-btn {
        align-self: flex-end;
    }

    button:focus {
        outline: 2px solid #005fcc; /* Change the color to your preference */
        outline-offset: 2px;
    }
</style>
