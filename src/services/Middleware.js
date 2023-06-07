import encrypt from './Encrypt'

const redirectLogin = (to) => {

    let encryptedData  = localStorage.getItem("_user_data");
    if(encryptedData){
        let user = encrypt.decrypt(encryptedData,import.meta.env.VITE_ENCRYPT_KEY)

        if(user.token){
            return ;
        }
        
        return { name: 'Login' }

    }

    return { name: 'Login' }
}
    
const redirectDashboard = (to) => {

    let encryptedData  = localStorage.getItem("_user_data");
    if(encryptedData){
        let user = encrypt.decrypt(encryptedData,import.meta.env.VITE_ENCRYPT_KEY)

        if(user.token){
            return { name: 'AllCustomers' }
        }
        
    }
    
}

export default{
    redirectLogin,
    redirectDashboard
}