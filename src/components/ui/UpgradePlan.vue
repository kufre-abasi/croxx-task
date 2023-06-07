<template>
  <div class="upgrade">
    <h3>Plan active untill Nov 09, 2021</h3>
    <div class="upgrade__body">
      <!-- <img src="@/assets/img/calender.svg" alt="" /> -->
      <img class="w-36" src="../../assets/img/twelfthDay.png" alt="" />

      <div class="upgrade__plan">
        <p>£{{ price }}</p>
        <span class="duration">per {{ duration }}</span>
      </div>
    </div>
    <div class="upgrade__btn">
      <router-link to="#" class="btn">Upgrade plan</router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  price: {
    type: String,
    default: "0.00",
  },
  duration: {
    type: String,
    default: "Month",
  },
});
</script>

<style lang="scss" scoped>
.upgrade {
  position: relative;
  width: 100%;
  background-color: $color-white;
  outline: 1px solid $color-primary;
  border-radius: 12px;
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    text-align: center;
  }

  .upgrade__body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 0;
  }
  .upgrade__plan {
    margin-left: 10px;
    p {
      font-size: 1rem;
      font-weight: 700;
      color: $color-primary;
      line-height: 1.2;
    }
    .duration {
      color: $color-grey-300;
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: capitalize;
      line-height: 1;
    }
  }
  .upgrade__btn {
    width: 100%;
    display: grid;
    place-items: center;
    // background-color: red;

    .btn {
      display: block;
      margin-top: auto;
      border: 1px solid $color-primary;
      border-radius: 6px;
      padding: 8px 50px;
      font-size: 0.8rem;
      font-weight: 700;
      color: $color-primary;
      transition: 0.1s ease;

      &:hover {
        background-color: $color-primary;
        color: $color-white;
      }
    }
  }
}
</style>
