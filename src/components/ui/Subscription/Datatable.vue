<template>
    <div class="table-container overflow-x-scroll">
      <table class="table-auto w-full">
        <thead class=" bg-[#F9FBFF] text-[#A8AABC]  font-Satoshi700 text-[14px]">
          <tr>
            <th class="py-4 pl-6 flex">S/N</th>
            <th class="text-left p-4 pr-0 px-6 capitalize" v-for="column in columns" :key="column">{{ column }}</th>
          </tr>
        </thead>
        <tbody v-if="rows.length">
          <tr v-for="row,index in rows" :key="row" class="border-b font-Satoshi500 text-[14px]">
            <td class="py-4 pl-6">{{ index + 1 }}</td>
            <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.name }}</td>
            <td class="text-left p-4 pr-0 pl-6 uppercase"> {{  row.amount  }} </td>
            <td class="text-left p-4 pr-0 pl-6 capitalize">{{ row.duration }} {{ row.duration_type }} </td>
            <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.account_type }}</td>
            <td class="text-left p-4 pr-0 pl-6 capitalize" >
              {{ dayjs(row.created_at).format('MMMM DD YYYY') }}
            </td>
            <td class="text-center cursor-pointer relative pr-4">
              <ThreeDotsIcon @click="toogleDropdown(row)" />
              <Dropdown v-if="showDropdown && selectedPlan.id == row.id"  
              :showDropdown="showDropdown && selectedPlan.id == row.id" 
              :link="false"
              class="-bottom-14 w-36 z-10 -left-24"
              :items="items"
              @closeDropdown="toogleDropdown(row)"
              @clickedItem="clickedItem"
              />
          </td>
          </tr>
        </tbody>
        <tbody v-if="!rows.length">
            <tr class="border-b font-Satoshi500 text-[14px]">
                <td :colspan="columns.length" class="text-center p-4 pr-0 pl-6 capitalize" >{{ message }}</td>
            </tr>
          </tbody>
      </table>
    </div>
  </template>
  
  <script setup >
  import dayjs from "dayjs"
  import Dropdown from "@/components/ui/Dropdown/Dropdown.vue";
  import ThreeDotsIcon from '@/assets/img/icons/threeDotsIcon.vue'
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const showDropdown = ref(false);
  const selectedPlan = ref({})
  const props = defineProps({
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    message:{
        type: String,
        required: true,
    }
  });
  const items = ref([
    {
        name:"update",
        context:"Update"
    }
  ])

  const clickedItem = (link) => {
    if(link.context == "Update"){
        router.push({
          name:"UpdateSubscriptionPlan",
          params:{
            id: selectedPlan.value.slug
          }
        })
    }
  }

  const toogleDropdown = (plan) => {
    showDropdown.value = !showDropdown.value

    if(showDropdown.value){
      return selectedPlan.value = plan
    }
    return selectedPlan.value = {}
  }

  </script>
  
  <style>
  .table-container {
    overflow-x: auto;
  }
  .table {
    min-width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
  }
  .table thead tr th {
    padding: 0.5rem;
    text-align: left;
    font-weight: bold;
    border-bottom: 1px solid #d2d6dc;
  }
  .table tbody tr td {
    padding: 0.5rem;
    border-bottom: 1px solid #d2d6dc;
  }
  </style>
  