import store from 'store'

const STORED_SETTINGS = storedSettings => {
  const settings = {}
  Object.keys(storedSettings).forEach(key => {
    const item = store.get(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

export default {
  state: {
    ...STORED_SETTINGS({
      // Read docs for available values: https://docs.visualbuilder.cloud
      // VB:REPLACE-START:SETTINGS
      authProvider: 'jwt',
      logo: 'Visual Builder',
      version: 'fluent',
      theme: 'default',
      locale: 'en-US',
      isSidebarOpen: false,
      isSupportChatOpen: false,
      isMobileView: false,
      isMobileMenuOpen: false,
      isMenuCollapsed: false,
      isPreselectedOpen: false,
      preselectedVariant: 'default',
      menuLayoutType: 'left',
      routerAnimation: 'slide-fadein-up', // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
      menuColor: 'gray',
      authPagesColor: 'gray',
      isAuthTopbar: true,
      primaryColor: '#4b7cf3',
      leftMenuWidth: 256,
      isMenuUnfixed: false,
      isMenuShadow: false,
      isTopbarFixed: false,
      isTopbarSeparated: false,
      isGrayTopbar: false,
      isContentMaxWidth: false,
      isAppMaxWidth: false,
      isGrayBackground: false,
      isCardShadow: true,
      isSquaredBorders: false,
      isBorderless: false,
      layoutMenu: 'classic',
      layoutTopbar: 'v1',
      layoutBreadcrumbs: 'v1',
      layoutFooter: 'v1',
      flyoutMenuType: 'flyout',
      flyoutMenuColor: 'blue',

      // VB:REPLACE-END:SETTINGS
    }),
  },
  mutations: {
    CHANGE_SETTING(state, payload) {
      window.localStorage.setItem(`app.settings.${payload.setting}`, payload.value)
      state[payload.setting] = payload.value
    },
    SETUP_URL_SETTINGS(state, payload) {
      let queryParams = payload
      let keys = false
      if (payload.redirect) {
        const str = payload.redirect
        const subs = str.substring(str.indexOf('?') + 1)
        if (str.indexOf('?') >= 0) {
          queryParams = JSON.parse('{"' + decodeURI(subs).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        }
      }
      delete queryParams.redirect
      keys = Object.keys(queryParams)
      if (keys.length) {
        keys.forEach(key => {
          let value
          switch (queryParams[key]) {
            case 'false':
              value = false
              break
            case 'true':
              value = true
              break
            default:
              value = queryParams[key]
              break
          }
          if (key in state) { state[key] = value }
        })
      }
    },
    SET_PRIMARY_COLOR(state, payload) {
      const { color } = payload
      const addStyles = () => {
        const styleElement = document.querySelector('#primaryColor')
        if (styleElement) {
          styleElement.remove()
        }
        const body = document.querySelector('body')
        const styleEl = document.createElement('style')
        const css = document.createTextNode(`:root { --vb-color-primary: ${color};}`)
        styleEl.setAttribute('id', 'primaryColor')
        styleEl.appendChild(css)
        body.appendChild(styleEl)
      }
      addStyles()
      state.primaryColor = color
      store.set('app.settings.primaryColor', color)
    },
    SET_THEME(state, payload) {
      const { theme } = payload
      const nextTheme = theme === 'dark' ? 'dark' : 'default'
      document.querySelector('html').setAttribute('data-vb-theme', nextTheme)
      state.theme = nextTheme
      store.set('app.settings.theme', nextTheme)
    },
  },
  actions: {},
  getters: {
    settings: state => state,
  },
}
