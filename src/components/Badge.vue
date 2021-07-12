<template>
  <div
    class="px-4 h-6 rounded-full text-xs font-semibold flex items-center cursor-pointer truncate"
    :class="`bg-${color}-100 text-${color}-700 hover:bg-${color}-500 hover:text-white`"
  >
    <span
      v-if="dot"
      class="w-2 h-2 rounded-full mr-1"
      :class="`bg-${color}-400`"
    ></span>
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Badge",
  props: {
    color: {
      type: String,
      required: true,
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
