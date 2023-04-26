<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <div class="card-body">
        <div class="card-image">
          <img :src="(item.poster_path) ? store.imagePath+store.fileSize+ item.poster_path : '/images/fake.png'" :alt="item.title || item.name">
        </div>
        <div class="card-text p-4 overflow-auto">
          <h3>{{ item.title || item.name }}</h3>
          <p>{{ original_title || original_name}}</p>
          <div class="flag">
            <img class="mini-flag img-fluid" :src="'/public/images/' + flag + '.png'" :alt="item.original_language">
          </div>
            <p>{{ stars }}</p>
          <i class="fa-star" v-for="(n,index) in 5" :key="index" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></i>
  <!-- <i class="fa-regular fa-star"></i> -->
          <div v-if="item.overview">
            <H3>Overview</H3>
            <p>{{ item.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../data/store';
  export default {
    name: 'ItemCard',
    props: [
      'item'
    ],
    data() {
      return {
        store,
        availableFlags: [
          'en','it','us', 'ja', 'es'
        ]
      }
    },
    computed: {
      flag() {
        if (this.availableFlags.includes(this.item.original_language)) {
          return this.item.original_language;
        } else {
          return 'fake'
        }
      },
      stars() {
        return Math.round(this.item.vote_average / 2);
      }
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
.mini-flag {
  width: 32px;
  height: auto;
}

.card{
  .card-body {
    position: relative;
    height: calc(100vw / 4) * 1.5;
    cursor: pointer;
    transition: transform 250ms;

    &:hover {
      .card-image {
        display: none;
      }

      .card-text {
        display: block;
      }
    }
    .card-image {
      @include position-absolute;

      img {width: 100%;
          height: 100%;
          object-fit: cover;
      }
    }
    .card-text {
      @include position-absolute;

      background-color: black;
      color: white;
      display: none;


      .fa-solid, .fa-regular {
        color: rgb(255, 255, 0);
      }
    }
  }
  &:hover

  .card-body {
    transform: scale(1.1);
    z-index: 100;
  }
}
</style>