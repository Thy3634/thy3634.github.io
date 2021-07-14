// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

declare module '@highlightjs/vue-plugin';
declare module 'perlin' {
  namespace noise {
    function perlin2(x: number, y: number): number
    function perlin3(x: number, y: number, z: number): number
    function seed(seed: number): void
    function simplex2(xin: number, yin: number): number
    function simplex3(xin: number, yin: number, zin: number): number
  }
}

declare module 'troisjs/src/components/noisy/NoisySphere.js'