<template>
  <div class="table-container overflow-x-scroll">
    <table class="table-auto w-full">
      <thead class=" bg-[#F9FBFF] text-[#A8AABC]  font-Satoshi700 text-[14px]">
        <tr>
          <th class="py-4 pl-6 flex"><input class="mr-2 outline-none" type="checkbox" name="" id="">S/N</th>
          <th class="text-left p-4 pr-0 px-6 capitalize" v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row" class="border-b font-Satoshi500 text-[14px]">
          <td class="py-4 pl-6"><input class="mr-2 outline-none" type="checkbox" name="" id="">{{ row.id }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.reference }}</td>
          <td class="text-left p-4 pr-0 pl-6 " >{{ row.sender }}</td>
          <td class="text-left p-4 pr-0 pl-6 " >{{ row.due }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.sendDate }}</td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.amount }}</td>
          <td class="text-left p-4 pr-0 pl-6 uppercase " ><span class="text-[#FFCC00] bg-[#FDF9EA] rounded-[25px] p-2">{{ row.status }}</span></td>
          <td class="text-left p-4 pr-0 pl-6 capitalize" >{{ row.Sent }}</td>
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
