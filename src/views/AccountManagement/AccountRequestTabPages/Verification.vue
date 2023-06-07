<template>
    <div>
        <div class=" overflow-x-scroll  hide-scrollbar">
            <DataTable 
              :message="message" 
              :columns="columns" 
              :rows="allCustomers.data" 
              :links="allCustomers.links" 
              :meta="allCustomers.meta" 
              @previous="prev"
              @next="next"
          />
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import DataTable from '@/components/ui/AccountManagement/AccountRequest/DataTable.vue';
  import { storeToRefs } from "pinia";
  import customer from "@/stores/customer" 
  const store = customer();
  
 const columns = ref([
    'Name',
    'Account type',
    'Email',
    'Phone number',
    'Status',
    'Created',
    'Action'
]);
  
  const { allCustomers } = storeToRefs(store);
  const message = ref("Loading")
  
  onMounted(async() => { 
  await store.getAllCustomers(1,'verification')
  message.value = "No data found"
  })
  
  const prev = async (page) => {
  message.value = "Loading"
  await store.getAllCustomers(page,'verification')
  message.value = "No data found"
  }
  
  const next = async (page) => {
  message.value = "Loading"
  await store.getAllCustomers(page,'verification')
  message.value = "No data found"
  }
  </script>