<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import customerStore from "@/stores/customer" 
import { storeToRefs } from "pinia";
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'

const route = useRoute()
const store = customerStore();
const { getAllAccounts } = storeToRefs(store);
const message = ref("Loading")

onMounted(async() => { 
    await store.getAccounts()
    message.value = "No data found"
})

const prev = () =>{
    store.getAccounts(getAllAccounts.meta.current_page - 1)
}
    
const next = ()=>{
    store.getAccounts(getAllAccounts.meta.current_page + 1)
}

</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
            <div class="flex items-center my-4 gap-[2px]">
                <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
                <ArrowLeft />
                <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Accounts</a>
            </div>
            <div class="bg-white py-8 rounded-[8px] min-h-[100vh] relative px-2">
                <div class="lg:px-6 px-3 pt-8 grid grid-rows gap-4">
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
                            <tbody v-if="getAllAccounts.data.length">
                                <tr v-for="row in getAllAccounts.data" :key="row" class="border-b text-[14px]">
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
                            <tbody v-if="!getAllAccounts.data.length">
                                <tr class="border-b text-[14px]">
                                    <td :colspan="8" class="py-4 pl-4 text-center">{{ message }}</td>
                                </tr>
                            </tbody>
                        </table>  
                        <div v-if="getAllAccounts.data" class="flex items-center gap-6 place-content-center mt-4 mx-auto ">
                            <button :disabled="!getAllAccounts.links.prev" @click="prev" class="border-[1px] text-sm rounded-md py-1 px-2">Previous</button>
                            <div>
                                <span class="place-self-center px-2 bg-brand py-1 text-white rounded cursor-pointer">{{ getAllAccounts.meta.current_page }}</span>
                                <span v-if="getAllAccounts.links.next" class="place-self-center px-2 py-1 cursor-pointer">{{ getAllAccounts.meta.current_page + 1 }}</span>
                            </div>  
                            <button :disabled="!getAllAccounts.links.next" @click="next" class="border-[1px] text-sm rounded-md py-1 px-2">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  </main>
</template>