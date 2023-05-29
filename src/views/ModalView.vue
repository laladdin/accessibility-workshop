<template>
    <h1 class="text-center">Modalism</h1>
    <div class="d-flex justify-content-center mt-5">
        <button ref="openModalButton" @click="openModal">Open modal</button>
    </div>
    <MyModal :isVisible="isModalVisible" @update:isVisible="handleCloseModal" title="My Title" description="My Description" />
</template>

<script setup lang="ts">
    import MyModal from "../components/Modal.vue";
    import { ref } from "vue";

    const openModalButton = ref<HTMLButtonElement | null>(null);
    const isModalVisible = ref(false);

    const handleCloseModal = (event: any) => {
        isModalVisible.value = event;
    };

    const openModal = () => {
        isModalVisible.value = true;
    };
</script>

<style scoped>
    div {
        /* border: 1px solid grey; */
        border-radius: 4px;
    }

    button {
        background-color: #0066cc;
        color: #ffffff;
        border: none;
        padding: 5px 10px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
</style>
