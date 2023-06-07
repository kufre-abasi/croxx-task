<template>
    <div class="bg-white py-6 rounded-lg">
        <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
            <!-- <h3 class="font-Saroshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">{{ store.customerTableTitle }}</h3> -->
            <div class="flex lg:flex-row flex-col gap-3">
                <select class="border-[1px] border-gray-200 px-6 py-[12px] bg-[#f6f6f6] rounded-[4px] " name="" id="">
                    <option >All Status</option>
                    <option value="ACTIVE">Active</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 py-[12px] rounded-[4px]" type="search" placeholder="Search" name="" id="">
                <button class="p-4 bg-brand py-[12px] text-white rounded-[4px]">Add to watch list</button>
            </div>
        </div>
        <div class=" overflow-x-scroll  hide-scrollbar">
            <DataTable :columns="columns" :message="message" :rows="rows" />
        </div>


        <div v-if="rows" class="flex items-center gap-6 place-content-center mt-4 mx-auto ">
            <button :disabled="!links.prev" @click="prev" class="border-[1px] text-sm rounded-md py-1 px-2">Previous</button>
            <div>
            <span class="place-self-center px-2 bg-brand py-1 text-white rounded cursor-pointer">{{ meta.current_page }}</span>
            <span v-if="links.next" class="place-self-center px-2 py-1 cursor-pointer">{{ meta.current_page + 1 }}</span>
            </div>  
            <button :disabled="!links.next" @click="next" class="border-[1px] text-sm rounded-md py-1 px-2">Next</button>
        </div>
    </div>    
</template>

<script setup>
import DataTable from './DataTable.vue';
import { computed, reactive, ref } from 'vue';

const emit = defineEmits(['previous', 'next'])
const columns = ref([
  'name',
  'plan',
  'balances',
  'monthly Income',
  'monthly Amount',
  'expiring Date',
]);

const props = defineProps(['customers','message'])

const rows = computed(()=>{
    return props.customers.data
})

const links = computed(()=>{
    return props.customers.links
})

const message = computed(()=>{
    return props.message
})

const meta = computed(()=>{
    return props.customers.meta
})

const prev = ()=>{
    emit('previous',  props.customers.meta.current_page - 1)
}

const next = ()=>{
    emit('next', props.customers.meta.current_page + 1)
}

</script>

<style>
thead{
    padding: 20px 0px !important;
}
</style>