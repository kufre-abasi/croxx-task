<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  background-color: transparent;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;

  i {
    display: inline-block;
    margin-right: 7px;
    font-size: 1.2rem;
  }

  &.btn-primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover {
      background-color: darken($color: $color-primary, $amount: 5);
    }
  }
  &.btn-outline {
    color: $color-primary;
    outline: 1px solid $color-primary;

    &:hover {
      background-color: rgba($color: $color-primary, $alpha: 0.2);
      color: $color-primary;
    }
  }
}
</style>
