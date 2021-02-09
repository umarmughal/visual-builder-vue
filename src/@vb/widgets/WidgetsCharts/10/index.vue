<template>
  <div>
    <div>
      <div class="text-dark font-size-18 font-weight-bold mb-1">
        Profit Change
      </div>
      <div class="text-gray-6 mb-2">Revenue by location and date</div>
      <div class="d-flex flex-wrap align-items-center">
        <div class="mr-3 mt-3 mb-3 position-relative">
          [TODO_CHART]
          <div
            ref="tooltip"
            class="text-gray-5 font-size-28 text-center"
            :class="$style.tooltip"
          >
            <div
              ref="tooltipLabel"
              class="font-size-14 font-weight-bold text-dark"
            />
            <div ref="tooltipValue" class="font-size-14 text-dark" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VbChart10',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
