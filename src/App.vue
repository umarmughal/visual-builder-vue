<template>
  <styleLoader />
  <localization />
</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Localization from '@/localization'
import StyleLoader from '@/styleLoader'

export default {
  name: 'App',
  components: { Localization, StyleLoader },
  setup() {
    const route = useRoute()
    const store = useStore()
    const logo = computed(() => store.getters.settings.logo)
    const routeTitle = computed(() => route.meta.title)

    watch(
      [logo, routeTitle],
      ([logo, routeTitle]) => document.title = `${logo} | ${routeTitle}` || `${logo}`,
    )
  },
}
</script>