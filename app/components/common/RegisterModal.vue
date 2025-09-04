<template>
  <div class="registration">
    <div class="registration__close">
      <IconClose class="registration__close-icon"/>
    </div>
    <form class="form" action="#" @submit.prevent>
      <IconMarusya class="form__icon" />
      <div class="form__wrapper">
        <span class="form__name">Регистрация</span>
        <div class="form__inner">
          <IconMail class="form__inner-icon"/>
          <input class="form__inner-input" type="email" placeholder="Электронная почта" required>
        </div>
        <div class="form__inner">
          <IconName class="form__inner-icon"/>
          <input class="form__inner-input" type="text" placeholder="Имя" autocomplete="username" required>
        </div>
        <div class="form__inner">
          <IconName class="form__inner-icon"/>
          <input class="form__inner-input" type="text" placeholder="Фамилия" autocomplete="username" required>
        </div>
        <div class="form__inner">
          <IconPassword class="form__inner-icon"/>
          <input class="form__inner-input" type="password" placeholder="Пароль" autocomplete="new-password" required>
        </div>
        <div class="form__inner">
          <IconPassword class="form__inner-icon"/>
          <input class="form__inner-input" type="password" placeholder="Подтвердите пароль" autocomplete="new-password" required>
        </div>
        <Button>Создать акканту</Button>
        <NuxtLink class="form__exists" to="/">У меня есть пароль</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import IconMarusya from '~/assets/icons/IconMarusya.svg';
import IconMail from '~/assets/icons/IconMail.svg';
import IconName from '~/assets/icons/IconName.svg';
import IconPassword from '~/assets/icons/IconPassword.svg';
import IconClose from '~/assets/icons/IconClose.svg';
import Button from './Button.vue';
import { ref } from 'vue';


</script>

<style lang="scss" scoped>
.registration {
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 24px 20px 32px;
  display: flex;
  flex-direction: column;
  max-width: 335px;

  &__close {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0 0 8px;
    cursor: pointer;
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__icon {
    margin: 0 0 28px;
  }
  &__name {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
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
    &-input {
      padding: 16px 52px;
      border-radius: 8px;
      outline: none;
      border: 1px solid #00000066;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      &:placeholder-shown:not(:focus):invalid {
        border: 1px solid red;
      }
    }
    &-icon {
      position: absolute;
      content: "s";
      top: 35%;
      left: 6%;
    }
  }
}
</style>