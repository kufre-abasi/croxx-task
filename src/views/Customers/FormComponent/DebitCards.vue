<script setup>
import customer from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from 'vue';

const store = customer();
const { customerCards } = storeToRefs(store);

const message = ref("Loading")
onMounted(async() => { 
    try {
        await store.getCustomerCards()
    } catch (error) {
        
    }
    finally{
        message.value = "No data found"
    }
})

</script>


<template>
    <div>
    <table class="table-auto w-full">
        <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
            <tr class="text-left  text-[14px]">
            <th class="text-left py-4 pl-4">User</th>
            <th class="text-left">Card ID</th>
            <th class="text-left">Type</th>
            <th class="text-left">Format</th>
            <th class="text-left">Available balance</th>
            <th class="text-left">Account Number</th>
            <th class="text-left">Amount spent</th>
            </tr>
        </thead>
        <tbody v-if="!customerCards.data.length">
            <tr class="border-b text-[14px]">
                <td colspan="7" class="py-4 text-center pl-4">{{ message }}</td>
                
            </tr>
        </tbody>
        <tbody v-else>
            <tr class="border-b text-[14px]">
                <td class="py-4 pl-4">Peter Andrew</td>
                <td>V12000V490</td>
                <td class="">Physical</td>
                <td>BUSINESS</td>
                <td class="">£20.00</td>
                <td class="">1234567890</td>
                <td class="">£230.00</td>
            </tr>
            <tr class="border-b text-[14px]">
                <td class="py-4 pl-4">Peter Andrew</td>
                <td>V12000V490</td>
                <td class="">Physical</td>
                <td>BUSINESS</td>
                <td class="">£20.00</td>
                <td class="">1234567890</td>
                <td class="">£230.00</td>
            </tr>
        </tbody>
    </table>  

    </div>
</template>
