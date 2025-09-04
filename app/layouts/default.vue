<template>
  <div class="page">
    <Header />
      <main>
        <NuxtPage />
      </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
</script>

<style lang="scss" scope>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>