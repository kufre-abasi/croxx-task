<template>
    <table class="table-auto w-full mt-6">
        <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
            <tr class="text-left  text-[14px]">
                <th v-for="col in columns" :key="col" class="text-left py-4 pl-4">{{ col }}</th>
            </tr>
        </thead>
        <tbody v-if="!customerSubscription.data.length">
            <tr class="border-b text-[14px]">
                <td colspan="7" class="py-4 text-center pl-4">{{ message }}</td>
                
            </tr>
        </tbody>
        <tbody v-else>
            <tr v-for="row in customerSubscription.data" :key="row"  class="border-b text-[14px]">
                <td class="py-4 pl-4">{{ row.relationships.plan.name }}</td>
                <td class="py-4 pl-4">{{  dayjs(row.from).format("DD MMMM YYYY HH:mm:ss")  }}</td>
                <td class="py-4 pl-4">{{  dayjs(row.to).format("DD MMMM YYYY HH:mm:ss")  }}</td>
                <td class="py-4 pl-4">{{  row.status }}</td>
                <td class="py-4 pl-4">{{  dayjs(row.created_at).format("DD MMMM YYYY HH:mm:ss")  }}</td>
            </tr>
        </tbody>
    </table> 
    <div>
    </div>
</template>

<script setup>
import customer from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from 'vue';
import dayjs from 'dayjs';
const store = customer();
const { customerSubscription } = storeToRefs(store);

const columns = ref([
    'Plan name',
    'Start Date',
    'End Date',
    'Status',
    'Created'
])

const message = ref("Loading")
onMounted(async() => { 
    try {
        await store.getCustomerSubscription()
    } catch (error) {
        
    }
    finally{
        message.value = "No data found"
    }
})


</script>