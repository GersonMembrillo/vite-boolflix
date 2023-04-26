<template>
  <HeaderComponent @on-search="getData"/>
  <main>
    <ItemComponent title="Movies" :items="store.movie.items" type="movie"/>
    <ItemComponent title="TV - Series" :items="store.tv.items" type="tv"/>
  </main>
  <!-- <ul>
    <li v-for="film in store.movies">
      {{ film.title }} - {{ film.original_title }} - <img :src="'/images/' + film.original_language + '.png'" alt=""> - {{ film.vote_average }}
    </li>
  </ul> -->
</template>

<script>
import axios from 'axios';
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import ItemComponent from './components/ItemComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    ItemComponent,
  },
  data() {
    return {
      store,
      sections: [
        {
          title: 'Most Popular',
          type: 'popular',
        },
        {
          title: 'Movies',
          type: 'movie'
        },
        {
          title: 'TV',
          type: 'movie',
        }
      ]
    }
  },
  methods: {
    getItems(entity) {
      this.store[entity].error = '';
      this.store[entity].loader = '';
      const url = this.store.apiURL + this.store[entity].endpoint;
      // store.movie.endpoint
      const options = {
        params: this.store.params
      }
      if (entity === 'popular') delete options.params.query;
      axios.get(url,options).then((res) => {
        console.log(res.data.results)
        this.store[entity].items = res.data.results;
      }).catch((error) => {
        this.store[entity].error = error.message
      }).finally(() => {
        this.store[entity].loader = false
      })
    },
    // getSeries() {
    //   const url = store.apiURL + store.endpoint.tv
    //   const options = {
    //     params: store.params
    //   }
    //   axios.get(url, options).then((res) => {
    //     console.log(res.data.results)
    //     this.store.series= res.data.results;
    //   }).catch((error) => {
    //     this.store.errors.tv = error.message
    //   }).finally(() =>
    //   this.store.loaders.tv = false,)
    // },
    getData() {
      // this.store.errors.movie = '',
      // this.store.errors.tv = '',
      // this.store.loaders.movie = true,
      // this.store.loaders.tv = true,
      this.getItems('movie');
      this.getItems('tv');
      // this.getSeries();
    },
  },
  mounted() {
    this.getItems('popular')
  }
}
</script>

<style lang="scss" scoped></style>