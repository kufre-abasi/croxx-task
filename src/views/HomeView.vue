<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import { onMounted, ref } from "vue";
import { useStore } from "@/stores/stores";
let store = useStore();
onMounted(() => {
  store.pageTitle = "Store Front";
});
</script>

<template>
  <main>
    <Layout>
      <div class="lg:px-6 px-3 pt-0 grid grid-rows gap-4">
        <div class="chart bg-white rounded-[8px] min-h-[100vh] lg:px-4">
          <div class="border-b border-[#C2DBFF] flex gap-3 py-4 lg:py-6">
            <h4 class="font-Poppins700 text-[20px] font-bold">Industry</h4>
            <div class="border-l border-[#C2DBFF] border-[1px]"></div>
            <h4 class="font-Poppins400 py-1 flex">
              Energy Sector
              <svg
                class="mt-2 ml-2"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.94 1.71249L8.05 6.60249C7.4725 7.17999 6.5275 7.17999 5.95 6.60249L1.06 1.71249"
                  stroke="#282929"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h4>
          </div>
          <div
            class="border-[1px] border-[#C2DBFF] mt-4 rounded-full w-full overflow-x-auto py-2 p-3"
          >
            <div class="grid grid-flow-col w-full auto-cols-max gap-2 text-[16px]">
              <button
                class="font-Poppins500 p-2 text-[#27548d] bg-[#e8f3ff] rounded-full"
              >
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
              <button
                class="font-Poppins500 p-2 md:block hidden text-[#27548d] rounded-full"
              >
                Well Service
              </button>
              <button
                class="font-Poppins500 p-2 md:block hidden text-[#27548d] rounded-full"
              >
                Well Service
              </button>
              <button
                class="font-Poppins500 p-2 md:block hidden text-[#27548d] rounded-full"
              >
                Well Service
              </button>
              <button
                class="font-Poppins500 p-2 md:block hidden text-[#27548d] rounded-full"
              >
                Well Service
              </button>
              <button
                class="font-Poppins500 p-2 md:block hidden text-[#27548d] rounded-full"
              >
                Well Service
              </button>
            </div>
          </div>
          <div
            class="border-[1px] border-[#C2DBFF] mt-4 rounded-[20px] overflow-x-auto pt-2 px-4"
          >
            <div class="grid grid-flow-col w-full auto-cols-max gap-[2px]">
              <button
                class="font-Poppins400 p-2 pb-4 border-b-[4px] text-[#979B9B] border-[#0040A1]"
              >
                All
              </button>
              <button class="font-Poppins400 p-2 pb-4 text-[#979B9B] rounded-full">
                Stimulation equipment
              </button>
              <button class="font-Poppins400 p-2 pb-4 text-[#979B9B] rounded-full">
                Auxillary equipment
              </button>
              <button class="font-Poppins400 p-2 pb-4 text-[#979B9B] rounded-full">
                cememnting equipment
              </button>
              <button class="font-Poppins400 p-2 pb-4 text-[#979B9B] rounded-full">
                Down-holes tools
              </button>
              <button class="font-Poppins400 p-2 pb-4 text-[#979B9B] rounded-full">
                Pressure jobs
              </button>
              <button class="font-Poppins400 pt-2 pb-4 text-[#979B9B] rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
                    fill="#282929"
                  />
                </svg>
              </button>
              <button class="font-Poppins400 pt-2 pb-4 text-[#979B9B] rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
                    fill="#282929"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            v-for="item in 5"
            :key="item"
            class="border-[1px] border-[#C2DBFF] mt-4 rounded-[30px] w-full flex lg:gap-4 gap-2 overflow-x-auto lg:py-4 py-2 px-2 lg:px-3"
          >
            <img class="lg:w-[5%] w-[15%]" src="@/assets/img/profile.png" alt="" />
            <div class="flex justify-between gap-10 w-full">
              <div>
                <h3 class="font-Poppins600">Nancy Tukura</h3>
                <p class="font-Poppins400 text-[#7c7e7d] text-[14px]">
                  Rainoil. Warri, Rivers . Full-Time
                </p>
              </div>
              <div class="md:block hidden">
                <h3 class="font-Poppins600">Level</h3>
                <p
                  class="font-Poppins400 border-[1px] border-[#726daf] text-[#726daf] px-2 rounded-full text-[14px]"
                >
                  Basic
                </p>
              </div>
              <div class="md:block hidden">
                <h3 class="font-Poppins600">Score</h3>
                <p class="font-Poppins400 text-[#7c7e7d] text-[14px]">75%</p>
              </div>
              <div class="md:block hidden">
                <h3 class="font-Poppins600">Attempts</h3>
                <p class="font-Poppins400 text-[#7c7e7d] text-[14px]">3</p>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <div class="flex items-left gap-8 place-content-left mt-4 mx-auto">
              <button @click="prev" class="border-[1px] text-sm rounded-md py-1 px-2">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="#282929"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="font-Satoshi500 text-[#646868]">
                <span
                  class="place-self-center bg-[#0040A1] p-4 py-2 text-white rounded cursor-pointer"
                  >1</span
                >
                <span class="place-self-center px-2 py-1 cursor-pointer">2</span>
                <span class="place-self-center px-2 py-1 cursor-pointer">3</span>
                <span class="place-self-center px-2 py-1 cursor-pointer">4</span>
                <span class="place-self-center px-2 py-1 cursor-pointer">5</span>
                <span class="place-self-center px-2 py-1 cursor-pointer">...</span>
                <span class="place-self-center px-2 py-1 cursor-pointer">33</span>
              </div>
              <button @click="next" class="border-[1px] text-sm rounded-md py-1 px-2">
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.375 1L7.625 7L1.375 13"
                    stroke="#282929"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </main>
</template>
