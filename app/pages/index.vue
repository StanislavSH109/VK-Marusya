<template>
  <div class="container">
    <div class="wrapper">
      <h2>Film</h2>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 100px;
  @include vp-767 {
    flex-direction: column;
    gap: 20px;
  }
}
</style>


