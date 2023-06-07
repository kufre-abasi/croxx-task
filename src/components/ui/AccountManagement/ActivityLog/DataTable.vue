<template>
  <div>
    <table class="table-auto w-full">
        <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
            <tr class="text-left text-[14px]">
            <th class="text-left py-4 pl-4 pr-8">Time</th>
            <th class="text-left">Action</th>
            <th class="text-left">Message</th>
            <th class="text-left">Status</th>
            <th class="text-left">Date created</th>
            </tr>
        </thead>
        <tbody v-if="rows.length" >
            <tr v-for="activity in rows" :key="activity" class="border-b text-[14px]">
                <td class="py-4 pl-4"> <AccessIcon /></td>
                <td>{{ activity.action }}</td>
                <td>{{  activity.message }}</td>
                <td class="text-[#00EE98]">{{ activity.status }}</td>
                <td>{{ dayjs(activity.created_at).format("DD MMMM YYYY HH:mm:ss") }}</td>
            </tr>
        </tbody>
        <tbody v-if="!rows.length">
          <tr class="border-b text-[14px]">
            <td :colspan="6"  class="text-center p-4 capitalize">
                {{ message }}
            </td>
          </tr>
        </tbody>
    </table>  

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

<script setup >
import dayjs from 'dayjs';
import AccessIcon from '@/assets/img/icons/accessIcon.vue';

const emit = defineEmits(['previous', 'next'])
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

const prev = ()=>{
    emit('previous',  props.meta.current_page - 1)
}

const next = ()=>{
    emit('next', props.meta.current_page + 1)
}



</script>

