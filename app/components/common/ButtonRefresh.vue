<template>
  <button class="btn-refresh" type="button">
    <IconRefresh class="btn-refresh__icon"/>
  </button>
</template>

<script lang="ts" setup>
import IconRefresh from '~/assets/icons/IconRefresh.svg';
</script>

<style lang="scss" scoped>
.btn-refresh {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #00000066;
  padding: 24px;
  cursor: pointer;
  transition: background .3s ease-in-out;
  &:hover,&:focus {
    background-color: #333;
  }

  &__icon {
    color: white;
    width: 20px;
    height: 20px;
    transition: color .3s ease-in-out;
  }

  &:hover &__icon,
  &:focus &__icon {
    color: #B4A9FF;
    outline: none;

  }
}
</style>