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
        <div class="header__mobile">
          <ul class="header__mobile-list">
            <li class="header__mobile-item">
              <button class="header__mobile-btn" type="button">
                <IconGenres />
              </button>
            </li>
            <li class="header__mobile-item">
              <button class="header__mobile-btn" type="button">
                <IconSearch />
              </button>
            </li>
            <li class="header__mobile-item">
              <button class="header__mobile-btn" type="button">
                <IconAuth />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconMarusya from '~/assets/icons/IconMarusya.svg';
import IconSearch from '~/assets/icons/IconSearch.svg';
import IconAuth from '~/assets/icons/IconAuth.svg';
import IconGenres from '~/assets/icons/IconGenres.svg';
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0 32px;
  &__wrapper {
    display: flex;
    gap: 80px;
    align-items: center;
    @media (max-width: 861px) {
      gap: 20px;
    }

    @include vp-767 {
      justify-content: space-between;
    }
  }
  &__icon {
    cursor: pointer;
    color: #FFFFFF;
    @include vp-767 {
      width: 80px;
      height: 19px;
    }
  }
  &__nav {
    display: flex;
    flex: 1;
    @include vp-767 {
      display: none;
    }
    &-list {
      display: flex;
      flex: 1;
      gap: 40px;
    }
    &-item {
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
      padding: 9px 0 0;
      @media (max-width:860px) {
        font-size: 16px;
        line-height: 24px;
      }
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
    &-search {
      flex: 1;
    }
    &-form {
      position: relative;
      flex: 1;
    }
    &-input {
      width: 100%;
      min-width: 200px;
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
        @media (max-width:860px) {
        font-size: 16px;
        line-height: 24px;
      }
      @include vp-767 {
        display: none;
      }
      }
    }
  }
  &__mobile {
    display: none;
    @include vp-767 {
      display: flex;
    }
    &-list {
      display: flex;
      gap: 22px;
    }
    &-btn {
      border: none;
      outline: none;
      background: transparent;
      padding: 2px;
    }
  }
}

</style>