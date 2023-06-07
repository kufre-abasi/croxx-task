<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from '@/components/ui/AccountManagement/Transactions/DataTable.vue';
import BaseTab from '@/components/ui/BaseTab.vue';
import searchIcon from '@/assets/img/icons/searchIcon.vue';
const columns = ref([
  'name',
  'status',
  'payment ID',
  'type',
  'reference',
  'amount',
  'date created',
  'more',
]);

const rows = ref([
{
    id: '1',
    name: 'Peter Abutu',
    status: 'SUCCESS',
    paymentID: '94562805977',
    type: 'PAYING',
    reference: 'Checkout',
    amount: '£20.00',
    dateCreated: '2023/02/02 06:40:AM',
  },
  {
    id: '2',
    name: 'Abdur-rasheed Idris',
    status: 'SUCCESS',
    paymentID: '94562805977',
    type: 'PAYING',
    reference: 'Checkout',
    amount: '£20.00',
    dateCreated: '2023/02/02 06:40:AM',
  },
]);


</script>

<template>
  <main>
    <Layout>
    <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
        <div class="bg-white  py-6 rounded-[8px] min-h-[100vh] relative">
            <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">All Transaction</h3>
                    <div class="flex lg:flex-row flex-col gap-3 relative">
                        <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 pl-8 font-Satoshi600 text-[14px] leading-[19.12px] py-[10px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                        <searchIcon class="absolute top-2 left-2 cursor-pointer"/>
                    </div>
            </div>
          
        <BaseTab>
            <template #tab1>
                Payout pending <span class="bg-[#2C2B6C] rounded-[2px] text-white p-[4px] py-[2px]">4</span>
            </template>
            <template #tab2>
                Card pending
            </template>


            <template #view1>
              <DataTable class="bg-white" :columns="columns" :rows="rows" />
            </template>
            <template #view2>
                <!-- <DataTable /> -->
            </template>
        </BaseTab>

        <!-- <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Pending Transactions</h3>
                <div class="flex lg:flex-row flex-col gap-3">
                    <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 py-[10px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                    <button class="p-4 border-brand border-[2px] py-[10px] text-brand rounded-[4px]">Export</button>
                </div>
        </div> -->
            <!-- <DataTable class="bg-white mx-4" :columns="columns" :rows="rows" /> -->
    </div>

    </div>
    </Layout>
  </main>
</template>
