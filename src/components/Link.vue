<template>
  <component
    :is="route? 'router-link':'a'"
    :href="href"
    class="relative hover-underline"
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
  },
  setup(props) {
    const { href } = toRefs(props)
    const route = ref(false)
    if (href.value.startsWith('http')) {
      route.value = true
    }
    return {
      route
    }
  }
});
</script>
<style scoped>
.hover-underline::after {
  @apply absolute bg-current -bottom-1 h-px w-4/5 origin-left transition duration-300 scale-x-0 opacity-0;
}
.hover-underline:hover::after {
  @apply scale-x-100 opacity-100;
}
</style>