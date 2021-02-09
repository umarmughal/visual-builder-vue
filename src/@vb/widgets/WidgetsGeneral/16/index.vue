<template>
  <div class="card overflow-hidden">
    <div v-if="isNew" :class="$style.new">New</div>
    <div class="card-body">
      <a
        href="#"
        :class="[$style.favorite, favorite ? 'text-dark' : 'text-gray-3']"
        @click="toggleFavorite"
      >
        <i class="fe fe-heart font-size-21" />
      </a>
      <div :class="$style.image" class="border-bottom height-250 mb-3">
        <img class="img-fluid" :src="image" :alt="name" />
      </div>
      <div class="font-size-24 font-weight-bold text-dark mb-2">
        {{ price }}
        <del v-if="oldPrice" class="align-text-top font-size-14 mr-2">
          {{ oldPrice }}
        </del>
      </div>
      <div>
        <a href="javascript:void(0);" class="text-blue font-size-18">
          {{ name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VbGeneral16',
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    oldPrice: {
      type: String,
      default: '',
    },
  },
  data: function () {
    return {
      favorite: this.isFavorite,
    }
  },
  methods: {
    toggleFavorite: function (event) {
      event.preventDefault()
      this.favorite = !this.favorite
    },
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
