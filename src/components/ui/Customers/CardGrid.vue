<template>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
       <Card class=" rounded-[8px] p-4"  v-for="detail in details" :key="detail" :style="{backgroundColor:detail.bgColor}" >
        <template #icon>
            <img :src="detail.icon" alt="">
        </template>
        <template #title>
            <span>{{ detail.content }}</span>
        </template>
        <template #amount>
            {{ detail.count }}
        </template>
       </Card>
    </div>
</template>

<script setup>
import Card from './Card.vue'
import Eruo from '@/assets/img/eruo.svg'
import Customers from '@/assets/img/customers.svg'
import VerifiedUsers from '@/assets/img/verifiedusers.svg'
import Pending from '@/assets/img/pending.svg'
import Rejected from '@/assets/img/rejected.svg'
import Active from '@/assets/img/active.svg'
import { onMounted, ref } from 'vue'
import analytics from "@/stores/analytics"

const details = ref([
    {
        content: "Total transactions",
        icon: Eruo,
        bgColor: "#2C2B6C",
        count: 0
    },
    {
        content: "Total Customers",
        icon: Customers,
        bgColor: "#7B61FF",
        count: 0
    },
    {
        content: "Verified customers",
        icon: VerifiedUsers,
        bgColor: "#06C270",
        count: 0
    },
    {
        content: "Pending Verification",
        icon: Pending,
        bgColor: "#FFCC00",
        count: 0
    },
    {
        content: "Blocked customers",
        icon: Rejected,
        bgColor: "#F50C40",
        count: 0
    },
    {
        content: "Active Customers",
        icon: Active,
        bgColor: "#00AFEF",
        count:0
    }
])
const store = analytics();
const message = ref("Loading")

const activeUser = async () => {

    let data  = await store.getCustomerActivity('active-total')

    details.value.map((item) => {
        if(item.content == "Active Customers"){
            item.count = data.data
        }
    })
}

const pendingUser = async () => {

    let data  = await store.getCustomerActivity('pending-total')

    details.value.map((item) => {
        if(item.content == "Pending Verification"){
            item.count = data.data
        }
    })
}


const blockedUser = async () => {

let data  = await store.getCustomerActivity('blocked-total')

details.value.map((item) => {
    if(item.content == "Blocked customers"){
        item.count = data.data
    }
})
}

const resubmitUser = async () => {

    let data  = await store.getCustomerActivity('resubmit-total')

    details.value.map((item) => {
        if(item.content == "Pending Verification"){
            item.count = data.data
        }
    })
}

onMounted(()=>{
    activeUser()
    pendingUser()
    blockedUser()
})

</script>

<style>

</style>
