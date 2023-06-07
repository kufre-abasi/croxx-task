<template>
  <div class="account-info md:w-min-[330px] h-56 md:h-[226px]">
    <div class="account-info__header">
      <div class="account-info__dropdown">
        <p>
          Switch account
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round">
            <polyline points="7 10 12 15 17 10"></polyline>
          </svg>
        </p>
      </div>

      <svg
        class="hide-balance"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path
          d="M17.86,18.14l-.44.32-.48.29-.51.27c-.17.08-.35.17-.54.24l-.56.22-.6.18-.63.14-.67.11-.7.07L12,20l-.73,0-.7-.07L9.9,19.8l-.63-.14-.6-.18-.56-.22c-.19-.07-.37-.16-.54-.24l-.51-.27-.48-.29-.44-.32a4.46,4.46,0,0,1-.43-.33l-.39-.34L5,17.11l-.34-.36c-.11-.13-.22-.25-.32-.38L4,16l-.27-.37-.25-.38c-.08-.12-.15-.24-.22-.36l-.21-.36-.18-.34-.16-.33-.15-.32-.12-.29c0-.09-.08-.18-.11-.27l-.09-.24c0-.08-.06-.15-.08-.22l-.06-.18a1,1,0,0,1,0-.14.76.76,0,0,1,0-.11V12l0-.07a.76.76,0,0,1,0-.11l.06-.14.08-.18c0-.07.07-.14.1-.22L2.44,11c0-.09.09-.18.14-.27l.15-.29.18-.32C3,10,3,9.93,3.1,9.81l.22-.34c.07-.12.15-.24.23-.36l.26-.36c.08-.13.18-.25.27-.38L4.37,8l.32-.37L5,7.25l.35-.36.38-.36.4-.34"></path>
        <path
          d="M10.14,4.2l.59-.11L11.36,4,12,4l.64,0,.63.07.59.11.58.14.55.18.53.22c.17.07.34.16.51.24l.49.27.46.29.44.32.42.33.4.34.38.36.35.36.34.38c.11.12.21.24.31.37s.2.25.3.37.19.25.27.38l.26.36c.08.12.16.24.23.36l.22.34c.06.12.13.23.19.33l.18.32.15.29c0,.09.1.18.14.27l.12.24c0,.08.07.15.1.22l.08.18.06.14a.76.76,0,0,1,0,.11L22,12v.11a.76.76,0,0,1,0,.11,1,1,0,0,1,0,.14l-.06.18c0,.07-.05.14-.08.22s-.06.16-.09.24-.07.18-.11.27l-.12.29-.15.32-.16.33-.18.34-.21.36"></path>
        <path d="M14.83,14.83A4,4,0,0,1,9.17,9.17"></path>
        <line x1="2" y1="2" x2="22" y2="22"></line>
      </svg>
    </div>

    <div class="account-info__body pt-2">
      <div class=" flex justify-between items-center mb-2">
        <div class="balance flex items-center gap-1 text-[#FFFFFF87]">
          <span class="balance-amount text-white">£2,500.42</span>{{ " " }}
          <span class="text-xs">British Pound (GBP)</span>
        </div>
        <div class="flag">
          <img src="../../assets/piggyBanq/uk-flag.svg" alt="United Kingdom flag" />
        </div>
      </div>

      <div>
        07985946||04-00-65
      </div>
    </div>

    <!-- @click="store.accountModal = true" -->
    <div class="account-info__cta">
      <button
      @click="store.accountModal=true"

       type="button" class="cta" >
        Account Information
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.account-info {
  width: 100%;
  // background-color: rgba($color: $color-primary, $alpha: 0.16);
  background-color: black;
  color:white !important;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  // min-width: 374px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .account-info__dropdown {
      p {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        // color: $color-primary;
      }
      svg {
        width: 30px;
        height: 30px;
        background-color: rgba($color: $color-primary, $alpha: 0.2);
        border-radius: 50%;
        margin-left: 5px;
      }
    }

    .hide-balance {
      cursor: pointer;
    }
  }

  &__body {
    // font-size: 20px;
    // display: flex;
    // border: 2px solid red;
    // align-items: flex-end;
    // justify-content: space-between;
    margin: auto 5px;

    p {
      font-weight: 400;
      font-size: 0.9rem;

      &:last-child {
        line-height: 0.6;
        font-size: 0.7rem;
        color: $color-grey-400;
      }
    }
    .balance-amount {
      font-weight: 800;
      font-size: 20px;
    }
    img {
      border-radius: 50%;
    }
  }

  &__cta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0;

    button {
      display: block;
      width: 100%;
      border-radius: 5px;
      background-color: $color-primary;
      color: #fff;
      font-weight: 500;
      font-size: 0.75rem;
      cursor: pointer;
      padding: 12px 0;
      transition: 0.15s ease;

      &:hover {
        background-color: darken($color: $color-primary, $amount: 5%);
      }
    }
  }
}
</style>
