// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: { dir: 'rtl', lang: 'fa' },
        },
    },
    build: {
        transpile: ['@headlessui/vue']
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
