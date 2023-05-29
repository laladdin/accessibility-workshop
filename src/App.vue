<template>
    <header-component />
    <div id="main" role="main" class="container pt-5 pb-5">
        <RouterView></RouterView>
    </div>
    <footer-component />
    <div id="sr-alets" class="sr-only" aria-live="assertive">{{ srText }}</div>
</template>

<script setup lang="ts">
    import HeaderComponent from "./components/HeaderComponent.vue";
    import FooterComponent from "./components/FooterComponent.vue";
    import { RouterView } from "vue-router";
    import { type Ref, ref, provide } from "vue";

    const srText: Ref<string> = ref("");

    function setScreenreaderText(text: string) {
        srText.value = text;
        setTimeout(() => {
            srText.value = "";
        }, 4000);
    }

    provide("setSrText", setScreenreaderText);
</script>
