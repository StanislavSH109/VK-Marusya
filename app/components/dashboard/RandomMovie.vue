<template>
  <section class="movie">
    <div class="movie__wrapper">
      <div class="movie__inner">
        <div v-if="pending" class="movie__wrapper-loader">Загрузка...</div>
        <div v-else-if="error" class="movie__wrapper-error">{{ error?.message }}</div>
        <div v-else class="movie__info">
          <div class="movie__items">
            <IconStar class="movie__items-icon"/>
            <span class="movie__items-rating">
              {{ randomMovie?.tmdbRating }}
            </span>
          </div>
          <span class="movie__info-year">
            {{ randomMovie?.releaseYear }}
          </span>
          <span class="movie__info-genre">
            {{ randomMovie?.genres }}
          </span>
          <span class="movie__info-time">
            {{ randomMovie?.runtime }}
          </span>
        </div>
        <h2 class="movie__title">{{ randomMovie?.title }}</h2>
        <p class="movie__description">{{ randomMovie?.plot }}</p>
        <div class="movie__buttons">
          <Button>Трейлер</Button>
          <Button>О фильме</Button>
          <ButtonLike />
          <ButtonRefresh />
        </div>
      </div>
      <img :src="randomMovie?.posterUrl || '/'" class="movie__image" alt="Постер фильма">
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/movie';
import { useAsyncData } from '#app';
import Button from '../common/Button.vue';
import ButtonLike from '../common/ButtonLike.vue';
import ButtonRefresh from '../common/ButtonRefresh.vue';
import IconStar from '~/assets/icons/IconStar.svg';

const { data: randomMovie, pending, error } = await useAsyncData<Movie>(
  'randomMovie',
  () => $fetch('https://cinemaguide.skillbox.cc/movie/random')
)



</script>

<style lang="scss" scoped>
.movie {
  display: flex;

  &__wrapper {
    display: flex;
  }

  &__info {
    display: flex;
    gap: 16px;
    align-items: center;
    &-year, &-genre, &-time {
      color: #FFFFFFB2;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }
  }

  &__items {
    display: flex;
    gap: 5px;
    background-color: green;
    padding: 4px 12px;
    border-radius: 16px;
    &-icon {
      width: 15px;
      height: 15px;
      color: #FFFFFF;
    }
    &-rating {
      color: #FFFFFF;
    }
  }

  &__title {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    color: #FFFFFF;
  }

  &__buttons {
    display: flex;
  }
  &__image {
    display: flex;
  }

}
</style>