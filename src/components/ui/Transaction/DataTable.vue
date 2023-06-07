<script setup>
import ThreeDotsIcon from '@/assets/img/icons/threeDotsIcon.vue'
const props = defineProps({
    rows: {
        type: Array,
        required: true,
    },
    message: {
        type: String,
    },
    links:{
        type: Object
    },
    meta:{
        type: Object
    }
});
</script>

<template>
    <table class="table-auto w-full">
        <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
            <tr class="text-left text-[14px]">
            <th class="text-left py-4 pl-4">User</th>
            <th class="text-left">Status</th>
            <th class="text-left">Payment ID</th>
            <th class="text-left">Reference</th>
            <th class="text-left">Balance</th>
            <th class="text-left">Type</th>
            <th class="text-left">Amount</th>
            </tr>
        </thead>
        <tbody v-if="!rows.length">
            <tr class="border-b text-[14px]">
              <td :colspan="7"  class="text-center p-4 capitalize">
                  {{ message }}
              </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr class="border-b  text-[14px]">
                <td class="py-4 pl-4">Peter Andrew</td>
                <td class="text-[#FFCC00]">PENDING</td>
                <td class="">TRYBPAY2743</td>
                <td>PAYOUT</td>
                <td class="">£20.00</td>
                <td class="">Sent from Tryba</td>
                <td class="">£78.00</td>
            </tr>
            <tr class="border-b text-[14px]">
                <td class="py-4 pl-4">Peter Andrew</td>
                <td class="text-[#FFCC00]">PENDING</td>
                <td class="">TRYBPAY2743</td>
                <td>PAYOUT</td>
                <td class="">£20.00</td>
                <td class="">Sent from Tryba</td>
                <td class="">£78.00</td>
            </tr>
        </tbody>
    </table>  
</template>

