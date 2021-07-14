<template>
  <section class="w-full h-screen">
    <NoisySphere />
    <h1
      preset="float"
      class="text-5xl md:text-7xl lg-text-9xl transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold absolute text-white dark:text-black"
    >
      Think diffrent.
      <br />Code greater.
    </h1>
  </section>
  <main class="flex flex-col">
    <section class="flex flex-col items-center my-4 z-10">
      <Code lang="json" :code="selfIntroduction" class="h-96 w-80 sm:w-11/12 max-w-7xl" />
    </section>
  </main>
</template>
<script lang='ts'>
import { defineComponent } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Code from "$/Code.vue";
import selfIntroduction from "~/assets/self-introduction.json?raw"
import SplitText from "$/SplitText.vue";
import NoisySphere from "./NoisySphereBackground.vue";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "Home",
  components: {
    Code,
    SplitText,
    NoisySphere,
  },
  setup() {
    return {
      selfIntroduction,
    }
  },
  mounted() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.utils.toArray<HTMLElement>(".parallax").forEach((layer, index, array) => {
      const depth = parseFloat(layer.dataset.depth!)
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, { y: movement, ease: "none" }, 0)
    });
  }
});
</script>
<style scoped>
</style>