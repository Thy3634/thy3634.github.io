<template>
  <main class="h-screen w-screen">
  </main>
</template>
<script lang='ts'>
import { defineComponent, toRefs } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "Tabs",
  props: {
    progress: {
      type: Number,
      default: 0,
    }
  },
  emits: ['update:progress'],
  setup(props, { emit }) {
    const { progress } = toRefs(props)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        horizontal: true,
        toggleActions: "restart pause resume pause",
        onUpdate: self => emit("update:progress", self.progress)
      }
    })
    gsap.utils.toArray("section")
  }
});
</script>
<style scoped>
main {
  scroll-snap-type: x proximity;
  display: flex;
  flex-direction: row;
}
main:nth-child(n) {
  display: flexbox;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>