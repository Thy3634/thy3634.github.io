<template>
  <Highlight
    :autodetect="lang == 'auto'"
    :language="lang"
    :code="code"
    class="rounded-md"
  />
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import hljs from 'highlight.js/lib/common';
hljs.vuePlugin
import hljsVuePlugin from "@highlightjs/vue-plugin";


// import "highlight.js/styles/github.css"
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
</script>
<style scope>
code.hljs {
  @apply text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900;
}

span.hljs-doctag,
span.hljs-keyword,
span.hljs-meta .hljs-keyword,
span.hljs-template-tag,
span.hljs-template-variable,
span.hljs-type,
span.hljs-variable.language_ {
  /* prettylights-syntax-keyword */
  @apply text-red-500 dark:text-red-400;
}

span.hljs-title,
span.hljs-title.class_,
span.hljs-title.class_.inherited__,
span.hljs-title.function_ {
  /* prettylights-syntax-entity */
  @apply text-purple-600 dark:text-purple-400;
}

span.hljs-attr,
span.hljs-attribute,
span.hljs-literal,
span.hljs-meta,
span.hljs-number,
span.hljs-operator,
span.hljs-variable,
span.hljs-selector-attr,
span.hljs-selector-class,
span.hljs-selector-id {
  /* prettylights-syntax-constant */
  @apply text-blue-600 dark:text-blue-300;
}

span.hljs-regexp,
span.hljs-string,
span.hljs-meta .hljs-string {
  /* prettylights-syntax-string */
  @apply text-indigo-900 dark:text-indigo-300;
}

span.hljs-built_in,
span.hljs-symbol {
  /* prettylights-syntax-variable */
  @apply text-yellow-600 dark:text-yellow-500;
}

span.hljs-comment,
span.hljs-code,
span.hljs-formula {
  /* prettylights-syntax-comment */
  @apply text-gray-500 dark:text-gray-400;
}

span.hljs-name,
span.hljs-quote,
span.hljs-selector-tag,
span.hljs-selector-pseudo {
  /* prettylights-syntax-entity-tag */
  @apply text-green-700 dark:text-green-300;
}

span.hljs-subst {
  /* prettylights-syntax-storage-modifier-import */
  @apply text-gray-800 dark:text-gray-300;
}

span.hljs-section {
  /* prettylights-syntax-markup-heading */
  @apply text-blue-700 dark:text-blue-600 font-bold;
}

span.hljs-bullet {
  /* prettylights-syntax-markup-list */
  @apply text-yellow-300 dark:text-yellow-700;
}

span.hljs-emphasis {
  /* prettylights-syntax-markup-italic */
  @apply text-gray-700 dark:text-gray-300 font-italic;
}
</style>
