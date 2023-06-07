import { defineStore } from 'pinia'
import analytics from "../services/Analytics"

const analyticsStore = defineStore('analytics', () => {

    const getCustomerActivity = async (slug) => {
        let res = await analytics.getCustomerAnalytics(slug);
        return res;
    }
  
    return {
        getCustomerActivity
    }
})


export default analyticsStore