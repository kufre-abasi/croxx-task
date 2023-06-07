import axios from "../axios";
import errorHandling  from "./Error"
import encrypt from "./Encrypt"

const login = async (email, password) => {

    let data = {
        email,
        password,
        dob:"2023-04-07"
    }

    try {
        let res = await axios.post('login',data)
        let ciphertext = encrypt.encrypt(JSON.stringify(res.data),import.meta.env.VITE_ENCRYPT_KEY)
        localStorage.setItem('_user_data', ciphertext);
        return res;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
   
    
}

const getToken = () => {

    let encryptedData  = localStorage.getItem("_user_data");
    if(encryptedData){
        let user  = encrypt.decrypt(encryptedData,import.meta.env.VITE_ENCRYPT_KEY)
        return user.token;
    }

    return null;
}



const auth = {
    login,
    getToken
   
}

export default auth;