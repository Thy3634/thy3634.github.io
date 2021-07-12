<template>
  <div id='hero'>
    <div
      class='layer-bg layer parallax'
      data-depth='0.10'
    ></div>
    <div
      class='layer-1 layer parallax'
      data-depth='0.20'
    ></div>
    <div
      class='layer-2 layer parallax'
      data-depth='0.50'
    ></div>
    <div
      class='layer-3 layer parallax'
      data-depth='0.80'
    ></div>
    <div
      class='layer-overlay layer parallax'
      data-depth='0.85'
    ></div>
    <div
      class='layer-4 layer parallax'
      data-depth='1.00'
    ></div>
  </div>
  <main>
    <Code
      lang="auto"
      code="console.log('Hello world\n')"
    />
    <Code
      lang="javascript"
      code="console.log('Hello world\n')"
    />
    <Code
      lang="javascript"
      code="console.log('Hello world\n')"
    />
  </main>
</template>
<script lang='ts'>
import { defineComponent } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Code from "$/Code.vue";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "Home",
  components: {
    Code,
  },
  setup() {

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
#hero {
  height: 800px;
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
}
.layer {
  background-position: bottom center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
  position: fixed;
  z-index: -1;
}
#hero,
.layer {
  min-height: 800px;
}

main {
  background-color: #130d0a;
}

.layer-bg {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg");
}
.layer-1 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png");
  background-position: left bottom;
}
.layer-2 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png");
}
.layer-3 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png");
  background-position: right bottom;
}
.layer-4 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png");
}
.layer-overlay {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png");
}

@media only screen and (max-width: 768px) {
  .layer-1 {
    background-position: 26% bottom;
  }
  .layer-3 {
    background-position: 35% bottom;
  }
}
</style>