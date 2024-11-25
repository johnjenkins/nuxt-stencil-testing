import { defineCustomElements } from 'stencil-components/loader';
  
export default defineNuxtPlugin({
  name: 'setup-stencil-components',
  enforce: 'pre',
  async setup () { defineCustomElements() },
  env: { islands: false },
})