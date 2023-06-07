import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import blogService from "../services/Blog"


const blog = defineStore('blog', () => {

    const allBlogs = ref({
        data:[],
        links:{},
        meta:{}
    })

    const getBlog = async (page = null) => {
        allBlogs.value.data = [];
        allBlogs.value = await blogService.getAllBlogs(page);
        return allBlogs.value
    }
    
    return {
        allBlogs, 
        getBlog,
    }
})


export default blog