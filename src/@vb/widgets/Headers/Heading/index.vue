<template>
  <div>{{ data.title }}</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return { title: 'hello' }
      },
    },
  },
}
</script>