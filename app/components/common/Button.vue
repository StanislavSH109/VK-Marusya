<template>
  <button class="btn" type="submit">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: #45526E;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  cursor: pointer;
  min-width: 100%;
  padding: 16px 80px;
  border-radius: 28px;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
  &:hover,&:focus {
    background-color: #67A5EB;
    color: rgba(255, 255, 255, 1);
  }
  
}
</style>