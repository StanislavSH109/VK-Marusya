<template>
  <div class="container">
    <div class="wrapper">
      <RegisterDone />
      <RegisterModal />
      <LoginModal />
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterDone from '~/components/common/RegisterDone.vue';
import RegisterModal from '~/components/common/RegisterModal.vue';
import LoginModal from '~/components/common/LoginModal.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 100px;
}
</style>


