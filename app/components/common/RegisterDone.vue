<template>
  <div class="registration">
    <div class="registration__close">
      <IconClose class="registration__close-icon"/>
    </div>
    <div class="registration__inner">
      <IconMarusya class="registration__icon" />
    </div>
    <div class="registration__complete">
         <span class="registration__done">Регистрация завершена</span>
        <span class="registration__message">Используйте вашу электронную почту для входа</span>
        <NuxtLink class="registration__link" to="/">
          <Button>Войти</Button>
        </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconMarusya from '~/assets/icons/IconMarusya.svg';
import IconClose from '~/assets/icons/IconClose.svg';
import Button from './Button.vue';
</script>

<style lang="scss" scoped>
.registration {
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 60px 20px 64px;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  position: relative;
  max-height: 335px;

  &__close {
    position: absolute;
    content: "";
    right: -20%;
    top: 0;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @include vp-767 {
        position: absolute;
        background-color: unset;
        right: 5%;
        top: 0px;
        border-radius: unset;
        align-items: flex-end;
        justify-content: flex-end;
      }
  }

  &__inner {
    align-self: center;
    margin: 0 0 40px;
  }

  &__complete {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    margin: 0 0 8px;
  }


  &__done {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    text-align: center;
  }

  &__message {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
  }
}

</style>