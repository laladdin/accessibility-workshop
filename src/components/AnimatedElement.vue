<template>
    <div class="flag">
        <img id="animatedImg" alt="" src="../assets/accessibility-flag.png" :class="{'wave': animate}" @click="toggleAnimation" />
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
    #animatedImg {
        width: 170px;
        height: 170px;
        z-index: 200;
        position: relative;
        margin-left: 93px;
        margin-bottom: -140px;
    }

    .flag img.wave {
        /* The animation property applies the waving animation, adjusting the duration, easing function, and iteration count as necessary */
        animation: waving 1s linear infinite;
        /* The transform-origin property changes the point around which the image is transformed */
        transform-origin: left;
    }

    @keyframes waving {
        0% { transform: skewY(0); }
        25% { transform: skewY(15deg); }
        75% { transform: skewY(-15deg); }
        100% { transform: skewY(0); }
    }

    @media (max-width: 600px) {
        #animatedImg {
            width: 120px;
            height: 120px;
            z-index: 200;
            position: relative;
            margin-left: 57px;
            margin-bottom: -100px;
        }
    }
</style>
  