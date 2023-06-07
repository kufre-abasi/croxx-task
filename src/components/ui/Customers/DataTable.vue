<template>
  <div class="table-container overflow-x-scroll">
    <table class="table-auto w-full">
      <thead class=" bg-[#F9FBFF] text-[#A8AABC] text-[14px]">
        <tr>
          <th class="py-4 pl-4 flex"><input @change="checkAllIds" v-model="checkedAllBox"  class="mr-2 outline-none" type="checkbox" name="" id="">S/N</th>
          <th class="text-left p-4 pr-0 px-6 capitalize" v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </thead>
      <tbody v-if="rows.length">
        <tr v-for="row,index in rows" :key="row" class="border-b text-[14px]">
          <td class="py-4 pl-4"><input class="mr-2 outline-none" v-model="watchListIds" type="checkbox" :value="row.id">{{ index + 1}}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize"> <router-link :to="{ name:'ManageCustomer',params:{ id: row.slug }}">{{ row.first_name }} {{ row.last_name }}</router-link></td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ (row.plan) ? row.plan : 'Not active' }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ (row.balances) ? row.balances : 'Not active' }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ (row.monthlyIncome) ? row.monthlyIncome : 'Not active' }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ (row.monthlyIncome) ? row.monthlyIncome : 'Not active'  }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ (row.plan) ? row.plan : 'Not active'  }}</td>
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
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const watchListIds = ref([]);
const checkedAllBox = ref(false)
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
      type: String
    }
})


const checkAllIds = () => {
  if(checkedAllBox.value){
    watchListIds.value = []
    return props.rows.forEach(element => {
      watchListIds.value.push(element.id)
    });
  }

  watchListIds.value = []
  
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
