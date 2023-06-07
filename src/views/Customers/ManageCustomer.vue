<script setup>
import BaseTabVue from '@/components/ui/BaseTab.vue';
import Layout from "@/components/layout/Dashboard.vue";
import DataTable from "./FormComponent/DataTable.vue";
import Profile from './FormComponent/Profile.vue';
import Activities from './FormComponent/Activities.vue';
import Account from './FormComponent/Account.vue';
import DebitCards from './FormComponent/DebitCards.vue';
import Subscriptions from './FormComponent/Subscriptions.vue';
import Transactions from './FormComponent/Transactions.vue';
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'
import customerStore from "@/stores/customer" 
import { storeToRefs } from "pinia";

const store = customerStore();
const { customer } = storeToRefs(store);
store.getCustomer()


</script>

<template>
  <main>
    <Layout>
    <div class="lg:px-6 px-3 pt-8 grid grid-rows gap-4 ">
        <div class="flex items-center my-4 gap-[2px]">
            <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
            <ArrowLeft />
            <router-link :to="{name:'AllCustomers'}" class="font-Satoshi500 text-[14px] leading-[18.9px]">Customer</router-link>
            <ArrowLeft />
            <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Manage customer</a>
        </div>
        <BaseTabVue>
            <template #tab1>
                Profile
            </template>
            <template #tab2>
                Document
            </template>
            <template #tab3>
                Account
            </template>
            <template #tab4>
                Debit cards
            </template>
            <template #tab5>
                Transactions
            </template>
            <template #tab6>
                Subscriptions
            </template>
            <template #tab7>
                Activities
            </template>


            <template #view1>
                <Profile :customer="customer" />
            </template>
            <template #view2>
                <DataTable />
            </template>
            <template #view3>
                <Account />
            </template>
            <template #view4>
                <DebitCards />
            </template>
            <template #view5>
                <Transactions />
            </template>
            <template #view6>
                <h3 class="text-[16px] font-Satoshi500  mb-3">Subscriptions</h3>
                <Subscriptions />
            </template>
            <template #view7>
                <Activities />
            </template>
        </BaseTabVue>
            </div>
    </Layout>
  </main>
</template>
