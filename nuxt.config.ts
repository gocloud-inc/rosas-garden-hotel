// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Rosas Garden Hotel',
      meta: [
        {
          name: 'description',
          content: 'A hotel that is proud to be able to quench the desires of all types of people, it makes the ideal escape for both the business travelers and leisure guests alike.'
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
          integrity: 'sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9',
          crossorigin: 'anonymous'
        }
      ],
    }
  },
  css: [
    'assets/scss/app.scss',
  ],
  plugins: [
    {
      src: 'plugins/aos',
      ssr: false,
      mode: 'client',
    },
    {
      src: 'plugins/global',
      ssr: false,
      mode: 'client',
    }
  ],
  modules: ['nuxt-swiper']
})
