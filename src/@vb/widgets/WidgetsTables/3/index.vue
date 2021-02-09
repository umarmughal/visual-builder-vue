<template>
  <div>
    <a-tabs default-active-key="1" :class="$style.tabs">
      <a-tab-pane key="1" tab="History" />
      <a-tab-pane key="2" tab="Actions" />
      <a-tab-pane key="3">
        <template #tab>
          <a-dropdown placement="bottomRight" :trigger="['click']">
            <a
              class="nav-link dropdown-toggle"
              href="javascript: void(0);"
              role="button"
              >Dropdown</a
            >
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">Action</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">Another action</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">Something else here</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <a href="javascript:;">Separated link</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
    <div class="mb-4 px-4">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        :class="$style.table"
      >
        <template #avatar="{ text: link }">
          <div class="vb__utils__avatar">
            <img :src="link" alt="User" />
          </div>
        </template>
        <template #userName="{ text: user }">
          <div>
            <div>{{ user.name }}</div>
            <div class="text-gray-4">
              {{ user.position }}
            </div>
          </div>
        </template>
        <template #location="{ text }">
          <a href="javascript: void(0);" class="text-blue">{{ text }}</a>
        </template>
        <template #action>
          <div>
            <button type="button" class="btn btn-primary mr-2">
              <i class="fe fe-plus-circle" />
            </button>
            <button type="button" class="btn btn-light">
              <i class="fe fe-settings text-blue" />
            </button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    dataIndex: 'avatar',
    className: 'bg-transparent text-gray-6 width-50',
    slots: { customRender: 'avatar' },
  },
  {
    title: 'USER NAME',
    dataIndex: 'userName',
    className: 'bg-transparent text-gray-6',
    slots: { customRender: 'userName' },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    className: 'bg-transparent text-gray-6',
    slots: { customRender: 'location' },
  },
  {
    dataIndex: 'action',
    className: 'bg-transparent text-right',
    slots: { customRender: 'action' },
  },
]

export default {
  name: 'VbTable3',
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
