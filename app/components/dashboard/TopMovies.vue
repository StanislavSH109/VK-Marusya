<template>
  <section class="topten">
    <h2 class="topten__title">Топ 10 фильмов</h2>
    <div class="topten__wrapper">
      <div v-if="pending" class="topten__loader">Загрузка...</div>
      <div v-else-if="error" class="topten__error">{{ error.message }}</div>
      <div v-else class="topten__inner">
        <ul class="topten__list">
          <li  v-for="(film, index) in topTen?.filter(f => f.posterUrl)" :key="film?.id"  class="topten__items">
            <span class="topten__items-place">{{ index + 1 }}</span>
            <img :src="film?.posterUrl" alt="Постер фильма" class="topten__items-image">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/movie';
import { useAsyncData } from '#app';


const {data: topTen, pending, error} = await useAsyncData<Movie[]>(
  'topTen',
   async () => {
    let films: Movie[] = [];
    while(films.length < 10) {
      const response = await $fetch<Movie[]>('https://cinemaguide.skillbox.cc/movie/top10');
      films = [...films, ...response.filter(f => f.posterUrl)];
      films = films.slice(0, 10);
    }
    return films;
   }
  
)
</script>

<style lang="scss" scoped>
.topten {
  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    color: #FFFFFF;
    margin: 0 0 64px;
    @include vp-767 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(2, auto);
    gap: 40px;
  }

  &__items {
    position: relative;
   &-place {
    position: absolute;
    content: "";
    background-color: #FFFFFF;
    padding: 8px 24px;
    color: #6A5DC2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    top: -5%;
    right: 80%;
   }
   &-image {
      border-radius: 16px;
      max-width: 224px;
      max-height: 336px;
      width: 100%;
      height: 100%;
      box-shadow: 1px 1px 80px 1px #FFFFFF54;
    }
  }
}
</style>