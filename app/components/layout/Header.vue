<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__logo" to="/">
          <IconMarusya class="header__icon" />
        </NuxtLink>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <NuxtLink class="header__nav-link" to="/">
                Главная
              </NuxtLink>
            </li>
            <li class="header__nav-item">
              <NuxtLink class="header__nav-link" to="/genres">
                Жанры
              </NuxtLink>
            </li>
            <li class="header__nav-search">
              <form class="header__nav-form" role="search">
                <IconSearch class="header__nav-icon" />
                <input
                  type="search"
                  class="header__nav-input"
                  placeholder="Поиск"
                  aria-label="Поиск">
              </form>
            </li>
          </ul>
        </nav>
        <div class="header__nav-auth">
          <button class="header__nav-auth-btn">Войти</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconMarusya from '~/assets/icons/IconMarusya.svg';
import IconSearch from '~/assets/icons/IconSearch.svg';
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0 32px;
  &__wrapper {
    display: flex;
    gap: 80px;
    align-items: center;
  }
  &__icon {
    cursor: pointer;
    color: #FFFFFF;
  }
  &__nav {
    display: flex;
    align-items: self-start;
    &-list {
      display: flex;
      gap: 40px;
    }
    &-item {
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
      padding: 9px 0 0;
    }
    &-link {
      position: relative;
      color: #FFFFFF;
      padding: 8px 0 0;
      &::before {
          position: absolute;
          content: "";
          bottom: -10px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #DC5DFC;
          transition: width ease-in-out .2s;
        }
      &:hover::before,
      &.router-link-active::before
        {
        width: 100%;
      }
    }
    &-form {
      position: relative;
    }
    &-input {
      width: 658px;
      height: 48px;
      border-radius: 8px;
      background-color: rgba(57, 59, 60, 1);
      border: none;
      outline: none;
      color: #FFFFFF;
      padding-left: 54px;
      &::placeholder {
        letter-spacing: 0.04em;
      }
    }
    &-icon {
      position: absolute;
      content: "";
      top: 30%;
      left: 3%;
    }
    &-auth {
      &-btn {
        border: none;
        outline: none;
        background: transparent;
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 400;
        cursor: pointer;
        line-height: 32px;
        padding: 0 10px 0 0;
      }
    }
  }
}

</style>