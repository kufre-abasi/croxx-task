<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import CardGrid from "@/components/ui/Customers/CardGrid.vue";
import DataTable from "@/components/ui/Customers/Table.vue";
import Customers from "@/services/Customer.js"
import { onMounted, ref } from "vue";

const customers = ref({
  data:[],
  links:{},
  meta:{}
});

const getAllCustomers = async () => {
  customers.value = await Customers.getAllCustomers();
}


onMounted(async() => {
  await getAllCustomers()
})

</script>

<template>
  <main>
    <Layout>
    <!-- <h1 class="text-gray-600 text-[100px] center text-center">All cstomers</h1> -->
    <div class="lg:px-6 px-3 pt-8 grid grid-rows gap-4">
      <CardGrid />
      <DataTable :customers="customers"/>
    </div>
    </Layout>
  </main>
</template>
