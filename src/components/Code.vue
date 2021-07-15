<template>
  <div class="rounded-lg overflow-hidden flex flex-col">
    <ul v-if="bar" class="flex p-4 items-center bg-gray-200 dark:bg-gray-700">
      <li class="bg-red-700 w-4 h-4 mr-2 rounded-full"></li>
      <li class="bg-yellow-700 w-4 h-4 mx-2 rounded-full"></li>
      <li class="bg-green-700 w-4 h-4 ml-2 rounded-full"></li>
      <li
        v-if="typeof bar == 'string'"
        class="w-24 md:w-auto transform -translate-x-10 truncate mx-auto"
      >{{ bar }}</li>
    </ul>
    <div class="overflow-auto">
      <ul
        v-if="line"
        class="float-left flex flex-col items-end px-4 bg-gray-100 dark:bg-gray-800 text-blue-800"
      >
        <li v-for="i in code?.split(/\r\n|\r|\n/).length">{{ i }}</li>
      </ul>
      <Highlight
        :autodetect="lang == 'auto'"
        :language="lang"
        :code="code"
        class="w-full p-2 font-mono bg-white dark:bg-gray-900"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import hljs from 'highlight.js/lib/common';
hljs.vuePlugin
import hljsVuePlugin from "@highlightjs/vue-plugin";


export default defineComponent({
  name: "Code",
  components: {
    Highlight: hljsVuePlugin.component,
  },
  props: {
    lang: {
      type: String,
      default: "auto",
    },
    code: {
      type: String,
      required: false,
    },
    bar: {
      type: [Boolean, String],
      default: false,
    },
    tabs: {
      type: Map,
      default: new Map(),
    },
    line: {
      type: Boolean,
      default: true,
    }
  },
  setup(props) {
    const { code, tabs: temp, line } = toRefs(props);
    const tabs = reactive(temp.value) as Map<any, { line: number, code: string }>
    if (code.value) {
      tabs.set(Symbol("code"), { line: code.value.split(/\r\n|\r|\n/).length, code: code.value })
    }
    return {
      tabs,
    }
  },
});
import "^/github.css"
import "^/github-dark.css"
</script>
<style scoped>
</style>