<template>
  <div class="mb-4">
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :class="$style.table"
    >
      <template #progress="bar">
        <div class="progress">
          <div
            :class="['progress-bar', bar.color]"
            :style="{ width: bar.value + '%' }"
            role="progressbar"
          />
        </div>
      </template>
      <template #value="text">
        <span class="font-weight-bold">{{ text }}</span>
      </template>
    </a-table>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'ACTION NAME',
    dataIndex: 'actionName',
    className: 'bg-transparent text-gray-6',
  },
  {
    title: 'PROGRESS',
    dataIndex: 'progress',
    className: 'text-right bg-transparent text-gray-6',
    scopedSlots: { customRender: 'progress' },
  },
  {
    title: 'VALUE',
    dataIndex: 'value',
    className: 'text-right bg-transparent text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
]

export default {
  name: 'VbTable1',
  data: function () {
    return {
      columns,
      data,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
