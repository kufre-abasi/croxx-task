import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";


const getPlans = async () => {

    const token  = Auth.getToken()
    try {
        let res = await axios.get('plans',{ 
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

const createPlans = async (payload) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.post('plans',payload,{ 
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

const getSinglePlan = async (slug) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`plans/${slug}`,{ 
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

const updatePlan = async (slug,payload) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.put(`plans/${slug}`,payload,{ 
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


const plan = {
    getPlans,
    createPlans,
    getSinglePlan,
    updatePlan
}

export default plan;