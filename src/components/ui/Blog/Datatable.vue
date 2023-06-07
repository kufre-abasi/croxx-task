<template>
    <div>
        <table class="table-auto w-full">
            <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
                <tr class="text-left text-[14px]">
                    <th v-for="col in columns" :key="col" class="text-left py-4 pl-4 pr-8">{{ col }}</th>
                </tr>
            </thead>
            <tbody v-if="rows.data.length" >
                <tr v-for="blog in rows.data" :key="blog" class="border-b text-[14px]">
                    <td class="text-left py-4 pl-4 pr-8">{{ blog.title }}</td>
                    <td class="py-4 pl-4 pr-8">{{  blog.blog_category }}</td>
                    <td class="w-72  py-4 pl-4 pr-8">{{  blog.blog_description }}</td>
                    <td class="text-[#00EE98] py-4 pl-4 pr-8">{{ blog.comments.length }}</td>
                    <td class="text-[#00EE98]  py-4 pl-4 pr-8">{{ blog.like_count }}</td>
                    <td>{{ dayjs(blog.created_at).format("DD MMMM YYYY HH:mm:ss") }}</td>
                    <td class="text-center cursor-pointer relative pr-4">
                        <ThreeDotsIcon @click="toggleDropdown(blog)" />
                        <Dropdown
                            v-if="showDropdownItem.id == blog.id && showDropdownToggle"  
                            :showDropdown="showDropdownItem.id == blog.id && showDropdownToggle" 
                            :link="false"
                            class="-bottom-14 w-36 z-10 -left-24"
                            :items="items"
                            :id="`dropdown`+ blog.id"
                            @closeDropdown="closeDropdown"
                            @clickedItem="clickedItem"
                        />
                    </td>
                </tr>
            </tbody>
            <tbody v-if="!rows.data.length">
                <tr class="border-b text-[14px]">
                    <td :colspan="6"  class="text-center p-4 capitalize">
                        {{ message }}
                    </td>
                </tr>
            </tbody>
        </table>  
  
      <div v-if="rows.data" class="flex items-center gap-6 place-content-center mt-4 mx-auto ">
          <button :disabled="!links.prev" @click="prev" class="border-[1px] text-sm rounded-md py-1 px-2">Previous</button>
          <div>
            <span class="place-self-center px-2 bg-brand py-1 text-white rounded cursor-pointer">{{ meta.current_page }}</span>
            <span v-if="links.next" class="place-self-center px-2 py-1 cursor-pointer">{{ meta.current_page + 1 }}</span>
          </div>  
          <button :disabled="!links.next" @click="next" class="border-[1px] text-sm rounded-md py-1 px-2">Next</button>
      </div>
    </div>
    <Modal v-if="showDeleteModal" title="Delete blog" @closeModal="toogleDeleteModal">
        <div class="mb-4">
            Are you sure you want to delete this blog? once deleted it cannot be recovered
        </div>
        <div class="flex justify-end gap-4">
            <div>
                <button @click="deleteBlog" class="bg-red-500 text-gray-100 px-4 py-2 rounded">
                    <ButtonPreloader v-if="buttons[0]"/>
                    <span v-if="!buttons[0]">Delete</span>
                </button>
            </div>
        </div>
    </Modal>

</template>
  
<script setup >
    import dayjs from 'dayjs';
    import ThreeDotsIcon from '@/assets/img/icons/threeDotsIcon.vue'
    import Dropdown from "@/components/ui/Dropdown/Dropdown.vue";
    import { reactive, ref } from 'vue';
    import Modal from "@/components/ui/Modal.vue";
    import blogService from "@/services/Blog.js";
    import { useRouter } from 'vue-router';
    import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
    import useBlog from '@/stores/blog';
    import { storeToRefs } from 'pinia';

    const store = useBlog();
    const { allBlogs } = storeToRefs(store);

    const router  = useRouter();
    const showDropdownToggle = ref(false);
    const showDropdownItem = ref({});
    const showDeleteModal = ref(false);
    const deleteItem =  ref({});
    const buttons = reactive([ false ])
    const items = ref([
        {
            name:"view",
            context:"Update Blog"
        },
        {
            name:"view",
            context:"Delete Blog"
        }
    ])
    const emit = defineEmits(['previous', 'next'])
    const props = defineProps({
        rows: {
            type: Object,
            required: true,
        },
        columns:{
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

    const toggleDropdown = (blog) => {
        if(showDropdownItem.value.id == blog.id){
            return showDropdownToggle.value = !showDropdownToggle.value 
        }

        showDropdownItem.value = blog;
    }

    const closeDropdown = () => {
        showDropdownToggle.value = false;
    }

    const toogleDeleteModal = () => {
        showDeleteModal.value = !showDeleteModal.value;
        deleteItem.value = showDropdownItem.value
    }

    const clickedItem = (link) => {
        if(link.context == "Update Blog"){
            router.push({
                name: 'UpdateBlog',
                params:{
                    id: showDropdownItem.value.slug
                }
            })
        }

        if(link.context == "Delete Blog"){
            toogleDeleteModal()
        }
    }

    const deleteBlog = async () => {

        buttons[0] = true;

        try {
            await blogService.deleteBlog(deleteItem.value.slug)
            toogleDeleteModal();
            allBlogs.value.data = allBlogs.value.data.filter(item => item.id != deleteItem.value.id);
            
        } catch (error) {
            console.log(error)
        }
        finally{
            buttons[0] = false;
        }
    }


</script>
  
  