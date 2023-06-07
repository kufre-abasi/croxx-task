import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";



const getAllCustomers = async (page = null, filter = null) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get('get-customers',{ 
            headers:{
                Authorization: 'Bearer ' + token
            },
            params:{
                page,
                filter
            }
        })
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
   
    
}

const getCustomer = async (slug) => {
    const token  = Auth.getToken();
    try {
        let res = await axios.get(`get-customer/${slug}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return res.data.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
}



const getCustomerWithStatus = async (slug) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`get-customer/${slug}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return res.data.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const updateCustomer = async (slug,payload) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.put(`customers/${slug}`,payload,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        errorHandling.catchAxiosSuccess(res)
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}


const getCustomerActivity = async (uuid) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`activities/${uuid}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const getAllActivity = async (page = null) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`activities`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            },
            params:{
                page
            }
        })
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
}

const getCustomerDocuments = async (uuid) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`compliance-documents/customer/${uuid}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const updateDocuments = async (payload,id) => {

    const token  = Auth.getToken();
    try {

        let res = await axios.put(`compliance-documents/verification/${id}`,payload,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })

        errorHandling.catchAxiosSuccess(res)

        return res.data;

    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const getCustomerTransactions = async (uuid) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`/transactions/customer/${uuid}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const createCustomerModulr = async (uuid) => {

    let data = {
        customer_id:uuid
    }

    const token  = Auth.getToken();
    try {
        let res = await axios.post(`/create-customer`,data,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })

        errorHandling.catchAxiosSuccess(res)   
        return res.data;

    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const getCustomerCards = async (uuid) => {
    const token  = Auth.getToken();

    try {
        let res = await axios.get(`/cards/${uuid}/all`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        
        errorHandling.catchAxiosSuccess(res)   
        return res.data;

    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}


const getCustomerSubscription = async (uuid) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`subscriptions-customer/${uuid}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        
        errorHandling.catchAxiosSuccess(res)   
        return res.data;

    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const getcustomerAccounts = async (uuid) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`accounts/customer/${uuid}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        
        errorHandling.catchAxiosSuccess(res)   
        return res.data;

    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const getAllAccounts = async () => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`accounts`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        
        errorHandling.catchAxiosSuccess(res)   
        return res.data;

    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }

}

const customers = {
    getAllCustomers,
    getCustomer,
    getCustomerDocuments,
    getCustomerWithStatus,
    updateCustomer,
    getCustomerActivity,
    getAllActivity,
    updateDocuments,
    getCustomerTransactions,
    createCustomerModulr,
    getCustomerCards,
    getCustomerSubscription,
    getcustomerAccounts,
    getAllAccounts
}

export default customers;