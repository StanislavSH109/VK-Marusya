<template>
<div class="wrapper">
  <div v-if="pending" class="" >Загрузка...</div>
  <div v-else-if="error" class="">{{ error.message }}</div>
  <div v-else class="">{{ randomMovie?. }}</div>
</div>
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

</style>