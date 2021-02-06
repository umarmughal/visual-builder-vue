<template>
  <a-dropdown :trigger="['click']" placement="bottomRight">
    <div :class="$style.dropdown">
      <div :class="$style.flag">
        <img :src="mapFlags[language]" :alt="language" />
        <span class="text-uppercase">{{ language }}</span>
      </div>
    </div>
    <template #overlay>
      <a-menu @click="selectLocale">
        <a-menu-item key="en-US">
          <span :class="$style.menuIcon">
            <img :src="mapFlags.en" alt="English" />
          </span>
          English
        </a-menu-item>
        <a-menu-item key="fr-FR">
          <span :class="$style.menuIcon">
            <img :src="mapFlags.ru" alt="French" />
          </span>
          French
        </a-menu-item>
        <a-menu-item key="ru-RU">
          <span :class="$style.menuIcon">
            <img :src="mapFlags.fr" alt="Русский" />
          </span>
          Русский
        </a-menu-item>
        <a-menu-item key="zh-CN">
          <span :class="$style.menuIcon">
            <img :src="mapFlags.zh" alt="简体中文" />
          </span>
          简体中文
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      mapFlags: {
        en: '/resources/flags/en.svg',
        ru: '/resources/flags/ru.svg',
        fr: '/resources/flags/fr.svg',
        zh: '/resources/flags/zh.svg',
      },
    }
  },
  computed: {
    ...mapState(['settings']),
    language() {
      return this.settings.locale.substr(0, 2)
    },
  },
  methods: {
    selectLocale(item) {
      const setting = 'locale'
      this.$store.commit('CHANGE_SETTING', { setting, value: item.key })
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
