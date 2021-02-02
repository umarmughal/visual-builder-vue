<template>
  <div id="app">
    <styleLoader>
      <localization></localization>
    </styleLoader>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Localization from '@/localization'
import StyleLoader from '@/styleLoader'

export default {
  name: 'app',
  components: { Localization, StyleLoader },
  computed: {
    ...mapState(['settings']),
    ...mapState('user', ['authorized']),
    nextRoute() {
      return this.$route.query.redirect || '/'
    },
    currentRoute() {
      return this.$route.path
    },
  },
  mounted() {
    this.$store.dispatch('user/LOAD_CURRENT_ACCOUNT')
    this.$store.commit('SET_PRIMARY_COLOR', { color: this.settings.primaryColor })
    this.$store.commit('SET_THEME', { theme: this.settings.theme })
  },
  watch: {
    '$store.state.settings.theme'(theme) {
      this.$store.commit('SET_THEME', { theme })
    },
    authorized(authorized) {
      if (authorized && this.currentRoute === '/auth/login') {
        this.$router.replace(this.nextRoute)
      }
    },
    '$route'(to, from) {
      const query = Object.assign({}, to.query)
      this.$store.commit('SETUP_URL_SETTINGS', query)
    },
  },
}
</script>
