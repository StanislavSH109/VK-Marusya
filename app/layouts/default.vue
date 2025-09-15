<template>
  <div class="page" :class="{'page--auth': authModal}">
    <Header />
      <main>
        <NuxtPage />
      </main>
    <Footer />
    <LoginModal v-if="authModal"/>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
import LoginModal from '~/components/common/LoginModal.vue';

const authModal = useState('authModal', () => false);
</script>

<style lang="scss" scope>
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &--auth {
    &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 10;
    overflow: hidden;
  }
  }
}
</style>