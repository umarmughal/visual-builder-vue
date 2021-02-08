<template>
  <a-layout-sider :width="'auto'">
    <transition-group name="air__menuFlyout__animation" :duration="1">
      <template v-for="(item, index) in renderedFlyoutItems" :key="index">
        <div
          :style="{
            left: `${
              item.itemDimensions.left + item.itemDimensions.width - 10
            }px`,
            top: `${item.itemDimensions.top}px`,
          }"
          :class="{
            [$style.air__menuFlyout]: true,
            [$style.air__menuFlyoutLeft]: settings.menuLayoutType === 'left',
            [$style.air__menuFlyout__black]:
              settings.flyoutMenuColor === 'dark',
            [$style.air__menuFlyout__white]:
              settings.flyoutMenuColor === 'white',
            [$style.air__menuFlyout__gray]: settings.flyoutMenuColor === 'gray',
          }"
        >
          <ul
            :class="$style.air__menuLeft__list"
            @mouseenter="handleFlyoutContainerOver(item.key)"
            @mouseleave="handleFlyoutOut(item.key)"
          >
            <template
              v-for="(menuItem, menuItemIndex) in item.items"
              :key="menuItemIndex"
            >
              <item
                :item="menuItem"
                :styles="$style"
                :active-item="activeItem"
              />
            </template>
          </ul>
        </div>
      </template>
    </transition-group>
    <div
      :class="{
        [$style.air__menuLeft]: true,
        [$style.air__menuLeft__mobileToggled]: settings.isMobileMenuOpen,
        [$style.air__menuLeft__toggled]: settings.isMenuCollapsed,
        [$style.air__menuLeft__unfixed]: settings.isMenuUnfixed,
        [$style.air__menuLeft__shadow]: settings.isMenuShadow,
        [$style.air__menuLeft__flyout]: settings.flyoutMenuType === 'flyout',
        [$style.air__menuLeft__compact]: settings.flyoutMenuType === 'compact',
        [$style.air__menuLeft__blue]: settings.menuColor === 'blue',
        [$style.air__menuLeft__white]: settings.menuColor === 'white',
        [$style.air__menuLeft__gray]: settings.menuColor === 'gray',
        [$style.air__menuFlyout__black]:
          settings.flyoutMenuColor === 'dark' &&
          settings.flyoutMenuType !== 'default',
        [$style.air__menuFlyout__white]:
          settings.flyoutMenuColor === 'white' &&
          settings.flyoutMenuType !== 'default',
        [$style.air__menuFlyout__gray]:
          settings.flyoutMenuColor === 'gray' &&
          settings.flyoutMenuType !== 'default',
      }"
    >
      <div :class="$style.air__menuLeft__outer">
        <a
          href="javascript: void(0);"
          :class="$style.air__menuLeft__mobileToggleButton"
          @click="toggleMobileMenu"
        >
          <span />
        </a>
        <a
          href="javascript: void(0);"
          :class="$style.air__menuLeft__toggleButton"
          @click="toggleMenu"
        >
          <span />
          <span />
        </a>
        <div :class="$style.air__menuLeft__logo">
          <div :class="$style.air__menuLeft__logo__letter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              version="1.1"
              height="24px"
              width="24px"
            >
              <g>
                <path
                  fill="#4b7cf3"
                  strokeWidth="1"
                  stroke="#4b7cf3"
                  d="M12,10.9c-0.1,0-0.2,0-0.2-0.1L3.5,6.1C3.4,6,3.3,5.8,3.3,5.6c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4S20.6,6,20.5,6.1l-8.2,4.7C12.2,10.8,12.1,10.9,12,10.9z M4.8,5.6L12,9.8l7.2-4.2L12,1.5      L4.8,5.6z"
                />
                <path
                  fill="#4b7cf3"
                  strokeWidth="1"
                  stroke="#4b7cf3"
                  d="M13.6,23.6c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.2-0.4v-9.5c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.3,0.4l-8.2,4.7C13.8,23.6,13.7,23.6,13.6,23.6z M14.1,13.9v8.3l7.2-4.2V9.8      L14.1,13.9z"
                />
                <path
                  fill="#4b7cf3"
                  strokeWidth="1"
                  stroke="#4b7cf3"
                  d="M10.4,23.6c-0.1,0-0.2,0-0.2-0.1l-8.2-4.7c-0.2-0.1-0.3-0.3-0.3-0.4V8.9c0-0.2,0.1-0.3,0.2-0.4c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.2,0.4C10.5,23.6,10.5,23.6,10.4,23.6z M2.7,18.1l7.2,4.2v-8.3L2.7,9.8      V18.1z"
                />
              </g>
            </svg>
          </div>
          <div :class="$style.air__menuLeft__logo__name">
            {{ settings.logo }}
          </div>
          <div :class="$style.air__menuLeft__logo__descr">
            {{ settings.version }}
          </div>
        </div>
        <a href="javascript: void(0);" :class="$style.air__menuLeft__user">
          <div :class="$style.air__menuLeft__user__avatar">
            <img
              src="resources/images/avatars/avatar.png"
              alt="David Beckham"
            />
          </div>
          <div :class="$style.air__menuLeft__user__name">David Beckham</div>
          <div :class="$style.air__menuLeft__user__role">Administrator</div>
        </a>
        <div :class="$style.air__menuLeft__scroll">
          <div :class="$style.air__menuLeft__container">
            <ul :class="$style.air__menuLeft__list">
              <template v-for="(item, index) in menuData">
                <item
                  v-if="!item.children && !item.category"
                  :key="index"
                  :item="item"
                  :styles="$style"
                  :active-item="activeItem"
                />
                <sub-menu
                  v-if="item.children"
                  :key="index"
                  :item="item"
                  :styles="$style"
                  :active-item="activeItem"
                  :active-submenu="activeSubmenu"
                  :handle-submenu-click="handleSubmenuClick"
                  :handle-flyout-over="handleFlyoutOver"
                  :handle-flyout-out="handleFlyoutOut"
                />
                <category
                  v-if="item.category"
                  :key="index"
                  :item="item"
                  :styles="$style"
                />
              </template>
            </ul>
            <div :class="$style.air__menuLeft__banner">
              <p>
                More components, more styles, more themes, and premium support!
              </p>
              <a
                href="https://themeforest.net/item/air-ui-multi-concept-admin-template/24434456"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-white text-center d-block"
                >Buy Air UI</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="javascript: void(0);"
      :class="$style.air__menuLeft__backdrop"
      @click="toggleMobileMenu"
    />
  </a-layout-sider>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import { getMenuData } from '@/services/menu'
import SubMenu from './partials/submenu'
import Item from './partials/item'
import Category from './partials/category'

export default {
  name: 'MenuLeft',
  components: { SubMenu, Item, Category },
  data() {
    return {
      menuData: getMenuData,
      activeSubmenu: '',
      activeItem: '',
      renderedFlyoutItems: {},
      flyoutTimers: {},
    }
  },
  computed: {
    ...mapState(['settings']),
    flyoutActive() {
      return (this.settings.flyoutMenuType === 'flyout' || this.settings.flyoutMenuType === 'compact' || this.settings.isMenuCollapsed) && !this.settings.isMobileView
    },
  },
  watch: {
    '$route'() {
      this.setActiveItems()
    },
  },
  mounted() {
    this.setActiveItems()
  },
  methods: {
    toggleMobileMenu() {
      const setting = 'isMobileMenuOpen'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    toggleMenu() {
      const setting = 'isMenuCollapsed'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    toggleSettings() {
      const setting = 'isSidebarOpen'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    handleSubmenuClick(key) {
      const currentKey = this.activeSubmenu
      if (this.flyoutActive) {
        return
      }
      this.activeSubmenu = currentKey === key ? '' : key
    },
    setActiveItems() {
      const menuData = this.menuData
      const pathname = this.$route.path

      const flattenItems = (items, key) =>
        items.reduce((flattenedItems, item) => {
          flattenedItems.push(item)
          if (Array.isArray(item[key])) {
            return flattenedItems.concat(flattenItems(item[key], key))
          }
          return flattenedItems
        }, [])
      const activeItem = _.find(flattenItems(menuData, 'children'), ['url', pathname]) || {}
      const activeSubmenu = menuData.reduce((key, parent) => {
        if (Array.isArray(parent.children)) {
          parent.children.map(child => {
            if (child.key === activeItem.key) {
              key = parent
            }
            return ''
          })
        }
        return key
      })

      this.activeItem = activeItem.key
      this.activeSubmenu = activeSubmenu.key
    },
    handleFlyoutOver(event, key, items) {
      if (this.flyoutActive) {
        clearInterval(this.flyoutTimers[key])
        const item = event.currentTarget
        const itemDimensions = item.getBoundingClientRect()
        this.renderedFlyoutItems = {
          ...this.renderedFlyoutItems,
          [key]: {
            key,
            itemDimensions,
            items,
          },
        }
      }
    },
    handleFlyoutOut(key) {
      if (this.flyoutActive) {
        this.flyoutTimers[key] = setTimeout(() => {
          const updatedFlyoutItems = Object.assign({}, this.renderedFlyoutItems)
          delete updatedFlyoutItems[key]
          this.renderedFlyoutItems = {
            ...updatedFlyoutItems,
          }
        }, 100)
      }
    },
    handleFlyoutContainerOver(key) {
      clearInterval(this.flyoutTimers[key])
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
