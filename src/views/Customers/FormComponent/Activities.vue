<script setup>
import DataTable from '@/components/ui/AccountManagement/ActivityLog/DataTable.vue';
import customer from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from 'vue';

const store = customer();
const { allCustomerActivity } = storeToRefs(store);

const message = ref("Loading")
onMounted(async() => { 
    await store.getCustomerActivity()
    message.value = "No data found"
})



</script>
<template>
    <DataTable 
        :rows="allCustomerActivity.data" 
        :meta="allCustomerActivity.meta" 
        :links="allCustomerActivity.links"
        :message="message" />
</template>
