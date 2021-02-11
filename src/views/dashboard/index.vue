<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <vb-headers-heading :data="{ title: 'Basic page header' }" />
          </div>
          <div class="card-header">
            <vb-headers-heading-2
              :data="{
                title: 'Header with description',
                description:
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              }"
            />
          </div>
          <div class="card-header">
            <vb-headers-heading-3
              :data="{ title: 'Header with button', button: 'View All', url: '#' }"
            />
          </div>
          <div class="card-header">
            <vb-headers-card-header :data="{ title: 'Basic Header' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-2 :data="{ title: 'With Dropdown' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-3 :data="{ title: 'With Actions' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-4
              :data="{
                title: 'With Icon',
                icon: 'fe fe-phone-call',
                description: 'Some descriptiopn here...',
              }"
            />
          </div>
          <div class="card-header card-header-borderless py-0">
            <vb-headers-card-header-5 :data="{ title: 'Borderless' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-tabbed :data="{ title: 'Basic' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-tabbed-2 :data="{ title: 'Pills' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-tabbed-3 :data="{ title: 'With dropdown' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-tabbed-4 :data="{ title: 'Bold border' }" />
          </div>
          <div class="card-header py-0">
            <vb-headers-card-header-tabbed-5
              :data="{ title: 'With icon', icon: 'fe fe-activity' }"
            />
          </div>
          <div class="card-header py-0"><vb-headers-card-header-tabbed-6 /></div>
          <div class="card-footer">
            <vb-headers-card-footer
              :data="{
                mainTitle: 'Unlock Account',
                mainIcon: 'fe fe-lock',
                mainType: 'btn-success',
                additionalTitle: 'Cancel',
              }"
            />
          </div>
          <div class="card-footer">
            <vb-headers-card-footer-2
              :data="{ mainTitle: 'Save', mainType: 'btn-primary', additionalTitle: 'Cancel' }"
            />
          </div>
          <vb-headers-tag :data="{ title: 'Tag' }" />
          <div class="card-body">
            <vb-controls-button :data="{ title: 'Save', type: 'primary' }" />
          </div>
          <div class="card-body">
            <vb-controls-button-2
              :data="{ title: 'New Request', icon: 'fe fe-plus-circle', type: 'primary' }"
            />
          </div>
          <div class="card-body">
            <vb-controls-button-3
              :data="{ mainTitle: 'Update', mainType: 'primary', additionalTitle: 'Cancel' }"
            />
          </div>
          <div class="card-body"><vb-controls-pagination /></div>
          <div class="card-body"><vb-controls-pagination-2 /></div>
          <div class="card-body"><vb-placeholders-1 /></div>
          <div class="card-body"><vb-placeholders-2 /></div>
          <div class="card-body"><vb-placeholders-3 /></div>
          <div class="card-body"><vb-typography-1 /></div>
          <div class="card-body"><vb-typography-3 /></div>
          <div class="card-body"><vb-typography-4 /></div>
          <div class="card-body"><vb-typography-2 /></div>
          <div class="card-body"><vb-typography-5 /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VbHeadersHeading from '@/@vb/widgets/Headers/Heading'
import VbHeadersHeading2 from '@/@vb/widgets/Headers/Heading2'
import VbHeadersHeading3 from '@/@vb/widgets/Headers/Heading3'
import VbHeadersCardHeader from '@/@vb/widgets/Headers/CardHeader'
import VbHeadersCardHeader2 from '@/@vb/widgets/Headers/CardHeader2'
import VbHeadersCardHeader3 from '@/@vb/widgets/Headers/CardHeader3'
import VbHeadersCardHeader4 from '@/@vb/widgets/Headers/CardHeader4'
import VbHeadersCardHeader5 from '@/@vb/widgets/Headers/CardHeader5'
import VbHeadersCardHeaderTabbed from '@/@vb/widgets/Headers/CardHeaderTabbed'
import VbHeadersCardHeaderTabbed2 from '@/@vb/widgets/Headers/CardHeaderTabbed2'
import VbHeadersCardHeaderTabbed3 from '@/@vb/widgets/Headers/CardHeaderTabbed3'
import VbHeadersCardHeaderTabbed4 from '@/@vb/widgets/Headers/CardHeaderTabbed4'
import VbHeadersCardHeaderTabbed5 from '@/@vb/widgets/Headers/CardHeaderTabbed5'
import VbHeadersCardHeaderTabbed6 from '@/@vb/widgets/Headers/CardHeaderTabbed6'
import VbHeadersCardFooter from '@/@vb/widgets/Headers/CardFooter'
import VbHeadersCardFooter2 from '@/@vb/widgets/Headers/CardFooter2'
import VbHeadersTag from '@/@vb/widgets/Headers/Tag'
import VbControlsButton from '@/@vb/widgets/Controls/Button'
import VbControlsButton2 from '@/@vb/widgets/Controls/Button2'
import VbControlsButton3 from '@/@vb/widgets/Controls/Button3'
import VbControlsPagination from '@/@vb/widgets/Controls/Pagination'
import VbControlsPagination2 from '@/@vb/widgets/Controls/Pagination2'
import VbPlaceholders1 from '@/@vb/widgets/Placeholders/1'
import VbPlaceholders2 from '@/@vb/widgets/Placeholders/2'
import VbPlaceholders3 from '@/@vb/widgets/Placeholders/3'
import VbTypography1 from '@/@vb/widgets/Typography/1'
import VbTypography3 from '@/@vb/widgets/Typography/3'
import VbTypography4 from '@/@vb/widgets/Typography/4'
import VbTypography2 from '@/@vb/widgets/Typography/2'
import VbTypography5 from '@/@vb/widgets/Typography/5'

export default {
  name: 'VbDashboard',
  components: {
    VbHeadersHeading,
    VbHeadersHeading2,
    VbHeadersHeading3,
    VbHeadersCardHeader,
    VbHeadersCardHeader2,
    VbHeadersCardHeader3,
    VbHeadersCardHeader4,
    VbHeadersCardHeader5,
    VbHeadersCardHeaderTabbed,
    VbHeadersCardHeaderTabbed2,
    VbHeadersCardHeaderTabbed3,
    VbHeadersCardHeaderTabbed4,
    VbHeadersCardHeaderTabbed5,
    VbHeadersCardHeaderTabbed6,
    VbHeadersCardFooter,
    VbHeadersCardFooter2,
    VbHeadersTag,
    VbControlsButton,
    VbControlsButton2,
    VbControlsButton3,
    VbControlsPagination,
    VbControlsPagination2,
    VbPlaceholders1,
    VbPlaceholders2,
    VbPlaceholders3,
    VbTypography1,
    VbTypography3,
    VbTypography4,
    VbTypography2,
    VbTypography5,
  },
}
</script>
