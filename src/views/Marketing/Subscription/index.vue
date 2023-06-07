<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import searchIcon from '@/assets/img/icons/searchIcon.vue';
import DataTable from '@/components/ui/Subscription/Datatable.vue';
import subscriptionStore from '@/stores/subscription';
import { storeToRefs } from 'pinia';
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'
const store = subscriptionStore();
const { allPlans } = storeToRefs(store);
const message = ref("Loading")


onMounted(async() => { 
    await store.getAllPlans()
    message.value = "No data found"
})

 
const columns = ref([
  'Name',
  'Amount',
  'Duration',
  'Account type',
  'Created',
  ""
]);




</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
          <div class="flex items-center my-4 gap-[2px]">
              <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
              <ArrowLeft />
              <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Subscription</a>
          </div>
          <div class="bg-white  py-8 rounded-[8px] min-h-[100vh] relative px-2">
            <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Subscription Plans</h3>
                <div>
                  <router-link :to="{ name:'CreateSubscription' }" class="btn my-4 !px-16">Add Plan</router-link>    
                </div>
            </div>
            <DataTable :message="message" :columns="columns" :rows="allPlans.data" />
        </div>
    </div>
    </Layout>
  </main>
</template>
