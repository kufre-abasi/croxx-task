<template>
  <div class="">
    <div class="mb-6 lg:hidden">
      <h3 class="text-2xl font-bold mb-3">Piggybanq</h3>
      <p class="font-bold">Let's see how well you're doing.</p>
    </div>
    <h2 class="welcome-text hidden md:block my-4">
      Let's see how well you're doing.
    </h2>
    <div class="flex flex-wrap md:flex-nowrap justify-between gap-4">
      <div class="account-info min-h-[226px] bg-black text-white">
        <div class="account-info__header">
          <div class="account-info__dropdown">
            <p>
              Savings Balance
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
        <div class="account-info__body flex justify-between items-center">
          <div class="">
            <h2 class="balance-amount text-white">£2,500.42</h2>
            <a>British Pound (GBP)</a>
          </div>
          <div class="">
            <img
              src="../../assets/piggyBanq/uk-flag.svg"
              alt="United Kingdom flag" />
          </div>
        </div>
        <!-- @click="store.accountModal = true" -->
        <button
          class="text-[12px] mt-4 flex gap-1 items-center justify-center h-10 w-full font-bold rounded-lg bg-primary-light text-white"
          type="submit"
          block
          ty>
          Account Information
        </button>
        <!-- <a-button  type="" class="rounded-lg bg-white"
          ></a-button
        > -->
      </div>

      <div class="account-info min-h-[226px] bg-[#FFFFFF]">
        <div class="account-info__header">
          <div class="account-info__dropdown">
            <p class="font-bold">Piggybanq</p>
            <a class="text-[9px]"
              >Strict safelock automatically. Daily, weekly or Monthly.</a
            >
          </div>
        </div>
        <div class="account-info__body">
          <div class="balance">
            <!-- <p class="text-sm">Strict safelock automatically. Daily, weekly or Monthly.</p> -->
            <h2 class="balance-amount">£2,500.42</h2>
            <p>British Pound (GBP)</p>
          </div>
          <div class="flag">
            <!-- <img src="@/assets/img/uk-flag.png" alt="United Kingdom flag" /> -->
          </div>
        </div>

        <a-button
          type=""
          @click="
            (store.showPiggyInfo = false)((store.showPiggySection = true))
          "
          class="text-[12px] bottom-0 text-white mt-4 flex gap-1 items-center justify-center h-10 w-full font-bold rounded-lg bg-primary-light hover:bg-secondary-main"
          >View piggybanq</a-button
        >
      </div>

      <div
        class="account-info min-h-[226px] overflow-hidden bg-[#E4B4C3] text-white">
        <div class="account-info__header">
          <div class="account-info__dropdown">
            <p class="font-bold">Target Savings</p>
            <a class="text-white text-[10px]">
              Strict safelock automatically. Daily, weekly or Monthly.
            </a>
          </div>
        </div>
        <div class="account-info__body">
          <div class="balance">
            <h2 class="balance-amount text-white">£2,500.42</h2>
            <p class="text-white">British Pound (GBP)</p>
          </div>
          <div class="flag">
            <!-- <img src="@/assets/img/uk-flag.png" alt="United Kingdom flag" /> -->
          </div>
        </div>
        <div class="flex relative justify-between items-end">
          <!-- <a-button
            type=""
            class="text-[#E4B4C3] w-2/5 rounded-lg bg-white"
            >View Savings</a-button
          > -->
          <button
            class="text-[12px] bottom-0 text-[#E4B4C3] mt-4 flex gap-1 items-center justify-center h-10 w-full font-bold rounded-lg bg-white"
            type="submit"
            block
            ty>
            Account Information
          </button>
          <img class="w-5/12" src="../../assets/img/target-and-dart.svg" />
        </div>
      </div>
    </div>

    <div class="mt-12 bg-white p-4 rounded-xl">
      <div class="font-bold text-lg">Recent Savings</div>
      <div class="flex items-center gap-4 mt-3">
        <p class="px-3 py-1 bg-primary-light rounded-lg">All</p>
        <p>Credit</p>
        <p>Debit</p>
      </div>
      <div class="p-2">
        <div class="flex py-4 justify-between items-center">
          <div>
            <div
              class="flex flex-col md:flex-row md:gap-2 md:items-center justify-start">
              <p class="font-bold text-xs">Target Savings Deposit .</p>
              <p class="font-bold text-xs hidden md:block">
                (Payment ID: QAPBXWBxD6ih9UZhvnuKky)
              </p>
            </div>
            <p class="text-[8px]">Wed, 09 Nov 2022 09:01:19 GMT</p>
          </div>
          <p class="text-[#06C270]">£2,500.42</p>
        </div>
        <a-divider class="m-0" />
        <div class="flex py-4 justify-between items-center">
          <div>
            <div
              class="flex flex-col md:flex-row md:gap-2 md:items-center justify-start">
              <p class="font-bold text-xs">Target Savings Deposit .</p>
              <p class="font-bold text-xs hidden md:block">
                (Payment ID: QAPBXWBxD6ih9UZhvnuKky)
              </p>
            </div>
            <p class="text-[8px]">Wed, 09 Nov 2022 09:01:19 GMT</p>
          </div>
          <p class="text-[#06C270]">£2,500.42</p>
        </div>
      </div>

      <div class="flex">
        <p class="ml-auto font-bold text-primary-light text-[11px]">
          View all transactions
        </p>
      </div>
    </div>
  </div>
  <Modal v-show="store.accountModal">
    <header>
      <h1>Account Information</h1>
      <span class="close-btn" @click="store.accountModal = false"
        ><i class="uil uil-times"></i
      ></span>
    </header>
    <div class="account__balance">
      <div class="details">
        <h3>Account balance</h3>
        <h2 class="balance">€2,500.42</h2>
        <p class="currency">Euro(EUR)</p>
      </div>
      <div class="flag">
        <img
          src="../../assets/piggyBanq/uk-flag.svg"
          alt="United Kingdom flag" />
      </div>
    </div>
    <div class="account__details">
      <div class="detail">
        <h4>Account Name</h4>
        <p>Nelson Mojolaoluwa</p>
        <span class="copy"><i class="uil uil-copy-alt"></i></span>
      </div>
      <div class="detail">
        <h4>IBAN</h4>
        <p>GB93MOCK00000070803104</p>
        <span class="copy"><i class="uil uil-copy-alt"></i></span>
      </div>
      <div class="detail">
        <h4>BIC</h4>
        <p>TRYOGB27</p>
        <span class="copy"><i class="uil uil-copy-alt"></i></span>
      </div>
    </div>
    <div class="account__btns">
      <button class="btn btn-primary">
        <i class="uil uil-wallet"></i> Add money
      </button>
      <button class="btn btn-outline">
        <i class="uil uil-external-link-alt"></i> Transfer money
      </button>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "@/components/ui/Modal.vue";
</script>

<style lang="scss" scoped>
.white-b {
  background-color: white !important;
}
.white-t {
  background-color: white !important;
}
.account-info {
  width: 100%;
  height: 180px;
  // ma-height: 150px;
  //   background-color: rgba($color: $color-primary, $alpha: 0.16);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    // align-items: center;

    .account-info__dropdown {
      p {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        // color: $color-primary;
      }
      svg {
        width: 20px;
        height: 20px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      font-size: 1.7rem;
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
