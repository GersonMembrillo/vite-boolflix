<template>
  <div class="alert alert-danger">
    {{ error }}
  </div>
</template>

<script>

export default {
  name: 'ErrorComponent',
  prop: ['error']
}
</script>

<style lang="scss" scoped>
</style>