<template>
  <Renderer ref="renderer" antialias resize>
    <Camera ref="camera" :aspect="width / height" :position="{ x: 10, y: 0, z: 30 }" />
    <Scene :background="color.background">
      <HemisphereLight
        :color="color.sky"
        :groundColor="color.ground"
        :position="{ x: 0, y: 1, z: 0 }"
        :intensity="0.6"
      ></HemisphereLight>
      <DirectionalLight :color="color.light" :intensity="0.4" :position="{ x: 10, y: 0, z: 10 }"></DirectionalLight>
      <DirectionalLight :color="color.light" :intensity="0.4" :position="{ x: 10, y: 0, z: -10 }"></DirectionalLight>
      <NoisySphere :radius="10" :time-coef="0.0001" :noise-coef="0.1" :disp-coef="2">
        <PhongMaterial
          :props="{
            emissive: color.material,
            emissiveIntensity: 0.4,
            shininess: 0
          }"
        />
      </NoisySphere>
    </Scene>
  </Renderer>
</template>
<script lang="ts">
import { computed, defineComponent, inject, onMounted, reactive, Ref, ref, } from "vue"

import { Renderer, Camera, Scene, HemisphereLight, DirectionalLight, Icosahedron, PhongMaterial, RendererPublicInterface, MeshPublicInterface, MaterialPublicInterface } from "troisjs"
import NoisySphere from "troisjs/src/components/noisy/NoisySphere.js";

export default defineComponent({
  name: "NoisySphereBackground",
  components: {
    Renderer,
    Camera,
    Scene,
    HemisphereLight,
    DirectionalLight,
    Icosahedron,
    PhongMaterial,
    NoisySphere,
  },
  inject: ["scheme"],
  setup() {
    const renderer = ref(null as unknown as RendererPublicInterface)
    const camera = ref(null as any)
    const width = ref(0)
    const height = ref(0)
    const scheme: Ref<string> = inject("scheme")!
    const color = reactive({
      sky: "#00dbde",
      background: "#da22ff",
      material: "#fc00ff",
      ground: "#db36a4",
      light: "#00dbde",
    })
    const setColor = () => {
      if (scheme.value == "dark") {
        color.sky = "#00dbde"
        color.background = "#cc99ff"
        color.material = "#da22ff"
        color.ground = "#fc00ff"
        color.light = "#00dbde"
      } else {
        color.sky = "#ffffff"
        color.background = "#A9E7DA"
        color.material = "#23f660"
        color.ground = "#134E5E"
        color.light = "#590d82"
      }
    }
    setColor()
    computed(setColor)
    onMounted(() => {
      const canvas = renderer.value.canvas
      width.value = canvas.width
      height.value = canvas.height
      addEventListener("resize", () => {
        width.value = canvas.width
        height.value = canvas.height
      })
    })

    return {
      renderer,
      camera,
      width,
      height,
      color,
    }
  },
});
</script>
<style scoped>
</style>