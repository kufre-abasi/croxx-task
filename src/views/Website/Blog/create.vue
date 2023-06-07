<script setup>
import { ref,reactive } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import blog from '@/services/Blog.js';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'
import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { uploadFile as upload } from "@/services/Upload.js"

const buttons = reactive([false]);
const submitted = ref(false);
const previewImage = ref();
const previewImageUrl = ref("");
const file = ref("");
const payload = ref({
    title : "",
    blog_description:"",
    body : "",
    cover_image : "",
    blog_category: ""
});


const rules = {
    title : { required },
    blog_description : { required },
    body : { required },
    cover_image : { required },
    blog_category:  { required }
}

const validations = useVuelidate(rules, payload);

const createBlog = async () => {

    if(validations.value.$silentErrors.length){

        submitted.value = true;

        setTimeout(()=>{
            submitted.value = false;
        },5000)

        return;
    }

    buttons[0] = true



    try {
        let filePath = await upload(file.value)
        payload.value.cover_image = filePath;
        let res =  await blog.createBlog(payload.value)
        removePreviewImage();
        payload.value = {
            title : "",
            blog_description:"",
            body : "",
            cover_image : "",
        }
    } catch (error) {
        console.log(error)
    }
    finally{
        buttons[0] = false
    }
    
}


const uploadFile =  async () => {
    file.value = previewImage.value.files[0];
    previewImageUrl.value = payload.value.cover_image = URL.createObjectURL(file.value );
}

const removePreviewImage = () => {
    previewImageUrl.value = payload.value.cover_image = ""
}

</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
            <div class="flex items-center my-4 gap-[2px]">
                <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
                <ArrowLeft />
                <router-link :to="{ name:'Blogs' }" class="font-Satoshi500 text-[14px] leading-[18.9px]">Blog</router-link>
                <ArrowLeft />
                <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Create</a>
            </div>
            <div class="bg-white py-8 rounded-[8px] min-h-[100vh] relative px-2">
                <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                    <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Create Blog</h3>
                </div>

                <form @submit.prevent="createBlog" method="post" class="px-4">
                    <div class="mb-6">
                        <label class="text-[#34343F] text-sm">Title</label>
                        <input v-model="payload.title" placeholder="Title" class="input mt-2" type="text">
                        <div v-if="submitted && validations.title.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.title.$silentErrors[0].$message }}</div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="text-[#34343F] text-sm">Blog Category</label>
                        <div class="my-2">
                            <select v-model="payload.blog_category" class="input mt-2" name="" id="">
                                <option value="">Select Category</option>
                                <option value="Business Tips">Business Tips</option>
                                <option value="Startup Stories">Startup Stories</option>
                                <option value="Industry News and Trends">Industry News and Trends</option>
                                <option value="Updates and Announcements">Updates and Announcements</option>
                                <option value="Customer Spotlight">Customer Spotlight</option>
                                <option value="Startup Culture">Startup Culture</option>
                                <option value="Fraud and Scam">Fraud and Scam</option>
                                <option value="Newsletter">Newsletter</option>
                            </select>
                        </div>
                        <div v-if="submitted && validations.blog_category.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.blog_category.$silentErrors[0].$message }}</div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="text-[#34343F] text-sm">Description</label>
                        <div class="mt-2">
                            <textarea v-model="payload.blog_description" class="input" placeholder="Description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div v-if="submitted && validations.blog_description.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.blog_description.$silentErrors[0].$message }}</div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="text-[#34343F] text-sm">Body</label>
                        <div class="mt-2">
                            <QuillEditor v-model:content="payload.body" contentType="html" theme="snow" toolbar="full" placeholder="Blog data" />
                        </div>
                        <div v-if="submitted && validations.body.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.body.$silentErrors[0].$message }}</div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="text-[#34343F] text-sm">Cover image</label>
                        <div v-if="!previewImageUrl" class="mt-2">
                            <input type="file" class="hidden" accept="image/*" @input="uploadFile" name="" ref="previewImage" id="cover_image">
                            <label for="cover_image">
                                <img src="@/assets/img/placeholder.svg" class="rounded w-[450px] cursor-pointer h-[277px]" alt="">
                            </label>
                        </div>
                        <div v-else class="mt-2">
                            <img :src="previewImageUrl"  class="rounded w-[450px] cursor-pointer h-[277px] object-cover" alt="">
                            <div>
                                <button @click="removePreviewImage" class="text-red-500 text-sm my-2">Remove</button>
                            </div>
                        </div>
                        <div class="text-xs mt-4">
                            Include a high-quality image in your story to make it more inviting to readers.
                        </div>
                    </div>

                    <div v-if="submitted && validations.cover_image.$silentErrors.length">
                        <div class="text-red-500 text-xs my-1">{{ validations.cover_image.$silentErrors[0].$message }}</div>
                    </div>

                    <div class="flex justify-end">
                        <button type="submit" class="btn my-4 !px-16">
                            <ButtonPreloader v-if="buttons[0]"/>
                            <span v-if="!buttons[0]">Add blog</span>
                        </button>    
                    </div>

                </form>
            </div>
        </div>
    </Layout>
  </main>
</template>
