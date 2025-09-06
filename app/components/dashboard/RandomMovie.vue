<!-- <template>
  <section class="movie">
    <div class="movie__wrapper">
      <div class="movie__info">
        <span class="movie__info-rating">

        </span>
        <span class="movie__info-year">

        </span>
        <span class="movie__info-genre">

        </span>
        <span class="movie__info-time">

        </span>
      </div>
      <h2 class="movie__title"></h2>
      <p class="movie__description"></p>
    </div>
    <div class="movie__buttons">
      <Button>Трейлер</Button>
      <Button>О фильме</Button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types/movie';
import { useAsyncData } from '#app';

const { data: randomMovie, pending, error } = await useAsyncData<Movie>(
  'randomMovie',
  () => $fetch('https://cinemaguide.skillbox.cc/movie/random')
)



</script>

<style lang="scss" scoped>

</style> -->