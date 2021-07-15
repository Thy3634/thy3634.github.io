<template>
  <component
    :is="isOut ? 'a' : 'router-link'"
    :href="href"
    :to="href"
    class="relative"
    :class="underline ? 'link-underline' : ''"
  >
    <slot></slot>
  </component>
</template>
<script lang='ts'>
import { defineComponent, ref, toRefs } from "vue";
export default defineComponent({
  name: "Link",
  props: {
    href: {
      type: String,
      required: true,
    },
    underline: {
      type: Boolean,
      default: true,
    }
  },
  setup(props) {
    const { href } = toRefs(props)
    const isOut = ref(false)
    if (href.value.startsWith('http')) {
      isOut.value = true
    }
    return {
      isOut
    }
  }
});
</script>
<style scoped>
.link-underline::after {
  content: "";
  @apply absolute bg-current left-0 -bottom-1 h-px w-0 origin-left transition-all duration-500 opacity-0;
}
.link-underline:hover::after {
  @apply w-4/5 opacity-100;
}
</style>