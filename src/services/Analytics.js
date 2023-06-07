import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";



const getCustomerAnalytics = async (slug) => {

    const token  = Auth.getToken();
    try {
        let res = await axios.get(`customers/analytics/${slug}`,{ 
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


const analytics = {
    getCustomerAnalytics

}

export default analytics;