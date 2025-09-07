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
              {{ randomMovie?.tmdbRating.toFixed(1) }}
            </span>
          </div>
          <span class="movie__info-year">
            {{ randomMovie?.releaseYear }}
          </span>
          <span class="movie__info-genre">
            {{ randomMovie?.genres[0] }}
          </span>
          <span class="movie__info-time">
            {{ formattedTime }}
          </span>
        </div>
        <h2 class="movie__title">{{ randomMovie?.title }}</h2>
        <p class="movie__description">{{ randomMovie?.plot }}</p>
        <div class="movie__buttons">
          <Button>Трейлер</Button>
          <ButtonAbout>О фильме</ButtonAbout>
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
import ButtonAbout from '../common/ButtonAbout.vue';
import IconStar from '~/assets/icons/IconStar.svg';

const { data: randomMovie, pending, error } = await useAsyncData<Movie>(
  'randomMovie',
  async () => {
    let movie: Movie | null = null;
    let attempts = 0;
    while(!movie || movie.language !== 'ru' && attempts > 20) {
      movie = await $fetch<Movie>('https://cinemaguide.skillbox.cc/movie/random');
      attempts++;
    }
    return movie;
  }
  
)


const duringTimeFilm = randomMovie.value;
const formattedTime = computed(() => {
  const totalMinutes = duringTimeFilm?.runtime ?? 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours > 0 ? hours + 'ч' : ''} ${minutes} мин`; 
})


</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  margin: 0 0 40px;
  

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    @include vp-767 {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 600px;
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
      @include vp-767 {
        font-size: 14px;
        line-height: 20px;
      }
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
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
    }
  }

  &__info {
    margin: 0 0 20px;
  }

  &__title {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 16px;
    @include vp-767 {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &__description {
    display: --webkit-box;
    --webkit-line-clamp: 3;
    --webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #FFFFFFB2;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    color: #FFFFFFB2;
    margin: 0 0 60px;
    @include vp-767 {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__buttons {
    display: flex;
    gap: 16px;
    max-height: 56px;
  }
  &__image {
    max-width: 660px;
    border-radius: 16px;
    height: 550px;
  }

}
</style>