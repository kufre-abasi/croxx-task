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
      <div class="hidden lg:block flex-shrink-0 border-[#C2DBFF] border-r md:w-[300px]">
        <BaseNavbar />
      </div>
      <div class="p-0 pb-8 flex-grow">
        <nav
          class="top-menu flex items-center justify-between bg-white border-[#C2DBFF] border-b py-3 px-4 lg:px-6"
        >
          <div class="lg:hidden">
            <div class="logo">
              <router-link to="/"
                ><img src="@/assets/logo.png" class="h-8" alt="Croxx logo"
              /></router-link>
            </div>
          </div>
          <h3
            class="lg:block hidden text-[#282929] font-Poppins600 text-[32px] leading-[32.4px] capitalize"
          >
            System Panel
          </h3>
          <div class="text-right justify-end">
            <div class="flex justify-between gap-3 items-center ml-auto">
              <div class="profile__dropdown relative">
                <div
                  class="profile__dropdown-text items-center flex p-2 lg:py-4 py-4 rounded-3xl"
                >
                  <div class="user-name gap-4 hidden lg:flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                        stroke="#0040A1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 8H17"
                        stroke="#0040A1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 13H13"
                        stroke="#0040A1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.02 2.90997C8.71003 2.90997 6.02003 5.59997 6.02003 8.90997V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z"
                        stroke="#0040A1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
                        stroke="#0040A1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
                        stroke="#0040A1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </div>

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
        <div class="justify-between w-full pb-4 px-7 hidden mt-24">
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
