<script setup>
import customerStore from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { computed, onMounted, reactive, ref } from 'vue';
import customerServices from '@/services/Customer.js';
import { useRoute } from "vue-router";

const route = useRoute()
const store = customerStore();
const { customerAccounts } = storeToRefs(store);
const message = ref("Loading")

onMounted(async() => { 
  await store.getcustomerAccounts()
  message.value = "No data found"
})

</script>
<template>
    <div>
        <table class="table-auto w-full">
            <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
                <tr class="text-left text-[14px]">
                    <th class="text-left py-4 pl-4">Account ID</th>
                    <th class="text-left">Status</th>
                    <th class="text-left">Currency</th>
                    <th class="text-left">Balances</th>
                    <th class="text-left">Account Number</th>
                    <th class="text-left">Sort code</th>
                    <th class="text-left">IBAN</th>
                    <th class="text-left">BIC</th>
                </tr>
            </thead>
            <tbody v-if="customerAccounts.data.length">
                <tr v-for="row in customerAccounts.data" :key="row" class="border-b text-[14px]">
                    <td class="py-4 pl-4">{{ row.accountId }}</td>
                    <td>
                        <span v-if="row.status" class="px-6 py-1 bg-green-500 rounded-full text-gray-100" >
                            Active
                        </span>
                        <span v-else class="px-6 py-1 bg-red-500 rounded-full  text-gray-100">
                            Not Active
                        </span>
                    </td>
                    <td>{{ row.currency }}</td>
                    <td class="">{{ row.balance }}</td>
                    <td>{{ row.accountNumber }}</td>
                    <td>{{ row.sortCode }}</td>
                    <td>{{ row.iban }}</td>
                    <td>{{ row.bic }}</td>
                </tr>
            </tbody>
            <tbody v-if="!customerAccounts.data.length">
                <tr class="border-b text-[14px]">
                    <td :colspan="8" class="py-4 pl-4 text-center">{{ message }}</td>
                </tr>
            </tbody>
        </table>  

    </div>
</template>
