import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";



const getAllFaqs = async (page = null) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.get('/faqs',{ 
            headers:{
                Authorization: 'Bearer ' + token
            },
            params:{
                page
            }
        })
        return res.data.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}

const getFaq = async (slug) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.get(`faqs/${slug}`,{ 
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

const createFaq = async (payload) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.post(`/faqs`,payload,{ 
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

const deleteFaq = async (slug) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.delete(`faqs/${slug}`,{ 
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

const updateFaq = async (payload, slug) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.put(`faqs/${slug}`,payload,{ 
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


const faq = {
    getAllFaqs,
    getFaq,
    createFaq,
    deleteFaq,
    updateFaq
}

export default faq;