<script setup>
import BaseTabVue from '@/components/ui/BaseTab.vue';
import Layout from "@/components/layout/Dashboard.vue";
import Verification from "./AccountRequestTabPages/Verification.vue";
import Pending from "./AccountRequestTabPages/Pending.vue";
import Resubmit from "./AccountRequestTabPages/Resubmit.vue";
import Processing from "./AccountRequestTabPages/Processing.vue";
import Declined from "./AccountRequestTabPages/Declined.vue";
import searchIcon from '@/assets/img/icons/searchIcon.vue';
</script>

<template>
  <main>
    <Layout>
    <div class="lg:px-6 px-3 pt-8 grid grid-rows gap-4 ">
        <div class="bg-white  py-6 rounded-[8px] min-h-[100vh] relative">
            <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Account request</h3>
                    <div class="flex lg:flex-row flex-col gap-3 relative">
                        <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 pl-8 font-Satoshi600 text-[14px] leading-[19.12px] py-[10px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                        <searchIcon class="absolute top-2 left-2 cursor-pointer"/>
                    </div>
            </div>
                <BaseTabVue>
                    <template #header>
                        <div class=" flex-col gap-3 px-4 justify-between mb-4">
                            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Account request</h3>
                            <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 py-[12px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                        </div>
                    </template>

                  
                    <template #tab1>
                        Pending <span class="bg-[#2C2B6C] rounded-[2px] text-white p-[4px] py-[2px]">0</span>
                    </template>
                    <template #tab2>
                        Verification <span class="bg-[#2C2B6C] rounded-[2px] text-white p-[4px] py-[2px]">0</span>
                    </template>
                    <template #tab3>
                        Resubmit <span class="bg-[#2C2B6C] rounded-[2px] text-white p-[4px] py-[2px]">0</span>
                    </template>
                    <template #tab4>
                        Processing <span class="bg-[#2C2B6C] rounded-[2px] text-white p-[4px] py-[2px]">0</span>
                    </template>
                    <template #tab5>
                        Declined <span class="bg-[#2C2B6C] rounded-[2px] text-white p-[4px] py-[2px]">0</span>
                    </template>

                
                    <template #view1>
                        <Pending />
                    </template>
                    <template #view2>
                        <Verification/>
                    </template>
                    <template #view3>
                        <Resubmit />
                    </template>
                    <template #view4>
                        <Processing />
                    </template>
                    <template #view5>
                        <Declined />
                    </template>
                </BaseTabVue>        
        </div>
    </div>
    </Layout>
  </main>
</template>
