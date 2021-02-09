<template>
  <div>
    <div>
      <div class="text-dark font-size-18 font-weight-bold mb-1">
        Year Profit
      </div>
      <div class="text-gray-6 mb-2">Revenue by location and date</div>
      <div class="d-flex flex-wrap align-items-center">
        <div class="mr-3 mt-3 mb-3 position-relative">
          [TODO_CHARTS]
          <div
            ref="tooltip"
            class="text-gray-5 font-size-28"
            :class="$style.tooltip"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VbChart9',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
