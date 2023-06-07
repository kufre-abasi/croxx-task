import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import faqService from "../services/Faqs"


const faqs = defineStore('faqs', () => {

    const allFaqs = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getAllFaqs = async (page = null) => {
        allFaqs.value.data = [];
        allFaqs.value = await faqService.getAllFaqs(page);
        return allFaqs.value
    }
    
    return {
        allFaqs, 
        getAllFaqs,
    }
})


export default faqs