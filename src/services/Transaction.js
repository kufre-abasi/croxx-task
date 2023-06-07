import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";



const getAllTransaction = async () => {

    const token  = Auth.getToken()
    try {
        let res = await axios.get('transactions',{ 
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


const transactions = {
    getAllTransaction

}

export default transactions;