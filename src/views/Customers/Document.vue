<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from "./FormComponent/DataTable.vue";
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'
import customerStore from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { onMounted } from 'vue';

const store = customerStore();
const { customer } = storeToRefs(store);

onMounted(async ()=>{
    await store.getCustomer();
    console.log(customer)
})



</script>

<template>
  <main>
    <Layout>
    <div class="lg:px-6 px-3 pt-8 grid grid-rows gap-4 ">
        <div class="flex items-center my-4 gap-[2px]">
            <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
            <ArrowLeft />
            <router-link :to="{name:'AllCustomers'}" class="font-Satoshi500 text-[14px] leading-[18.9px]">Customer</router-link>
            <ArrowLeft />
            <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Document</a>
        </div>
        <div class="bg-white py-8 rounded-[8px] min-h-[100vh] relative px-4">
            <div class="flex lg:flex-row flex-col gap-3 justify-between mb-4">
                <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Document</h3>
            </div>
            <DataTable v-if="customer.id" />
        </div>
    </div>
    </Layout>
  </main>
</template>
