<template>
    <div>
        <div id="animatedBox" :class="{'my-image': animate}" @click="toggleAnimation"></div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue';
    
    const animate = ref(true); // Animation state.
    
    // Toggle animation.
    const toggleAnimation = () => {
        animate.value = !animate.value;
    };
</script>
  
<style scoped>
    #animatedBox {
        width: 100px;
        height: 100px;
        background-color: red;
        transition: transform 2s linear;
    }
  
    @keyframes wave {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(50px);
        }
        100% {
            transform: translateX(0);
        }
    }

    .my-image {
        animation: wave 2s infinite linear;
    }

    @media (prefers-reduced-motion: reduce) {
        .my-image {
            animation: none;
        }
    }
</style>
  