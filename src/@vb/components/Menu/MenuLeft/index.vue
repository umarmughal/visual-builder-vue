<template>
  <a-layout-sider
    :width="settings.leftMenuWidth"
    :collapsible="settings.isMobileView ? false : true"
    :collapsed="settings.isMenuCollapsed && !settings.isMobileView"
    :class="{
      [$style.menu]: true,
      [$style.white]: settings.menuColor === 'white',
      [$style.gray]: settings.menuColor === 'gray',
      [$style.dark]: settings.menuColor === 'dark',
      [$style.unfixed]: settings.isMenuUnfixed,
      [$style.shadow]: settings.isMenuShadow,
    }"
    @collapse="onCollapse"
  >
    <div
      :class="$style.menuOuter"
      :style="{
        width:
          settings.isMenuCollapsed && !settings.isMobileView
            ? '80px'
            : settings.leftMenuWidth + 'px',
        height:
          settings.isMobileView || settings.isMenuUnfixed
            ? 'calc(100% - 64px)'
            : 'calc(100% - 110px)',
      }"
    >
      <div :class="$style.logoContainer">
        <div :class="$style.logo">
          <img src="resources/images/logo.svg" class="mr-2" alt="Clean UI" />
          <div :class="$style.name">
            {{ settings.logo }}
          </div>
          <div v-if="settings.logo === 'Clean UI Pro'" :class="$style.descr">
            Vue
          </div>
        </div>
      </div>
      <vue-custom-scrollbar
        :style="{
          height:
            settings.isMobileView || settings.isMenuUnfixed
              ? 'calc(100vh - 64px)'
              : 'calc(100vh - 110px)',
        }"
      >
        <a-menu
          v-model:open-keys="openKeys"
          force-sub-menu-render
          :inline-collapsed="
            settings.isMobileView ? false : settings.isMenuCollapsed
          "
          :mode="'inline'"
          :selected-keys="selectedKeys"
          :inline-indent="15"
          :class="$style.navigation"
          @click="handleClick"
          @openChange="handleOpenChange"
        >
          <template v-for="(item, index) in menuData">
            <template v-if="!item.roles || item.roles.includes(user.role)">
              <a-menu-item-group v-if="item.category" :key="index">
                <template #title>
                  {{ item.title }}
                </template>
              </a-menu-item-group>
              <item
                v-if="!item.children && !item.category"
                :key="item.key"
                :menu-info="item"
                :styles="$style"
              />
              <sub-menu
                v-if="item.children"
                :key="item.key"
                :menu-info="item"
                :styles="$style"
              />
            </template>
          </template>
        </a-menu>
        <div :class="$style.banner">
          <p>More components, more style, more themes, and premium support!</p>
          <a
            href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-sm btn-success btn-rounded px-3"
            >Buy Bundle</a
          >
        </div>
      </vue-custom-scrollbar>
    </div>
  </a-layout-sider>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import store from 'store'
import find from 'lodash/find'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { getMenuData } from '@/services/menu'
import SubMenu from './partials/submenu'
import Item from './partials/item'

export default {
  name: 'MenuLeft',
  components: { vueCustomScrollbar, SubMenu, Item },
  data() {
    return {
      menuData: getMenuData,
      selectedKeys: [],
      openKeys: [],
    }
  },
  computed: {
    ...mapState(['settings']),
    ...mapGetters('user', ['user']),
  },
  watch: {
    'settings.isMenuCollapsed'() {
      this.openKeys = []
    },
    '$route'() {
      this.setSelectedKeys()
    },
  },
  mounted() {
    this.openKeys = store.get('app.menu.openedKeys') || []
    this.selectedKeys = store.get('app.menu.selectedKeys') || []
    this.setSelectedKeys()
  },
  methods: {
    onCollapse: function (collapsed, type) {
      const value = !this.settings.isMenuCollapsed
      this.$store.commit('CHANGE_SETTING', { setting: 'isMenuCollapsed', value })
    },
    handleClick(e) {
      if (e.key === 'settings') {
        this.$store.commit('CHANGE_SETTING', { setting: 'isSettingsOpen', value: true })
        return
      }
      store.set('app.menu.selectedKeys', [e.key])
      this.selectedKeys = [e.key]
    },
    handleOpenChange(openKeys) {
      store.set('app.menu.openedKeys', openKeys)
      this.openKeys = openKeys
    },
    setSelectedKeys() {
      const pathname = this.$route.path
      const menuData = this.menuData.concat()
      const flattenItems = (items, key) =>
        items.reduce((flattenedItems, item) => {
          flattenedItems.push(item)
          if (Array.isArray(item[key])) {
            return flattenedItems.concat(flattenItems(item[key], key))
          }
          return flattenedItems
        }, [])
      const selectedItem = find(flattenItems(menuData, 'children'), [
        'url',
        pathname,
      ])
      this.selectedKeys = selectedItem ? [selectedItem.key] : []
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
