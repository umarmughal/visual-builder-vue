<template>
  <router-view />
</template>

<script>
// antd core & themes styles
import 'ant-design-vue/lib/style/index.less'
import '@/@vb/css/vendors/antd/themes/default.less'
import '@/@vb/css/vendors/antd/themes/dark.less'

// third-party plugins styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuelayers/lib/style.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

// vb vendors styles
import '@/@vb/css/vendors/antd/style.scss'
import '@/@vb/css/vendors/bootstrap/style.scss'
import '@/@vb/css/vendors/perfect-scrollbar/style.scss'
import '@/@vb/css/vendors/nprogress/style.scss'
import '@/@vb/css/vendors/chartist/style.scss'
import '@/@vb/css/vendors/chartist-tooltip-plugin/style.scss'
import '@/@vb/css/vendors/quill/style.scss'

// vb styles
import '@/@vb/css/core.scss'
import '@/@vb/css/measurements.scss'
import '@/@vb/css/colors.scss'
import '@/@vb/css/utils.scss'
import '@/@vb/css/layout.scss'
import '@/@vb/css/router.scss'

// vb extra styles
import '@/@vb/css/extra/clean.scss' // clean styles
import '@/@vb/css/extra/air.scss' // air styles

export default {
  name: 'styleLoader',
}
</script>
