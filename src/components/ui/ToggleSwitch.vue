<template>
  <div class="toggle-switch">
    <label :for="id" class="switch">
      <input
        type="checkbox"
        :id="id"
        hidden
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "toggle",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.toggle-switch {
  position: relative;
  cursor: pointer;
  transform: translateY(3px);

}
  .switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 20px;
    line-height: 1;
    cursor: pointer;

  }

    .slider {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: 34px;
      transition: 0.2s;
      background-color: #ccc;
      line-height: 1;

    }

    input:checked + .slider {
      /* background-color: $color-primary; */
    }
    input:checked + .slider::before {
      transform: translateX(24px);
    }

      .slider::before {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        /* background-color: $color-white; */
        border-radius: 50%;
        transition: 0.2s;
      }

</style>
