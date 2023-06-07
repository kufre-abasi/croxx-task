<template>
  <div class="marketplace">
    <div class="marketplace__text">
      <h2>Connect to a marketplace</h2>
      <h4>A complete solution for marketplaces</h4>
      <p>
        Connect a marketplace or payment gateway to your Global Account to start
        recieving and holding funds locally.
      </p>
      <router-link to="/" class="marketplace__cta"
        >Connect marketplace</router-link
      >
    </div>
    <div class="marketplace__img">
      <img src="@/assets/img/payment/paypal-logo.svg" alt="Stripe logo" />
      <img src="@/assets/img/payment/stripe-logo.svg" alt="Stripe logo" />
      <img src="@/assets/img/payment/xero-logo.svg" alt="Stripe logo" />
      <img src="@/assets/img/payment/qb-logo.svg" alt="Stripe logo" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.marketplace {
  width: 100%;
  position: relative;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: $color-white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  &__text {
    position: relative;
    width: 60%;

    h2 {
      color: $color-primary;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    h4 {
      font-weight: 600;
    }
    p {
      color: $color-grey-400;
      font-size: 0.8rem;
    }
    .marketplace__cta {
      display: inline-block;
      margin-top: 10px;
      padding: 8px 30px;
      border: 1px solid $color-primary;
      color: $color-primary;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 6px;

      &:hover {
        background-color: rgba($color: $color-primary, $alpha: 0.15);
      }
    }
  }

  &__img {
    width: 32%;
    display: flex;
    align-items: center;
    // border: 1px solid;
    margin-left: 30px;

    img {
      margin-right: 10px;
    }
  }
}
</style>
