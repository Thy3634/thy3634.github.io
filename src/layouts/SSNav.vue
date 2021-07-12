<template>
  <nav class="w-full h-auto">
    <div id="nav">
      <slot name="nav" />
    </div>
  </nav>
  <slot name="default" />
</template>
<script lang='ts'>
import { defineComponent, toRefs } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "SSNav",
  props: {
    maxHeight: {
      type: String,
      default: "4rem",
    },
    minHeight: {
      type: String,
      default: "1rem",
    }
  },
  setup(props) {
    const { minHeight, maxHeight } = toRefs(props)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav",
        start: "top top",
        end: `${minHeight.value} bottom`,
        markers: true,
        scrub: 0.3,
      },
    })
    tl.fromTo("#nav", {
      height: maxHeight.value
    }, {
      height: minHeight.value
    })
  }
});
</script>
<style scoped>
</style>