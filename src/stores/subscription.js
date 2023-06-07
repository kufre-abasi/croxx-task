import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import subscription from "../services/Subscription"
import { useRoute } from 'vue-router'

const subscriptionStore = defineStore('subscription', () => {

    const allPlans = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getAllPlans = async () => {
        allPlans.value = await subscription.getPlans();
        return allPlans.value
    }
  
    return {
        allPlans, 
        getAllPlans,
    }
})


export default subscriptionStore