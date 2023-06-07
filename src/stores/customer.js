import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Customers from "../services/Customer"
import { useRoute } from 'vue-router'

const user = defineStore('customer', () => {
    const allCustomers = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getAllCustomers = async (page = null,filter = null) => {
        allCustomers.value.data = []
        allCustomers.value = await Customers.getAllCustomers(page,filter);
        return allCustomers.value
    }

    const customer = ref({
        details:{},
        id:""
    });

    const getCustomer = async () => {
        const route = useRoute()
        customer.value = await Customers.getCustomer(route.params.id);
    }

    const updateCustomer = async (payload) => {
        const route = useRoute()
        return await Customers.updateCustomer(route.params.id,payload);
    }

    const allCustomerActivity = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getCustomerActivity = async () => {
        allCustomerActivity.value = await Customers.getCustomerActivity(customer.value.id);
        return allCustomerActivity.value
    }

    const allActivity = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getAllActivity = async (page = null) => {
        allCustomerActivity.value.data = []
        allActivity.value = await Customers.getAllActivity(page);
        return allActivity.value
    }

    const customerDocuments = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getCustomerDocuments = async () => {
        customerDocuments.value = await Customers.getCustomerDocuments(customer.value.id);
        return customerDocuments.value
    }

    const customerTransactions = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getCustomerTransactions = async () => {
        customerTransactions.value = await Customers.getCustomerTransactions(customer.value.details.id);
        return customerDocuments.value
    }

    const customerCards = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getCustomerCards = async () => {
        customerCards.value = await Customers.getCustomerCards(customer.value.id);
        return customerCards.value
    }

    const customerSubscription = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getCustomerSubscription = async () => {
        customerSubscription.value = await Customers.getCustomerSubscription(customer.value.details.id);
        return customerSubscription.value
    }

    const customerAccounts = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getcustomerAccounts = async () => {
        customerAccounts.value = await Customers.getcustomerAccounts(customer.value.details.id);
        return customerAccounts.value
    }

    const getAllAccounts = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getAccounts = async () => {
        getAllAccounts.value = await Customers.getAllAccounts();
        return getAllAccounts.value
    }
  
    return {
        allCustomers, 
        customer,
        allCustomerActivity, 
        allActivity, 
        customerDocuments,
        customerTransactions,
        customerCards,
        customerSubscription,
        customerAccounts,
        getAllAccounts,
        getAllCustomers,
        getCustomer,
        updateCustomer,
        getCustomerActivity,
        getAllActivity,
        getCustomerDocuments,
        getCustomerTransactions,
        getCustomerCards,
        getCustomerSubscription,
        getcustomerAccounts,
        getAccounts
    }
})


export default user