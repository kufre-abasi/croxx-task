<script setup>
import { ref,reactive } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import faqService from '@/services/Faqs.js';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'
import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const buttons = reactive([false]);
const submitted = ref(false);
const payload = ref({
    title : "",
    body : "",
    type : "FAQs",
});


const rules = {
    title : { required },
    body : { required },
}

const validations = useVuelidate(rules, payload);

const createFaq = async () => {

    if(validations.value.$silentErrors.length){

        submitted.value = true;

        setTimeout(()=>{
            submitted.value = false;
        },5000)

        return;
    }

    buttons[0] = true;


    try {
        let res = await faqService.createFaq(payload.value)
        payload.value = {
            title : "",
            body : "",
        }
    } catch (error) {
        console.log(error)
    }
    finally{
        buttons[0] = false
    }
    
}
</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
            <div class="flex items-center my-4 gap-[2px]">
                <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
                <ArrowLeft />
                <router-link :to="{ name:'FAQ' }" class="font-Satoshi500 text-[14px] leading-[18.9px]">FAQs</router-link>
                <ArrowLeft />
                <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Create</a>
            </div>
            <div class="bg-white py-8 rounded-[8px] min-h-[100vh] relative px-2">
                <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                    <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Create FAQ</h3>
                </div>

                <form @submit.prevent="createFaq" method="post" class="px-4">
                    <div class="mb-6">
                        <label class="text-[#34343F] text-sm">Title</label>
                        <input v-model="payload.title" placeholder="Title" class="input mt-2" type="text">
                        <div v-if="submitted && validations.title.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.title.$silentErrors[0].$message }}</div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="text-[#34343F] text-sm">Description</label>
                        <div class="mt-2">
                            <textarea v-model="payload.body" class="input" placeholder="Description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div v-if="submitted && validations.body.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.body.$silentErrors[0].$message }}</div>
                        </div>
                    </div>

                    <div v-if="submitted && validations.cover_image.$silentErrors.length">
                        <div class="text-red-500 text-xs my-1">{{ validations.cover_image.$silentErrors[0].$message }}</div>
                    </div>

                    <div class="flex justify-end">
                        <button type="submit" class="btn my-4 !px-16">
                            <ButtonPreloader v-if="buttons[0]"/>
                            <span v-if="!buttons[0]">Add FAQ</span>
                        </button>    
                    </div>

                </form>
            </div>
        </div>
    </Layout>
  </main>
</template>
