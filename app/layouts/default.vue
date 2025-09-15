<template>
  <div :class="['page', {'page--auth': modal !== null}]">
    <Header />
      <main>
        <NuxtPage />
      </main>
    <Footer />
    <LoginModal v-if="modal === 'login'"/>
    <RegisterModal v-if="modal === 'register'"/>
    <RegisterDone v-if="modal === 'done'"/>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
import { useModal } from '~/composables/useModal';
import LoginModal from '~/components/common/LoginModal.vue';
import RegisterModal from '~/components/common/RegisterModal.vue';
import RegisterDone from '~/components/common/RegisterDone.vue';

const modal = useModal();
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