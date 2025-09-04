<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <ul class="footer__list">
          <li class="footer__item">
              <IconVk />
          </li>
          <li class="footer__item">
              <IconYoutube />
          </li>
          <li class="footer__item">
              <IconOk />
          </li>
          <li class="footer__item">
              <IconTelegram />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconVk from '~/assets/icons/IconVk.svg';
import IconYoutube from '~/assets/icons/IconYoutube.svg';
import IconOk from '~/assets/icons/IconOk.svg';
import IconTelegram from '~/assets/icons/IconTelegram.svg';
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 0 42px;
  &__wrapper {
    display: flex;
    justify-content: flex-end;
  }
  
  &__list {
    display: flex;
    gap: 24px;
    &-item {
      cursor: pointer;
    }
  }
}
</style>