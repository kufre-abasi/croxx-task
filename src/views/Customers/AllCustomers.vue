<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import CardGrid from "@/components/ui/Customers/CardGrid.vue";
import DataTable from "@/components/ui/Customers/Table.vue";
import { onMounted, ref } from "vue";
import customer from "@/stores/customer";
import { storeToRefs } from "pinia";

const store = customer();
const { allCustomers } = storeToRefs(store);
const message = ref("Loading");
onMounted(async () => {
  await store.getAllCustomers();
  message.value = "No data found";
});

const prev = async (page) => {
  message.value = "Loading";
  await store.getAllCustomers(page);
  message.value = "No data found";
};

const next = async (page) => {
  message.value = "Loading";
  await store.getAllCustomers(page);
  message.value = "No data found";
};
</script>

<template>
  <main>
    <Layout>
      <div class="lg:px-6 px-3 pt-8 grid grid-rows gap-4">
        <div class="chart hidden bg-white rounded-[8px] min-h-[100vh] p-4"></div>
        <DataTable
          :customers="allCustomers"
          @previous="prev"
          @next="next"
          :message="message"
        />
      </div>
    </Layout>
  </main>
</template>
