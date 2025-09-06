<template>
  <button class="btn-like" type="button">
    <IconLike class="btn-like__icon"/>
  </button>
</template>

<script lang="ts" setup>
import IconLike from '~/assets/icons/IconLike.svg';
</script>

<style lang="scss" scoped>
.btn-like {
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #333;
  padding: 24px;

  &__icon {
    color: white;
    width: 20px;
    height: 20px;
  }
}
</style>