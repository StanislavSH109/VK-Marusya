<template>
  <button class="btn-about" type="button">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.btn-about {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: none;
  outline: none;
  background-color: #00000066;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 28px;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
  &:hover,&:focus {
    background-color: #333;
    color: rgba(255, 255, 255, 1);
  }
  
  &:hover &__icon,
  &:focus &__icon {
    color: #00000066;
    outline: none;
  }
}
</style>