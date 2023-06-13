<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import { onMounted, ref } from "vue";
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
            <div class="grid grid-flow-col w-full auto-cols-max gap-2">
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
        </div>
      </div>
    </Layout>
  </main>
</template>
