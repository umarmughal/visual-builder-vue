<template>
  <div class="row">
    <div class="col-xl-6 col-lg-12">
      <div>
        <div class="badge badge-example">Table / 1</div>
        <div class="card">
          <div class="card-body">
            <kit-table-1 />
          </div>
        </div>
      </div>
      <div>
        <div class="badge badge-example">Table / 2</div>
        <div class="card">
          <div class="card-body">
            <kit-table-2 />
          </div>
        </div>
      </div>
      <div>
        <div class="badge badge-example">Table / 3</div>
        <div class="card">
          <kit-table-3 />
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-lg-12">
      <div>
        <div class="badge badge-example">Table / 4</div>
        <div class="card">
          <div class="card-body">
            <kit-table-4 />
          </div>
        </div>
      </div>
      <div>
        <div class="badge badge-example">Table / 5</div>
        <div class="card">
          <div class="card-body">
            <kit-table-5 />
          </div>
        </div>
      </div>
      <div>
        <div class="badge badge-example">Table / 6</div>
        <div class="card">
          <div class="card-body">
            <kit-table-6 />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div>
        <div class="badge badge-example">Table / 7</div>
        <div class="card">
          <div class="card-body">
            <kit-table-7 />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div>
        <div class="badge badge-example">Table / 8</div>
        <div class="card">
          <div class="card-body">
            <kit-table-8 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import KitTable1 from '@/@vb/widgets/WidgetsTables/1'
import KitTable2 from '@/@vb/widgets/WidgetsTables/2'
import KitTable3 from '@/@vb/widgets/WidgetsTables/3'
import KitTable4 from '@/@vb/widgets/WidgetsTables/4'
import KitTable5 from '@/@vb/widgets/WidgetsTables/5'
import KitTable6 from '@/@vb/widgets/WidgetsTables/6'
import KitTable7 from '@/@vb/widgets/WidgetsTables/7'
import KitTable8 from '@/@vb/widgets/WidgetsTables/8'

export default {
  components: {
    KitTable1,
    KitTable2,
    KitTable3,
    KitTable4,
    KitTable5,
    KitTable6,
    KitTable7,
    KitTable8,
  },
}
</script>
