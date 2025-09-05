<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <ul class="footer__list">
          <li class="footer__item">
              <IconVk class="footer__item-icon"/>
          </li>
          <li class="footer__item">
              <IconYoutube class="footer__item-icon"/>
          </li>
          <li class="footer__item">
              <IconOk class="footer__item-icon"/>
          </li>
          <li class="footer__item">
              <IconTelegram class="footer__item-icon"/>
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
    @include vp-767 {
      justify-content: flex-start;
    }
  }
  
  &__list {
    display: flex;
    gap: 24px;
    &-item {
      cursor: pointer;
    }
  }
  &__item {
    display: flex;
    
    &-icon {
      width: 36px;
      height: 36px;
    @include vp-767 {
      width: 24px;
      height: 24px;
      }
    }
  }
  
}
</style>