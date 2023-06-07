import axios from "../axios";
import errorHandling  from "./Error"
import Auth from "./Auth";



const getAllBlogs = async (page = null) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.get('blogs',{ 
            headers:{
                Authorization: 'Bearer ' + token
            },
            params:{
                page
            }
        })
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}

const getSingleBlog = async (slug) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.get(`blogs/${slug}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return res.data.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}

const createBlog = async (payload) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.post(`blogs`,payload,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        errorHandling.catchAxiosSuccess(res)
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}

const deleteBlog = async (slug) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.delete(`blogs/${slug}`,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        errorHandling.catchAxiosSuccess(res)
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}

const updateBlog = async (payload, slug) => {

    const token  = Auth.getToken()
    try {
        let res = await axios.put(`blogs/${slug}`,payload,{ 
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        errorHandling.catchAxiosSuccess(res)
        return res.data;
    } catch (error) {
        errorHandling.catchAxiosError(error)   
        throw error;
    }
    
}


const blog = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    deleteBlog,
    updateBlog
}

export default blog;