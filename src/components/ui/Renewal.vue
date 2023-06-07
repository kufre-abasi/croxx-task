<template>
  <div class="renewal">
    <h3 class="md:block hidden">Collection pot</h3>
    <h3 class=" md:hidden">Gigi pot</h3>
    <p>
      The simple & fun way to collect group payment from friends, coworkers &
      family.
    </p>

    <div class="flex justify-between w-full justify-self-end-end items-baseline">
      <button @click="to()" class="text-white h-10 bg-primary-light w-1/2 rounded-lg">Create Payment  Link</button>
      <img
      class="w-1/2"
        src="../../assets/png_homePage/girandOfficeWork.png" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "@/router";
const props = defineProps({
  value: {
    type: String,
    default: "0.00",
  },
});

const to = () => {
  store.pageTitle='Collection Pot'
  router.push({
    name:"collectionPot"
  })
}

const className = (value) => {
  if (value <= 4) {
    return "low";
  } else if (value <= 7) {
    return "medium";
  } else {
    return "high";
  }
};
</script>

<style lang="scss" scoped>
.renewal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  background-color: $color-white;
  outline: 1px solid $color-primary;
  border-radius: 12px;
  background: rgba(0, 175, 239, 0.12) !important;

  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    text-align: left;
  }

  &__body {
    width: 100%;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.9rem;

      &:last-child {
        font-size: 0.8rem;
        font-weight: 600;
      }

      span {
        font-weight: 600;
      }
    }
    progress {
      appearance: none;
      width: 100%;
      height: 7px;
      border-radius: 50%;
      border: none;
      margin: 10px 0;

      &::-webkit-progress-bar {
        background: rgba($color: $color-success, $alpha: 0.3);
        border-radius: 10px;
      }
      &::-webkit-progress-value {
        background: $color-success;
        border-radius: 10px;
      }

      &.low {
        &::-webkit-progress-bar {
          background: rgba($color: $color-success, $alpha: 0.3);
          border-radius: 10px;
        }
        &::-webkit-progress-value {
          background: $color-success;
        }
      }
      &.medium {
        &::-webkit-progress-bar {
          background: rgba($color: $color-warning, $alpha: 0.3);
          border-radius: 10px;
        }
        &::-webkit-progress-value {
          background: $color-warning;
        }
      }
      &.high {
        &::-webkit-progress-bar {
          background: rgba($color: $color-error, $alpha: 0.3);
          border-radius: 10px;
        }
        &::-webkit-progress-value {
          background: $color-error;
        }
      }
    }
  }
}
</style>
