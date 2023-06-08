<script setup>
import BaseNavbar from "@/components/layout/BaseNavbar.vue";
import { onMounted, ref } from "vue";
import "animate.css";

const closeNav = ref(false);
const closeBackdrop = ref(false);
const showDropdown = ref(false);

const props = defineProps(["title"]);
const title = props.title;

const items = [
  {
    name: "Logout",
    context: "Log out",
  },
];

const toggle = () => {
  closeNav.value = !closeNav.value;

  if (closeNav.value) {
    closeBackdrop.value = !closeBackdrop.value;
  }

  if (!closeNav.value) {
    setTimeout(() => {
      closeBackdrop.value = !closeBackdrop.value;
    }, 1000);
  }
};

const toogleDropdown = (boolean) => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <div class="bg-[#ffffff]">
    <div class="lg:flex">
      <div
        v-if="closeBackdrop"
        @click.self="toggle"
        class="lg:hidden z-20 menubg fixed top-0 left-0 w-full"
      >
        <div
          :class="{ 'animate__animated animate__slideOutLeft': !closeNav }"
          class="w-2/3 animate__animated animate__slideInLeft"
        >
          <BaseNavbar />
        </div>
      </div>
      <div class="hidden lg:block flex-shrink-0 border-[#d2d7ea] border-r md:w-[300px]">
        <BaseNavbar />
      </div>
      <div class="p-0 flex-grow">
        <nav
          class="top-menu flex items-center justify-between bg-white border-[#d2d7ea] border-b py-3 px-4 lg:px-6"
        >
          <div class="lg:hidden">
            <div class="logo">
              <router-link to="/"
                ><img src="@/assets/logo.png" class="h-8" alt="Croxx logo"
              /></router-link>
            </div>
          </div>
          <h3
            class="lg:block text-[#001727] font-Satoshi500 text-[24px] leading-[32.4px] uppercase"
          >
            {{ title }}
          </h3>
          <div class="text-right justify-end">
            <div class="flex justify-between gap-3 items-center ml-auto">
              <div class="profile__dropdown relative">
                <div
                  class="profile__dropdown-text items-center flex p-2 py-6 rounded-3xl"
                >
                  <img @click="toogleDropdown()" class="md:block" alt="" />
                  <span
                    class="user-name hidden lg:block font-Satoshi700 text-[16px] leaading-[24px]"
                  ></span>

                  <div @click="toggle" class="lg:hidden cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <slot></slot>
        <!-- Footer -->
        <div class="md:flex justify-between w-full pb-4 px-7 mt-24">
          <ul>
            <li>Croxx © {{ new Date().getFullYear() }}</li>
          </ul>
          <ul class="flex gap-6">
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menubg {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);
}
</style>
