<template>
  <div class="pt-4">
    [TODO_CHARTS]
    <div class="d-flex flex-wrap">
      <div class="mr-5">
        <div class="text-nowrap text-uppercase text-gray-4">
          <div :class="[$style.donut, $style.success]" />
          Gross revenue
        </div>
        <div class="font-weight-bold font-size-18 text-dark">+$125,367.36</div>
      </div>
      <div class="mr-5">
        <div class="text-nowrap text-uppercase text-gray-4">
          <div :class="[$style.primary, $style.donut]" />
          Gross Earnings
        </div>
        <div class="font-weight-bold font-size-18 text-dark">+$125,367.36</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VbChart3',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
