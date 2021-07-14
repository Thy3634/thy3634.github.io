<template>
  <article class="stack-card">
    <header>
      <img
        alt
        :src="img"
        class="rounded-md"
      />
    </header>
    <main></main>
    <footer></footer>
  </article>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "StackCard",
  props: {
    img: {
      type: String,
    }
  }
});
</script>
<style scoped>
article.stack-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: -2rem;
  left: 0;
  margin: -1rem;
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
  background: #1f2229;
  clip-path: inset(2rem 0 2rem 2rem round 10px);
  contain: strict;
  transition: clip-path 0.3s ease 0.1s;
}
article.stack-card:hover::after {
}
</style>