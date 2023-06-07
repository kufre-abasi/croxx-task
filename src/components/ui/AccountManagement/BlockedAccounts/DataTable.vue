<template>
  <div class="table-container overflow-x-scroll">
    <table class="table-auto w-full">
      <thead class=" bg-[#F9FBFF] text-[#A8AABC]  font-Satoshi700 text-[16px]">
        <tr>
          <th class="py-4 pl-6 flex"><input class="mr-2 outline-none" type="checkbox" name="" id="">S/N</th>
          <th class="text-left p-4 pr-0 px-6 capitalize" v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row" class="border-b font-Satoshi500 text-[16px]">
          <td class="py-4 pl-6"><input class="mr-2 outline-none" type="checkbox" name="" id="">{{ row.id }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.name }}</td>
          <td class="text-left p-4 pr-0 pl-6 " >{{ row.email }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.note }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.accountNo }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.sortCode }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.dateBlocked }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup >
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
});
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
