<template>
  <div class="registration">
    <div class="registration__close">
      <IconClose class="registration__close-icon"/>
    </div>
    <form class="form" action="#" @submit.prevent>
      <IconMarusya class="form__icon" />
      <div class="form__wrapper">
        <div class="form__inner">
          <input class="form__inner-input" type="email" placeholder="Электронная почта" required>
          <IconMail class="form__inner-icon"/>
        </div>
        <div class="form__inner">
          <input class="form__inner-input" type="password" placeholder="Пароль" autocomplete="new-password" required>
          <IconPassword class="form__inner-icon"/>
        </div>
        <Button>Войти</Button>
        <NuxtLink class="form__exists" to="/">Регистрация</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import IconMarusya from '~/assets/icons/IconMarusya.svg';
import IconMail from '~/assets/icons/IconMail.svg';
import IconPassword from '~/assets/icons/IconPassword.svg';
import IconClose from '~/assets/icons/IconClose.svg';
import Button from './Button.vue';
</script>

<style lang="scss" scoped>
.registration {
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 24px 20px 32px;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  position: relative;
  max-height: 420px;

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
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__exists {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #000000;
  }
  &__icon {
    margin: 0 0 28px;
  }
  
  &__close {
    display: flex;
    justify-content: flex-end;
  }
  &__icon {
    color: black;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &-icon {
      position: absolute;
      content: "";
      top: 35%;
      left: 6%;
      fill-opacity: 0.4;
    }
    
    &-input {
      padding: 16px 52px;
      border-radius: 8px;
      border: none;
      outline: 1px solid #00000066;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      max-width: 340px;
      max-height: 56px;

      &:placeholder-shown:not(:focus):invalid {
        outline: 1px solid #FF7575;

        ~ .form__inner-icon {
          :deep(path) {
            fill: #FF7575;
            fill-opacity: 1;
          }
        }
      }
    }
  }
}
</style>