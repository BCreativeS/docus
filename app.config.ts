export default defineAppConfig({
  docus: {
    title: 'Strictly Green',
    description: 'The best place to find everything GREEN',
    image: '/cover.png',

    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: true,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'Strictly Green'
    },

    footer: {
      credits: {
        icon: '',
        text: 'Powered by Docus with a touch of Homegrown',
        href: 'https://homegrown619.com'
      }
    }
  },

  nuxtIcon: {
    aliases: {
      'key-102': ''
    }
  }
})