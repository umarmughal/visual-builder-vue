<template>
  <div>
    <div>
      [TODO_VL_MAP]
      <!-- <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 300px"
      >
        <vl-view
          v-model:min-zoom="minZoom"
          v-model:zoom="zoom"
          v-model:center="center"
          v-model:rotation="rotation"
        />
        <vl-layer-tile id="osm">
          <vl-source-osm />
        </vl-layer-tile>
      </vl-map> -->
    </div>
    <div class="mb-4">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        :class="$style.table"
      >
        <template #location="{ text }">
          <a href="javascript: void(0);" class="text-blue">{{ text }}</a>
        </template>
        <template #value="{ text }">
          <span class="font-weight-bold">{{ text }}</span>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
export default {
  name: 'VbChart7',
  data: function () {
    const columns = [
      {
        title: 'Action name',
        dataIndex: 'actionName',
        className: 'bg-transparent text-gray-6',
      },
      {
        title: 'Location',
        dataIndex: 'location',
        className: 'bg-transparent',
        slots: { customRender: 'location' },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        className: 'text-left text-gray-6 bg-transparent',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        className: 'text-right bg-transparent text-gray-6',
        slots: { customRender: 'value' },
      },
    ]
    return {
      data,
      columns,
      zoom: 1,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
      minZoom: 1,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
