<template>
  <styleLoader>
    <localization>
      <router-view />
    </localization>
  </styleLoader>
</template>

<script>
import { mapState } from 'vuex'
import Localization from '@/localization'
import StyleLoader from '@/styleLoader'

export default {
  name: 'App',
  components: { Localization, StyleLoader },
  computed: {
    ...mapState(['settings']),
  },
  watch: {
    // watch page title change
    '$route'(to, from) {
      document.title = `${this.settings.logo} | ${to.meta.title}` || `${this.settings.logo}`
    },
  },
}
</script>