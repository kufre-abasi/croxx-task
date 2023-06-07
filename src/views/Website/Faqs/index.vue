<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from '@/components/ui/Faq/Datatable.vue';
import useFaq from '@/stores/faqs';
import { storeToRefs } from 'pinia';
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'

const store = useFaq();
const { allFaqs } = storeToRefs(store);
const message = ref("Loading")


onMounted(async() => { 
    await store.getAllFaqs()
    message.value = "No data found"
})

 
const columns = ref([
    'Tite',
    'Body',
    'Created',
    'Action'
]);

const prev = async (page) => {
  await store.getAllFaqs(page)
}

const next = async (page) => {
  await store.getAllFaqs(page)
}

</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
          <div class="flex items-center my-4 gap-[2px]">
              <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
              <ArrowLeft />
              <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">FAQs</a>
          </div>
          <div class="bg-white  py-8 rounded-[8px] min-h-[100vh] relative px-2">
            <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Frequently asked question</h3>
                <div>
                  <router-link :to="{ name:'FAQCreate' }" class="btn my-4 !px-16">Create FAQs</router-link>    
                </div>
            </div>
            <DataTable 
                :message="message" 
                :columns="columns" 
                :meta="allFaqs.meta" 
                :rows="allFaqs" 
                :links="allFaqs.links" 
                @previous="prev"
                @next="next"
            />
        </div>
    </div>
    </Layout>
  </main>
</template>
