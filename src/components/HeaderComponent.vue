<template>
    <header class="mb-3">
        <a href="#main" id="skiplink" class="skip-nav" @focus="toggleSkipNavVisibility(true)" @blur="toggleSkipNavVisibility(false)">
            Skip to main content
        </a>
        <div class="row pt-4">
            <h2 class="col-12 col-md-5 logo-heading">
                <RouterLink to="/">
                    <img class="logo" src="../assets/fox-icon-with-text.svg" alt="Logo for accessibility training website." />
                </RouterLink>
            </h2>
            <nav class="col-12 col-md-7 main-nav">
                <div class="row">
                    <div class="col-12 col-md-3 router-cell">
                        <RouterLink to="/event-planner">Event Planner</RouterLink>
                    </div>
                    <div class="col-12 col-md-3 router-cell">
                        <RouterLink to="/modal">Modal</RouterLink>
                    </div>
                    <div class="col-12 col-md-3 router-cell">
                        <RouterLink to="/form">Form</RouterLink>
                    </div>
                    <div class="col-12 col-md-3 router-cell">
                        <RouterLink to="/table">Table</RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const showSkipNav = ref(false);

    function toggleSkipNavVisibility(value: boolean) {
        showSkipNav.value = value;
    }
</script>

<style scoped>
    nav div div {
        display: flex;
        justify-content: center;
    }

    .router-cell {
        margin: 0;
        padding: 0;
    }

    .router-cell:nth-child(3) {
        border-radius: 0 5px 5px 0;
    }

    .router-cell:nth-child(1) {
        border-radius: 5px 0 0 5px;
    }

    .router-cell a {
        font-weight: 600;
        text-decoration: none;
        color: #195994;
        border-radius: 7px;
        font-size: 20px;
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .router-cell a:hover,
    .router-cell a:focus,
    .router-cell a.router-link-active:focus {
        background-color: #a2c5ed;
        color: #212529;
    }

    .router-cell a:focus {
        border: 2px solid #212529;
        color: #212529;
    }

    .router-cell a.router-link-active {
        background-color: #a2c5ed;
        color: #212529;
    }

    .router-cell div > .button-link {
        color: blue;
        border: none;
        background-color: inherit;
    }

    .button-link:hover {
        color: blue;
        border: none;
        text-decoration: underline;
        background-color: inherit;
    }

    /* Skip navigation link */
    .skip-nav {
        position: absolute;
        top: -50px;
        left: 10px;
        background-color: #000;
        color: #fff;
        padding: 10px;
    }

    .skip-nav:focus {
        top: 0;
    }

    a.skip-nav:hover {
        background-color: #363636;
        color: #ffb3b3;
    }
</style>
