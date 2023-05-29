<template>
    <div>
        <div class="decorative-img-container">
            <AnimatedElement />
            <img class="office-img" src="../assets/office.png" alt="" aria-hidden="true" />
        </div>
    </div>
    <div class="footer">
        <div class="footer-decoration-line"></div>
        <div class="footer-content m-3">
            <div class="row">
                <div class="col-sm-12 col-md-4 pt-3">
                    <h2 class="footer-heading">Additional Information</h2>
                    <p>Footer-info</p>
                </div>
                <div class="col-sm-12 col-md-4 pt-3">
                    <h2 class="footer-heading">Our Location</h2>
                    <p>Keilaranta 9, 02150 Espoo</p>
                    <h2 class="footer-heading">Visit Us</h2>
                    <p>
                        <a
                            href="https://www.innofactor.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            @mouseover="hovering = true"
                            @mouseleave="hovering = false"
                        >
                            Visit Innofactor.com
                            <img class="footer-icon" :src="hovering ? iconHover : icon" alt="" aria-hidden="true" />
                            <span class="sr-only">(opens in a new window)</span>
                        </a>
                    </p>
                </div>
                <div class="col-sm-12 col-md-4 pt-3">
                    <h2 class="footer-heading">Further Information</h2>
                    <p>Footer-info</p>
                    <p>Footer-info</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import icon from "../assets/new-tab-icon-FFFFFF.png";
    import iconHover from "../assets/new-tab-icon-B5D2F2.png";
    import AnimatedElement from "./AnimatedElement.vue";

    const hovering = ref(false);
</script>

<style scoped>
    .footer p,
    .footer-heading {
        color: #ffffff;
    }

    .office-img {
        width: 570px;
    }

    .footer-decoration-line {
        position: relative;
    }

    .footer-icon {
        height: 1.4rem;
        width: 1.4rem;
        margin-top: -1rem;
        color: #ffffff;
    }

    .footer a {
        color: #ffffff;
    }

    .footer a:hover {
        color: #b5d2f2;
    }

    .footer-decoration-line::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6.5rem;
        background: radial-gradient(circle at 50% 0, transparent 0%, transparent 75%, #195994 75%, #195994 100%) 0 0,
            radial-gradient(circle at 50% 0, transparent 0%, transparent 75%, #195994 75%, #195994 100%) 50px 0;
        background-size: 100px 100%;
    }

    @media (max-width: 600px) {
        .office-img {
            width: 350px;
        }
    }
</style>
