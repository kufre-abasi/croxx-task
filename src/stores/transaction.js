import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import transaction from "../services/Transaction"
import { useRoute } from 'vue-router'

const transactionStore = defineStore('transaction', () => {

    const allTransaction = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getAllTransaction = async () => {
        allTransaction.value = await transaction.getAllTransaction();
        return allTransaction.value
    }
  
    return {
        allTransaction, 
        getAllTransaction,
    }
})


export default transactionStore