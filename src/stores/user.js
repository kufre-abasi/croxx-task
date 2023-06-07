import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import encrypt from "../services/Encrypt"

const user = defineStore('user', () => {
    const user = ref({
        token:""
    })

    const getUser = computed(() => {

        if(user.value){
            return user.value;
        }

        let encryptedData  = localStorage.getItem("_user_data");
        if(encryptedData){
            user.value  = encrypt.decrypt(encryptedData,import.meta.env.VITE_ENCRYPT_KEY)
            return user.value;
        }

    })

    const saveUser = (userData) => {
        user.value = userData
        console.log(user.value)
    }

    const deleteUser = () => {
        user.value = {
            token:""
        }
        localStorage.removeItem('_user_data');
    }
  
    return { user, getUser, saveUser, deleteUser }
})


export default user