<template>
    <section
        id="header"
        class="fixed flex flex-col items-center top-0 w-full bg-gray-100 dark:bg-black bg-opacity-50 dark:bg-opacity-20 backdrop-filter backdrop-blur z-50"
    >
        <header class="w-full flex p-2 sm:p-4 items-center xl:max-w-screen-xl">
            <button
                @click="menuIsShowing = !menuIsShowing"
                class="sm:hidden w-5 h-5 mx-2 rounded opacity-70"
            >⬇</button>
            <Link href="/home" :underline="false" class="text-xl sm:text-2xl">
                <h1>Thy 的博客</h1>
            </Link>
            <ul
                class="absolute sm:relative top-full left-0 bg-gray-100 dark:bg-black sm:bg-transparent bg-opacity-50 dark:bg-opacity-20 sm:bg-opacity-0 sm:dark:bg-opacity-0 backdrop-filter sm:backdrop-filter-none backdrop-blur sm:backdrop-blur-none z-50 flex sm:flex flex-col sm:flex-row text-md sm:text-xl"
                :class="menuIsShowing ? 'hidden' : 'flex'"
            >
                <li class="mx-6 my-2 sm:my-0 sm:mx-2">
                    <Link href="/articles">文章</Link>
                </li>
                <li class="mx-6 my-2 sm:my-0 sm:mx-2">
                    <Link href="/about">关于</Link>
                </li>
            </ul>
        </header>
        <progress :value="progress" max="1" class="w-full xl:max-w-screen-xl h-px"></progress>
    </section>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "$/Link.vue";

gsap.registerPlugin(ScrollTrigger)

export default defineComponent({
    name: "Header",
    components: {
        Link,
    },
    setup() {
        const progress = ref(0)
        const menuIsShowing = ref(false)
        onMounted(() => {
            ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                toggleActions: "restart pause reverse pause",
                onUpdate: (self) => progress.value = self.progress,
            })
        })
        return {
            progress,
            menuIsShowing,
        }
    }
});
</script>
<style scoped>
progress {
    @apply text-transparent bg-white dark:bg-black bg-opacity-30;
}
progress::-webkit-progress-bar {
    @apply bg-white dark:bg-black bg-opacity-30;
}
progress::-moz-progress-bar,
progress::-webkit-progress-value {
    @apply bg-yellow-600 filter invert;
}
</style>