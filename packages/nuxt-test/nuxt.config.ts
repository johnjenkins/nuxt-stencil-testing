// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vue: {
    compilerOptions: {  
      isCustomElement: tag => tag.startsWith('my-'),
      comments: true,
    },
  }
})
