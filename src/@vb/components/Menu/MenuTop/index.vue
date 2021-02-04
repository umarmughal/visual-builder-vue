<template>
  <div
    :class="{
      [$style.menu]: true,
      [$style.white]: settings.menuColor === 'white',
      [$style.gray]: settings.menuColor === 'gray',
      [$style.dark]: settings.menuColor === 'dark',
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
    <div :class="$style.navigation">
      <a-menu
        :mode="'horizontal'"
        :selected-keys="selectedKeys"
        @click="handleClick"
      >
        <template v-for="item in menuData">
          <template v-if="!item.roles || item.roles.includes(user.role)">
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
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import store from 'store'
import find from 'lodash/find'
import { getMenuData } from '@/services/menu'
import SubMenu from './partials/submenu'
import Item from './partials/item'

export default {
  name: 'MenuTop',
  components: { SubMenu, Item },
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
    this.selectedKeys = store.get('app.menu.selectedKeys') || []
    this.setSelectedKeys()
  },
  methods: {
    handleClick(e) {
      if (e.key === 'settings') {
        this.$store.commit('CHANGE_SETTING', { setting: 'isSettingsOpen', value: true })
        return
      }
      store.set('app.menu.selectedKeys', [e.key])
      this.selectedKeys = [e.key]
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
