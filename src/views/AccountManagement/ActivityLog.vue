<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from '@/components/ui/AccountManagement/ActivityLog/DataTable.vue';
import searchIcon from '@/assets/img/icons/searchIcon.vue';
import customer from "@/stores/customer" 
import { storeToRefs } from "pinia";

const store = customer();
const { allActivity } = storeToRefs(store);

const message = ref("Loading")
onMounted(async() => { 
    await store.getAllActivity()
    message.value = "No data found"
})

const prev = async (page) => {
  await store.getAllActivity(page)
}

const next = async (page) => {
  await store.getAllActivity(page)
}


</script>
<template>
  <main>
    <Layout>
      <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
          <div class="bg-white  py-6 rounded-[8px] min-h-[100vh] relative">
          <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
              <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Activities</h3>
              <div class="flex lg:flex-row flex-col gap-3 relative">
                  <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 pl-8 font-Satoshi600 text-[14px] leading-[19.12px] py-[10px] rounded-[4px]" type="search" placeholder="search" name="" id="">
                  <searchIcon class="absolute top-2 left-2 cursor-pointer"/>
              </div>
          </div>
          <DataTable 
            :rows="allActivity.data" 
            :meta="allActivity.meta" 
            :links="allActivity.links"
            :message="message" 
            @previous="prev"
            @next="next"
          
          /> 
      </div>

      </div>
    </Layout>
  </main>
</template>
