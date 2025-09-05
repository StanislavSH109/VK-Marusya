import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/style.scss'],
  vite: {
    plugins: 
      [
        svgLoader(),
      ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/global/mixins.scss" as *;',
        }
      }
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    'nuxt-svgo'
  ],
})