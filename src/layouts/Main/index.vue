<template>
  <div
    :class="{
      vb__layout__grayBackground: settings.isGrayBackground,
    }"
  >
    <a-layout
      :class="{
        vb__layout: true,
        vb__layout__contentMaxWidth: settings.isContentMaxWidth,
        vb__layout__appMaxWidth: settings.isAppMaxWidth,
        vb__layout__squaredBorders: settings.isSquaredBorders,
        vb__layout__cardsShadow: settings.isCardShadow,
        vb__layout__borderless: settings.isBorderless,
      }"
    >
      <vb-sidebar />
      <!-- <vb-support-chat /> -->

      <!-- left menu -->
      <!-- <vb-menu-left
        v-if="settings.menuLayoutType === 'left' && !settings.isMobileView"
      /> -->

      <!-- left menu mobile -->
      <!-- <div v-if="settings.isMobileView">
        <div :class="$style.handler" @click="toggleMobileMenu">
          <div :class="$style.handlerIcon" />
        </div>
        <a-drawer
          :closable="false"
          :visible="settings.isMobileMenuOpen"
          placement="left"
          :wrap-class-name="$style.mobileMenu"
          @close="toggleMobileMenu"
        >
          <vb-menu-left />
        </a-drawer>
      </div> -->

      <!-- top menu -->
      <!-- <vb-menu-top
        v-if="settings.menuLayoutType === 'top' && !settings.isMobileView"
      /> -->

      <a-layout>
        <a-layout-header
          :class="{
            vb__layout__header: true,
            vb__layout__fixedHeader: settings.isTopbarFixed,
            vb__layout__headerGray: settings.isGrayTopbar,
            vb__layout__separatedHeader: settings.isTopbarSeparated,
          }"
        >
          <vb-topbar />
        </a-layout-header>
        <vb-breadcrumbs />
        <a-layout-content class="vb__layout__content">
          <router-view v-slot="{ Component }">
            <transition :name="settings.routerAnimation" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </a-layout-content>
        <a-layout-footer>
          <vb-footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VbTopbar from '@/@vb/components/Topbar'
import VbBreadcrumbs from '@/@vb/components/Breadcrumbs'
import VbFooter from '@/@vb/components/Footer'
import VbSidebar from '@/@vb/components/Sidebar'
// import VbSupportChat from '@/@vb/components/SupportChat'
// import VbMenuLeft from '@/@vb/components/Menu/MenuLeft'
// import VbMenuTop from '@/@vb/components/Menu/MenuTop'

export default {
  name: 'MainLayout',
  components: { VbFooter, VbTopbar, VbSidebar, VbBreadcrumbs },
  data: function () {
    return {
      touchStartPrev: 0,
      touchStartLocked: false,
    }
  },
  computed: mapState(['settings']),
  mounted() {
    this.bindMobileSlide()
    this.detectViewPort(true)
    window.addEventListener('resize', this.detectViewPortListener)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.detectViewPortListener)
  },
  methods: {
    toggleMobileMenu() {
      const value = !this.settings.isMobileMenuOpen
      this.$store.commit('CHANGE_SETTING', { setting: 'isMobileMenuOpen', value })
    },
    changeSetting: function (setting, value) {
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    setViewPort: function (isMobileView = false, isTabletView = false) {
      this.$store.commit('CHANGE_SETTING', { setting: 'isMobileView', value: isMobileView })
      this.$store.commit('CHANGE_SETTING', { setting: 'isTabletView', value: isTabletView })
    },
    detectViewPortListener: function () {
      this.detectViewPort(false)
    },
    detectViewPort: function (firstLoad = false) {
      const isMobile = this.settings.isMobileView
      const isTablet = this.settings.isTabletView
      const width = window.innerWidth
      const state = {
        next: {
          mobile: width < 768,
          tablet: width < 992,
          desktop: !(width < 768) && !(width < 992),
        },
        prev: {
          mobile: isMobile,
          tablet: isTablet,
          desktop: !(isMobile) && !(isTablet),
        },
      }
      // desktop
      if (state.next.desktop && ((state.next.desktop !== state.prev.desktop) || firstLoad)) {
        this.setViewPort(false, false)
      }
      // tablet & collapse menu
      if (state.next.tablet && !state.next.mobile && ((state.next.tablet !== state.prev.tablet) || firstLoad)) {
        this.setViewPort(false, true)
        this.$store.commit('CHANGE_SETTING', { setting: 'isMenuCollapsed', value: true })
      }
      // mobile
      if (state.next.mobile && ((state.next.mobile !== state.prev.mobile) || firstLoad)) {
        this.setViewPort(true, false)
      }
    },
    bindMobileSlide() {
      // mobile menu touch slide opener
      const unify = e => {
        return e.changedTouches ? e.changedTouches[0] : e
      }
      document.addEventListener(
        'touchstart',
        e => {
          const x = unify(e).clientX
          this.touchStartPrev = x
          this.touchStartLocked = x > 70
        },
        { passive: false },
      )
      document.addEventListener(
        'touchmove',
        e => {
          const x = unify(e).clientX
          const prev = this.touchStartPrev
          if (x - prev > 50 && !this.touchStartLocked) {
            this.toggleMobileMenu()
            this.touchStartLocked = true
          }
        },
        { passive: false },
      )
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
