<template>
  <div class="alert alert-success" v-if="store.loaders.movie">
    Loading......
  </div>
</template>

<script>

export default {
  name: 'LoaderComponent'
}
</script>

<style lang="scss" scoped>
</style>