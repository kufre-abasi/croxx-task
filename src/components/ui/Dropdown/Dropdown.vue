<script setup>
import { computed, onMounted } from "vue";

const emit = defineEmits(['closeDropdown','clickedItem'])

const onClickOutside = (element, callback) => {
  document.addEventListener('click', e => {
    let dropdown = document.getElementById(props.id);
    if (!dropdown.contains(e.target)) callback();
  });
};

const props = defineProps(['showDropdown','id','items','class','link'])
const id = props.id
const customClass = props.class

const showFeaturesDropdown = computed(() => props.showDropdown)


const clickedLink = (link) => {
    emit('clickedItem',link);
}

onMounted(() => {
    setTimeout(()=>{
        onClickOutside('#feature-dropdown', () => {
            if(showFeaturesDropdown.value == true){
                emit('closeDropdown',false);
            }   
        });
    },600);
})


</script>
<template>
    <div :id="id" :class="customClass" class="absolute bg-white rounded py-2 shadow-lg">
        <div v-if="link" >
            <ul v-for="link in items" :key="link" class="">
                <li>
                    <router-link :to="{ name: link.name }" class="text-left p-2 hover:bg-gray-100 w-full">
                        {{ link.context }}
                    </router-link>
                </li>
           </ul>
        </div>
        <div v-else>
            <ul v-for="link in items" :key="link" class="">
                <li>
                    <a @click="clickedLink(link)" href="javascript:void(0)" class="text-left p-2 hover:bg-gray-100 w-full">
                        {{ link.context }}
                    </a>
                </li>
           </ul>
        </div>
       
    </div>
</template>
