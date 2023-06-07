<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from '@/components/ui/AccountManagement/Messages/DataTable.vue';
const columns = ref([
  'name',
  'subject',
  'email',
  'message',
  'created',
  'updated',
]);

const rows = ref([
{
    id: '1',
    name: 'Peter Abutu',
    subject: 'hello',
    email: 'hello@email.com',
    message: 'nice service',
    created: '2023-02-19 12:28:16',
    updated: '2023-02-19 12:28:16',
  },
  {
    id: '2',
    name: 'Abdur-rasheed Idris',
    subject: 'hello',
    email: 'hello@email.com',
    message: 'nice service',
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
            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Messages</h3>
                <!-- <div class="flex lg:flex-row flex-col gap-3">
                    <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 py-[10px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                    <button class="p-4 border-brand border-[2px] py-[10px] text-brand rounded-[4px]">Export</button>
                </div> -->
        </div>
            <DataTable class="bg-white mx-4" :columns="columns" :rows="rows" />
    </div>

    </div>
    </Layout>
  </main>
</template>
