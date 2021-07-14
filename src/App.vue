<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const scheme = ref('dark')
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.scheme === 'dark' || (!('scheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html')!.classList.add('dark')
      scheme.value = 'dark'
    } else {
      document.querySelector('html')!.classList.remove('dark')
      scheme.value = 'light'
    }
    watch(scheme, (v) => {
      if (v == "dark") { document.querySelector('html')!.classList.add('dark') }
      else {
        document.querySelector('html')!.classList.remove('dark')
      }
      localStorage.setItem("scheme", v)
    })
    provide("scheme", scheme)
  }
})
</script>

<style>
body {
  @apply bg-gray-100 dark:bg-gray-800 overflow-x-hidden dark:text-white;
}
#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}
</style>
