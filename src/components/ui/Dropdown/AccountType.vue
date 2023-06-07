<script >
import { computed, onMounted } from "vue";

const emit = defineEmits(['closeDropdown'])

const onClickOutside = (element, callback) => {
  document.addEventListener('click', e => {
    let dropdown = document.getElementById('account-type-dropdown');
    if (!dropdown.contains(e.target)) callback();
  });
};

const props = defineProps(['showAccountTypesDropdown'])

const showAccountTypesDropdown = computed(() => props.showAccountTypesDropdown)



onMounted(() => {
    setTimeout(()=>{
        onClickOutside('#account-type-dropdown', () => {
            if(showAccountTypesDropdown.value == true){
                emit('closeDropdown',false);
            }   
        });
    },600);
})


</script>
<template>
    <div id="account-type-dropdown" class="absolute -left-44 -bottom-[460px] bg-white lg:w-[655px] rounded-lg p-4  shadow-lg">
        <div class="grid grid-cols-2 gap-8">
          <router-link  class="dropdown-item">
            <div class="dropdown-menu-title">
              Personal
            </div>
            <div class="font-Satoshi400 text-xs">
                business
            </div>
          </router-link>
        </div>
      </div>
</template>