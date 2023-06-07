<template>
  <div class="modal p-2 flex justify-center">
    <div class="modal__body !p-6 w-[100%] max-w-[400px] md:max-w-2/12 md:w-2/5">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);

  &__body {
    position: relative;
    // margin-left: auto;
    // width: 40%;
    background-color: $color-white;
    border-radius: 12px;
    padding: 20px 30px;
    padding-bottom: 0px;
    animation: slidedown 0.5s ease;
    // height: 100vh;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
