<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from '@/components/ui/AccountManagement/SupportTicket/DataTable.vue';
import searchIcon from '@/assets/img/icons/searchIcon.vue';

const columns = ref([
  'name',
  'ticket ID',
  'reference',
  'status',
  'created',
  'updated',
  'more',
]);

const rows = ref([
{
    id: '1',
    name: 'Peter Abutu',
    ticketID: 'DIS-N5K3JP',
    reference: '70612465377',
    status: 'CLOSED',
    created: '2023-02-19 12:28:16',
    updated: '2023-02-19 12:28:16',
  },
  {
    id: '2',
    name: 'Abdur-rasheed Idris',
    ticketID: 'DIS-N5K3JP',
    reference: '70612465377',
    status: 'CLOSED',
    created: '2023-02-19 12:28:16',
    updated: '2023-02-19 12:28:16',
  },
]);


</script>

<template>
  <main>
    <Layout>
        <!-- <div class="bg-white  py-6 rounded-[8px] min-h-[100vh] relative"> -->

    <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
        <div class="bg-white  py-6 rounded-[8px] min-h-[100vh] relative">
        <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Support ticket</h3>
                <div class="flex lg:flex-row flex-col gap-3">
                    <div class="flex lg:flex-row flex-col gap-3 relative">
                        <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 pl-8 font-Satoshi600 text-[14px] leading-[19.12px] py-[10px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                        <searchIcon class="absolute top-3 left-2 cursor-pointer"/>
                    </div>
                    <button class="p-4 border-brand border-[2px] py-[10px] text-brand rounded-[4px]">Export</button>
                </div>
        </div>
            <DataTable class="bg-white mx-4" :columns="columns" :rows="rows" />
    </div>

    </div>
    </Layout>
  </main>
</template>
