<template>
  <div>
    <table class="table-auto w-full">
      <thead class=" bg-[#F9FBFF] text-[#A8AABC] text-[14px]">
          <tr>
            <th class="py-4 pl-4 flex"><input class="mr-2 outline-none" type="checkbox" name="" id="">S/N</th>
            <th class="text-left p-4 pr-0 px-6 capitalize" v-for="column in columns" :key="column">{{ column }}</th>
          </tr>
        </thead>
        <tbody v-if="rows.length" >
            <tr v-for="user,index in rows" :key="user" class="border-b text-[14px]">
                <td class="py-4 pl-4"><input class="mr-2 outline-none" type="checkbox" name="" id="">{{ index + 1 }}</td>
                <td><router-link :to="{ name:'ManageCustomer',params:{ id: user.slug }}" class="underline text-brand">{{ user.first_name }} {{ user.last_name  }}</router-link></td>
                <td class="text-left capitalize ">{{  user.account_type }}</td>
                <td>{{  user.email }}</td>
                <td>{{  user.phone_number }}</td> 
                <td class="text-[#00EE98]">{{ user.verification_status }}</td>
                <td>{{ dayjs(user.created_at).format("DD MMMM YYYY HH:mm:ss") }}</td>
                <td class="text-center cursor-pointer relative pr-4">
                    <ThreeDotsIcon @click="toogleUser(user)" />
                    <Dropdown
                        v-if="showUser.id == user.id && showUserToggle"  
                        :showDropdown="showUser.id == user.id && showUserToggle" 
                        :link="false"
                        class="-bottom-14 w-36 z-10 -left-24"
                        :items="items"
                        :id="`dropdown`+ user.id"
                        @closeDropdown="closeDropdown"
                        @clickedItem="clickedItem"
                    />
               </td>
            </tr>
        </tbody>
        <tbody v-if="!rows.length">
          <tr class="border-b text-[14px]">
            <td :colspan="columns.length + 1"  class="text-center p-4 capitalize">
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
import ThreeDotsIcon from '@/assets/img/icons/threeDotsIcon.vue'
import { ref } from 'vue';
import Dropdown from "@/components/ui/Dropdown/Dropdown.vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const showUser = ref({});
const showUserToggle = ref(false);


const items = ref([
    {
        name:"view",
        context:"View Document"
    }
])


const emit = defineEmits(['previous', 'next'])
const props = defineProps({
     columns: {
          type: Array,
          required: true,
     },
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

const closeDropdown = () => {
    showDocumentToggle.value = false;
}

const clickedItem = (link) => {
   	 if(link.context == "View Document"){
		router.push({
			name:"ManageDocument",
			params:{
				id: showUser.value.slug
			}
		});
    	}
}

const toogleUser = (user) => {

	if(showUser.value.id == user.id){
	return showUserToggle.value = !showUserToggle.value 
	}

	showUser.value = user
	showUserToggle.value = true

}

</script>




