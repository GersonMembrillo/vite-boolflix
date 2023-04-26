<template>
  <section class="container-fluid">
    <h2>{{ title }}</h2>
  <div class="row gy-3">
    <ItemCard v-for="(item, index) in items" :key="item.id" :item="item"/>
          <ErrorComponent :error="store[type].error" v-if="store[type].error"/>
          <LoaderComponent v-if="store[type].loader" />
          </div>
          </section>
</template>

<script>
import { store } from '../data/store';
import ItemCard from './ItemCard.vue';
import ErrorComponent from './ErrorComponent.vue';
import LoaderComponent from './LoaderComponent.vue';
export default {
  name: 'ItemComponent',
  props: ['title','items', 'type'],
  components: {
    ItemCard,
    ErrorComponent,
    LoaderComponent
  },
  data() {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
</style>