<script setup>
import Layout from "@/components/layout/Dashboard.vue";
import Profile from './Form/Profile.vue';

</script>

<template>
  <main>
    <Layout>
      <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
          <div class="bg-white  py-8 rounded-[8px] min-h-[100vh] relative px-12">
              <Profile />
          </div>
    </div>
    </Layout>
  </main>
</template>
