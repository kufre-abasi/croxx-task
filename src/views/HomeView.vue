<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import { onMounted, ref } from "vue";
</script>

<template>
  <main>
    <Layout>
      <div class="lg:px-6 px-3 pt-0 grid grid-rows gap-4">
        <div class="chart bg-white rounded-[8px] min-h-[100vh] px-4">
          <div class="border-b border-[#d2d7ea] flex gap-2 py-4 lg:py-6">
            <h4 class="font-Poppins700 text-[20px] font-bold">Industry</h4>
            <div class="border-l border-[#d2d7ea] border-[1px]"></div>
            <h4 class="font-Poppins400 py-1">Energy Sector</h4>
          </div>
          <div class="border-[2px] mt-4 rounded-full w-full overflow-x-auto py-2 p-3">
            <div class="grid grid-flow-col w-full auto-cols-max gap-2">
              <button
                class="font-Poppins500 p-2 text-[#27548d] bg-[#e8f3ff] rounded-full"
              >
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
              <button class="font-Poppins500 p-2 text-[#27548d] rounded-full">
                Well Service
              </button>
            </div>
          </div>
          <div class="border-[2px] mt-4 rounded-[15px] overflow-x-auto py-2 px-3">
            <div class="grid grid-flow-col w-full auto-cols-max gap-2">
              <button class="font-Poppins500 p-2 text-[#c7c9c] rounded-full">All</button>
              <button class="font-Poppins500 p-0 text-[#c7c9c] rounded-full">
                Stimulation equipment
              </button>
              <button class="font-Poppins500 p-2 text-[#c7c9c] rounded-full">
                Auxillary equipment
              </button>
              <button class="font-Poppins500 p-2 text-[#c7c9c] rounded-full">
                cememnting equipment
              </button>
              <button class="font-Poppins500 p-2 text-[#c7c9c] rounded-full">
                Down-holes tools
              </button>
              <button class="font-Poppins500 p-2 text-[#c7c9c] rounded-full">
                Pressure jobs
              </button>
            </div>
          </div>
          <div
            v-for="item in 5"
            :key="item"
            class="border-[2px] mt-4 rounded-[30px] w-full flex gap-4 overflow-x-auto py-4 px-3"
          >
            <img class="w-[5%]" src="@/assets/img/profile-icon.png" alt="" />
            <div class="flex justify-between gap-10 w-full">
              <div>
                <h3 class="font-Poppins700">Nancy Tukura</h3>
                <p class="font-Poppins400 text-[#7c7e7d] text-[14px]">
                  Rainoil. Warri, Rivers . Full-Time
                </p>
              </div>
              <div class="md:block hidden">
                <h3 class="font-Poppins700">Level</h3>
                <p
                  class="font-Poppins400 border-[1px] border-[#726daf] text-[#726daf] px-2 rounded-full text-[14px]"
                >
                  Basic
                </p>
              </div>
              <div class="md:block hidden">
                <h3 class="font-Poppins700">Score</h3>
                <p class="font-Poppins400 text-[#7c7e7d] text-[14px]">75%</p>
              </div>
              <div class="md:block hidden">
                <h3 class="font-Poppins700">Attempts</h3>
                <p class="font-Poppins400 text-[#7c7e7d] text-[14px]">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </main>
</template>
