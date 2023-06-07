import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";



export const uploadFile = async (file) => {

    const token  = Auth.getToken()
    try {
        let formData = new FormData();
        formData.append("file", file);
        let res = await axios.post(`file/upload`,formData,{
            headers:{
                Authorization: 'Bearer ' + token
            }
        });
        return res.data.data.url;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}
