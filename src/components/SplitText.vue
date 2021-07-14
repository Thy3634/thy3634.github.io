<template>
  <div :id="id">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// typical import
import gsap from "gsap";
import SplitText from "gsap/SplitText";
// register plugins
gsap.registerPlugin(SplitText);

type Foreach = (el: Element, index: number, array: Element[]) => void
export default defineComponent({
  name: "SplitText",
  props: {
    preset: {
      type: String,
      required: false,
    },
    /**
     * @type SplitText.Vars
     */
    splitVars: {
      type: Object,
      required: false,
    },
    /**
     * @type gsap.TweenVars
     */
    tweenVars: {
      type: Object,
      required: false,
    },
    /**
     * gsap.Position
     */
    position: {
      type: String,
      required: false,
    },
    /**
     * @type Foreach
     */
    each: {
      type: Function,
      required: false,
    },
    id: {
      type: String,
      default: "split-text",
    },
  },
  mounted() {
    const tl = gsap.timeline()
    let splitVars: SplitText.Vars | undefined = this.splitVars
    let tweenVars: gsap.TweenVars | undefined = this.tweenVars
    let position: gsap.Position | undefined = this.position
    let each: Foreach | undefined = this.each as Foreach
    // 预设样式
    switch (this.preset) {
      case "float":
        if (!splitVars) {
          splitVars = { type: "lines, words", linesClass: "split-line overflow-y-hidden leading-relaxed", wordsClass: "split-word", charsClass: "split-char" }
        }
        if (!tweenVars) {
          tweenVars = {
            top: "1em",
            ease: "none",
            duration: 0.5,
          }
        }
        if (!position) {
          position = "-=0.2"
        }
        each = function(el, index, array) {
          tl.from(el, tweenVars!, position)
        }
        break
      case "roll":
        gsap.set(`#${this.id}`, { perspective: 400 })
        if (!splitVars) {
          splitVars = { type: "words, chars", linesClass: "split-line", wordsClass: "split-word", charsClass: "split-char" }
        }
        if (!tweenVars) {
          tweenVars = {
            duration: 0.8,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01,
          }
        }
        if (!position) {
          position = "+=0"
        }
        break
      case "nail":
        if (!splitVars) {
          splitVars = { type: "chars", linesClass: "split-line", wordsClass: "split-word", charsClass: "split-char" }
        }
        if (!tweenVars) {
          tweenVars = { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 }
        }
        if (!position) {
          position = 0.5
        }
        break
      case "scale":
        each = function(el, index, array) {
          tl.from(el, { duration: 0.6, opacity: 0, force3D: true }, index * 0.01);
          tl.from(el, { duration: 0.6, scale: index % 2 == 0 ? 0 : 2 }, index * 0.01);
        }
        break
    }
    let splitText = new SplitText(`#${this.id}`, splitVars)
    let targets: Element[]
    // 逐个动画
    if (splitVars?.type?.includes("chars")) {
      targets = splitText!.chars
    } else if (splitVars?.type?.includes("words")) {
      targets = splitText!.words
    } else if (splitVars?.type?.includes("lines")) {
      targets = splitText!.lines
    } else {
      console.error("splitVars.type error.");
      return
    }
    if (each) {
      targets!.forEach(each)
    } else {
      tl.from(targets!, tweenVars!, position)
    }
  },
})
</script>
<style scoped>
</style>