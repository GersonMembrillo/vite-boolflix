<template>
  <header class="container-fluid d-flex justify-content-between align-items-center">
    <img class="main-logo" src="../assets/images/boolflix-logo.png" alt="">
    <div class="d-flex">
      <input type="text" class="form-contro me-3" v-model="store.params.query" @keyup.enter="$emit('onSearch')">
      <button class="btn btn-danger">Search</button>
    </div>
  </header>
</template>

<script>
import { store } from '../data/store';
export default {
  name: 'HeaderComponent',
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  background-color: black;

  .main-logo {
    width: 150px;
    height: auto;
  }
}


</style>