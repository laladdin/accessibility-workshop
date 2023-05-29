<template>
  <div>
    <h2 class="big-heading">Accessibility Workshop for Developers</h2>
    <h1 class="heading">Let's Learn Accessibility Together</h1>
    <p>
      Welcome to our platform for accessibility training designed specifically for developers. This website is anything but accessible. Can we make it accessible together?
    </p>
    <h4 class="heading">Accessibility Exercises</h4>
    <p>
      The task is to fix accessibility problems. Accessibility issues are hidden in the structure of this site and the components it contains. Everyone can explore a limited area or component on the page and at the end of the workshop we go through the different sections together.
    </p>
    <p>
      The easiest way to observe accessibility deficiencies is to examine the web page and the elements it contains through a web browser. Therefore, it is good to use the browser's DevTools for a closer look at the structure of the elements and, for example, the colors used. For those who don't have much prior programming experience, this can be a good way to get involved in the task.
    </p>
    <p>
      The web application is implemented with Vue 3. Those who are familiar with using Vue or other progressive JavaScript frameworks can, in addition to using a browser, examine the source code and make changes directly to it.
    </p>
    <h1 class="heading">Comprehensive Learning Resources</h1>
    <p>
        Here is a list of resources to support your accessibility journey. The list includes useful websites and tools:
    </p>
    <ul>    
      <li>The website of 
        <a class="outside-link" 
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link1'"
          @mouseout="hovering = ''"
          @focus="focused = 'link1'"
          @blur="focused = ''">   
          Site1
          <img class="outside-link-icon" :src="hovering === 'link1'|| focused === 'link1' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
      </li>
      <li>The website of 
        <a class="outside-link" 
          href="https://webaim.org/"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link2'"
          @mouseout="hovering = ''"
          @focus="focused = 'link2'"
          @blur="focused = ''">   
          WebAIM
          <img class="outside-link-icon" :src="hovering === 'link2'|| focused === 'link2' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
      </li>
      <li>Axe by Deque Systems. More information on 
        <a class="outside-link" 
          href="https://www.deque.com/axe/"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link3'"
          @mouseout="hovering = ''"
          @focus="focused = 'link3'"
          @blur="focused = ''">   
          Axe by Deque Systems website
          <img class="outside-link-icon" :src="hovering === 'link3'|| focused === 'link3' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
      </li>      
      <li>Web Accessibility Evaluation Tools (WAVE) or Lighthouse for Chrome (ARC Toolkit?)</li>
      <li>ARIA (Accessible Rich Internet Applications), more information on 
        <a class="outside-link" 
          href="https://www.w3.org/WAI/standards-guidelines/aria/"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link4'"
          @mouseout="hovering = ''"
          @focus="focused = 'link4'"
          @blur="focused = ''">   
          WAI-ARIA website
          <img class="outside-link-icon" :src="hovering === 'link4'|| focused === 'link4' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
      </li>
      <li>
        <a class="outside-link" 
          href="https://webaim.org/resources/contrastchecker/"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link5'"
          @mouseout="hovering = ''"
          @focus="focused = 'link5'"
          @blur="focused = ''">   
          WebAIM's Color Contrast Checker (website)
          <img class="outside-link-icon" :src="hovering === 'link5'|| focused === 'link5' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
      </li>
      <li>
        <a class="outside-link" 
          href="https://webaim.org/resources/linkcontrastchecker/"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link6'"
          @mouseout="hovering = ''"
          @focus="focused = 'link6'"
          @blur="focused = ''">
          WebAIM's Link Contrast Checker (website)
          <img class="outside-link-icon" :src="hovering === 'link6'|| focused === 'link6' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
      </li>
      <li>NVDA (Windows) or VoiceOver (macOS/iOS)</li>
      <li>Keyboard (only) navigation</li>
    </ul>
    <p>      
      You can find more detailed instructions on the <a class="outside-link" 
          href="https://github.com/laladdin/accessibility-workshop/blob/main/README.md"
          target="_blank" 
          rel="noopener noreferrer"
          @mouseover="hovering = 'link7'"
          @mouseout="hovering = ''"
          @focus="focused = 'link7'"
          @blur="focused = ''">          
          README
          <img class="outside-link-icon" :src="hovering === 'link7' || focused === 'link7' ? iconHover : icon" alt="" aria-hidden="true">
        </a>
    </p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import icon from '../assets/new-tab-icon-176CBB.png';
  import iconHover from '../assets/new-tab-icon-212529.png';

  const hovering = ref('');
  const focused = ref('');
</script>

<style scoped>
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .big-heading {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .outside-link-icon {
    height: 1rem;
    width: 1rem;
    margin-left: 0.2rem;
    margin-top: -0.8rem;
    color: #ffffff;
  }
</style>