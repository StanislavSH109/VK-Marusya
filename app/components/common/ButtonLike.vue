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
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #00000066;
  padding: 24px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
  &:hover, &:focus {
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