<script setup>
import DataTable from "@/components/ui/Transaction/DataTable.vue" 
import customer from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from 'vue';

const store = customer();
const { customerTransactions } = storeToRefs(store);

const message = ref("Loading")
onMounted(async() => { 
    await store.getCustomerTransactions()
    message.value = "No data found"
})


</script>
<template>
    <DataTable 
        :rows="customerTransactions.data" 
        :meta="customerTransactions.meta" 
        :links="customerTransactions.links"
        :message="message" 
    />
</template>
