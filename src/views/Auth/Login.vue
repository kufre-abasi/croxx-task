<script setup>
import { ref } from "vue";
import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
import Auth from "@/services/Auth.js"
import { useToast } from "vue-toastification";
import user from "@/stores/user"
import { useRouter } from "vue-router"
let store = user();
const error = ref({});
const router = useRouter();
const toast = useToast();
const payload  =  ref({
    email: "",
    password:"",
    showPassword:false,
    showPreloader:false
})

const toogleShowPassWord = () => {
    payload.value.showPassword = ! payload.value.showPassword
}

const login = async() => {

    payload.value.showPreloader = true;
    try {
        let res = await Auth.login(payload.value.email,payload.value.password)
        store.saveUser(res.data)
        router.push({ name: 'AllCustomers' })
    } catch (error) {
        payload.value.showPreloader = false;
    }
   

}
</script>

<template>
  <section class="h-screen container flex justify-center items-center">
        <div class="lg:w-[40%] w-[100%]">
            <h1 class="text font-Satoshi700 text-2xl">Welcome</h1>

            <p class="text-sm mt-2">Enter details below to login</p>
            <form @submit.prevent="login" method="post">
                <div v-if="error.message" class="text-red-400 bg-red-100 text-xs text-center my-4 rounded p-2">{{ error.message }}</div>
    
                <div class="mt-8">
                    <label for="" class="font-gotham text-sm font-bold">Email address</label>
                    <input type="text" @input="checkError" v-model="payload.email" placeholder="Enter email address" class="input">
                    <span v-if="error.email" class="text-red-400 text-xs">{{ error.email }}</span>
                </div>
    
                <div class="mt-4 relative">
                    <label for="" class="font-gotham text-sm font-bold">Password</label>
                    <input :type="(payload.showPassword) ? 'text' : 'password'"  @input="checkError"  v-model="payload.password" placeholder="••••••••••" class="input">
                    <div class="absolute right-4 top-9">
                        <button type="button" @click="toogleShowPassWord" v-if="!payload.showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        <button type="button"  @click="toogleShowPassWord" v-if="payload.showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>                          
                        </button>
    
                    </div>
                    <span v-if="error.password" class="text-red-400 text-xs">{{ error.password }}</span>
                </div>

    
                <div class="flex flex-col gap-8 my-8">
                    <div>
                        <button type="submit" class="btn w-full">
                            <ButtonPreloader v-if="payload.showPreloader"/>
                            <span v-if="!payload.showPreloader">Log in</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
       
  </section>
</template>
