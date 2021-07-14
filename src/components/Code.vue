<template>
  <div class="rounded-lg overflow-hidden">
    <Highlight
      :autodetect="lang == 'auto'"
      :language="lang"
      :code="code"
      class="hljs overflow-auto w-full h-full font-mono p-4"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
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
      required: true,
    },
  },
  setup(props) {
    const { code } = toRefs(props);
    const lineLen = code.value.split(/\r\n|\r|\n/).length;
  },
});
import "^/github.css"
import "^/github-dark.css"
</script>