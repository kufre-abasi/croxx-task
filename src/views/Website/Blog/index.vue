<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import searchIcon from '@/assets/img/icons/searchIcon.vue';
import DataTable from '@/components/ui/Blog/Datatable.vue';
import useBlog from '@/stores/blog';
import { storeToRefs } from 'pinia';
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'

const store = useBlog();
const { allBlogs } = storeToRefs(store);
const message = ref("Loading")


onMounted(async() => { 
    await store.getBlog()
    message.value = "No data found"
})

 
const columns = ref([
    'Tite',
    'Category',
    'Description',
    'Comments',
    'Likes',
    'Created',
    'Action'
]);

const prev = async (page) => {
  await store.getBlog(page)
}

const next = async (page) => {
  await store.getBlog(page)
}

</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
          <div class="flex items-center my-4 gap-[2px]">
              <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
              <ArrowLeft />
              <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Blogs</a>
          </div>
          <div class="bg-white  py-8 rounded-[8px] min-h-[100vh] relative px-2">
            <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Blog</h3>
                <div>
                  <router-link :to="{ name:'CreateBlog' }" class="btn my-4 !px-16">Create blog</router-link>    
                </div>
            </div>
            <DataTable 
                :message="message" 
                :columns="columns" 
                :meta="allBlogs.meta" 
                :rows="allBlogs" 
                :links="allBlogs.links" 
                @previous="prev"
                @next="next"
            />
        </div>
    </div>
    </Layout>
  </main>
</template>
