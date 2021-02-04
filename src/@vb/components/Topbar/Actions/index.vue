<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-bell" :class="$style.icon" />
    </div>
    <slot name="overlay">
      <div class="card vb__utils__shadow width-350">
        <div class="card-body pb-2">
          <list3 />
        </div>
      </div>
    </slot>
  </a-dropdown>
</template>

<script>
import List3 from '@/@vb/widgets/Lists/3'

export default {
  components: {
    List3,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
