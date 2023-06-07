<template>
    <div class="grid gap-4 lg:w-[75%]">
        <h3  class="lg:hidden text-[16px] font-Satoshi500 leading-[32.4px]  mb-3 ">Profile</h3>
        <div class="border-[1px] flex gap-4 border-[#EEEEF1] rounded-[16px] p-4">
            <div class="h-[100px] w-[100px] bg-brand rounded-[100%]"></div>
            <div class="my-auto">
                <h3 class="font-Satoshi500 text[24px] leading-[32.4px] text-[#001727] capitalize">{{ customer.details.first_name  }} {{ customer.details.middle_name  }} {{ customer.details.last_name  }}</h3>
                <p>
                    <span class="font-Satoshi500 text-sm">Username: </span> 
                     <span class="font-Satoshi400 text-sm text-[#6c6c73]">{{ customer.details.username }}</span>
                </p>
                <p>
                    <span class="font-Satoshi500 text-sm text-[#34343F]">Account Status: </span>
                    <span class="font-Satoshi400 text-sm  uppercase">{{ (customer.details.verification_status)  ? customer.details.verification_status : "Not submitted" }}</span>
                </p>
            </div>

        </div>
        <div class=" border-[1px] border-[#EEEEF1] rounded-[16px] p-4">
            <form @submit.prevent="submitForm" method="post">
                <div class="grid lg:grid-cols-2 gap-8 ">
                    <div>
                        <label class="text-[#34343F] text-sm">First Name</label>
                        <input v-model="payload.details.first_name" :placeholder="payload.first_name" class="input mt-2" type="text">
                        <div v-if="validations.details.first_name.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.first_name.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">last Name</label>
                        <input v-model="payload.details.last_name" :placeholder="payload.last_name"  class="input mt-2" type="text">
                        <div v-if="validations.details.last_name.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.last_name.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div>
                        <label class="text-[#34343F]  text-sm">Email</label>
                        <input v-model="payload.email" :placeholder="payload.email" class="input mt-2" type="email">
                        <div v-if="validations.email.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.email.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div v-if="payload.account_type == 'business'">
                        <label class="text-[#34343F] text-sm">Support Email</label>
                        <input v-model="payload.email" :placeholder="payload.email"  class="input mt-2" type="email">
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">Mobile Number</label>
                        <input v-model="payload.details.phone_number" :placeholder="payload.phone_number" class="input mt-2" type="text">
                        <div v-if="validations.details.phone_number.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.phone_number.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div v-if="payload.account_type == 'business'">
                        <label class="text-[#34343F] text-sm">Support Mobile Number</label>
                        <input class="input mt-2" type="number" placeholder="+2348109945686">
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">Date of birth</label>
                        <input v-model="payload.details.dob" class="input mt-2" type="date" placeholder="">
                        <div v-if="validations.details.dob.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.dob.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">Postal code</label>
                        <input v-model="payload.details.post_code" class="input mt-2" type="text" placeholder="Postal code">
                        <div v-if="validations.details.post_code.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.post_code.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">City</label>
                        <input  v-model="payload.details.post_town" class="input mt-2" type="text" placeholder="City">
                        <div v-if="validations.details.post_town.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.post_town.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">Address Line 1</label>
                        <input v-model="payload.details.addressLine1"  class="input mt-2" type="text" placeholder="Address Line 1">
                        <div v-if="validations.details.addressLine1.$silentErrors.length">
                            <div class="text-red-500 text-xs my-1">{{ validations.details.addressLine1.$silentErrors[0].$message }}</div>
                        </div>
                    </div>
                    <div>
                        <label class="text-[#34343F] text-sm">Address Line 2</label>
                        <input v-model="payload.details.addressLine2" class="input mt-2" type="text" placeholder="Address Line 2">
                    </div>
                </div>
                <div class="mt-8">
                    <div class="grid grid-cols-2 gap-x-10 text-sm gap-y-4">
                        <div class="flex ">
                            <input :checked="payload.email_verified_at" class="border-[1px] border-[#E4DFDF] rounded-[20px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Email verification</p>
                        </div>
                        <div class="flex">
                            <input class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Dispute raised</p>
                        </div>
                        <div class="flex">
                            <input :checked="payload.account_verified_at" class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Phone verification</p>
                        </div>
                        <div class="flex">
                            <input class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Payments</p>
                        </div>
                        <div class="flex">
                            <input class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">2fa security</p>
                        </div>
                    </div>
                </div>   
                <button type="submit" class="btn my-4 !px-16">
                    <ButtonPreloader v-if="buttons[0]"/>
                    <span v-if="!buttons[0]">Save changes</span>
                </button>     
            </form>            
        </div>
        <div class=" border-[1px] border-[#EEEEF1] rounded-[16px] p-4">
            <h3 class="text-[24px] font-Satoshi500 leading-[32.4px] mb-3">Compliance Document Request</h3>
            <form @submit.prevent="submitComplianceDocumentRequest" method="post">
                <div class="mt-8">
                    <div class="grid text-sm gap-y-4">
                        <div class="flex ">
                            <input :checked="complianceDocumentPayload.video_request" class="border-[1px] border-[#E4DFDF] rounded-[20px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Request Video</p>
                        </div>
                        <div class="flex">
                            <input :checked="complianceDocumentPayload.id_request" class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Request proof of id</p>
                        </div>
                        <div class="flex">
                            <input :checked="complianceDocumentPayload.address_request" class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Proof of address request</p>
                        </div>
                        <div class="flex">
                            <input :checked="complianceDocumentPayload.business_request" class="border-[1px] border-[#E4DFDF] rounded-[4px] m-2 outline-none p-4 py-2  text-[#6C6C73]" type="checkbox" placeholder="">
                            <p class="font-Satoshi500 place-self-center">Proof of business request</p>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <QuillEditor theme="snow" placeholder="Write notes for this customer" />
                </div>

                <button type="submit" class="btn my-4 !px-16">
                    <ButtonPreloader v-if="buttons[1]"/>
                    <span v-if="!buttons[1]">Save changes</span>
                </button>
            </form>    
        </div>

        <div class=" border-[1px] border-[#EEEEF1] rounded-[16px] p-4">
            <h3 class="text-[24px] font-Satoshi500 leading-[32.4px] mb-3">Security</h3>
            <div class="border-b py-4 flex justify-between  text-[16px] ">
                <div class="flex">
                    <AccessIcon  class="mr-2"/>
                    Joined
                </div>
                <div class="pl-4 text-right">
                    {{  dayjs(customer.created_at).format('MMMM DD YYYY')  }}
                </div>
            </div>
            <div class="py-4 flex justify-between  text-[16px] ">
                <div class="flex">
                    <AccessIcon  class="mr-2"/>
                    Last login
                </div>
                <div class="pl-4 text-right">
                    April 1st 2023
                </div>
            </div>
        </div>

        <div class=" border-[1px] border-[#EEEEF1] rounded-[16px] p-4">
            <h3 class="text-[24px] font-Satoshi500 leading-[32.4px] mb-3">Verification Status</h3>
            <form @submit.prevent="changeVerificationStatus">
                <select v-model="payload.details.verification_status" name="" class="input my-4" id="">
                    <option value="">Select status</option>
                    <option value="PENDING">Pending</option>
                    <option value="REJECTED">Rejected</option>
                <option value="RESUBMIT">Resubmit</option>
                <option value="PROCESSING">Processing</option>
                    <option value="APPROVED">Approved</option>
                </select>
                <button  type="submit" class="btn my-4 !px-16">
                    <ButtonPreloader v-if="buttons[2]"/>
                    <span v-if="!buttons[2]">Save changes</span>
                </button>
            </form>
        </div>
        <div>
            <button class="btn my-4 !px-16">Add watchlist</button>
        </div>
        <div class="gap-4 flex  mt-8">
            <button class="border-brand text-sm border text-brand  py-2 px-6 rounded-[4px] ">Send email</button>                 
            <button class="border-brand text-sm border text-brand  py-2 px-6 rounded-[4px] ">Log in</button>                 
            <button class="border-brand text-sm border text-brand  p-2 px-6 rounded-[4px] ">Deactivate transfer</button>                 
            <button class="border-brand text-sm border text-brand  py-2 px-6 rounded-[4px] ">Suspend</button>                 
        </div>
    </div>
</template>
<script setup>
import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import dayjs from 'dayjs' 
import AccessIcon from '@/assets/img/icons/accessIcon.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import customerStore from '@/services/Customer.js';
import { useRoute } from "vue-router";


const props = defineProps(['customer'])
const payload = computed(() => props.customer)
const customer = computed(() => props.customer)

const complianceDocumentPayload = ref({
    video_request:false,
    id_request:false,
    address_request:false,
    business_request:false
})

const buttons = reactive([false,false,false])
const route = useRoute()

const rules = {
    details:{
        first_name: { required },
        last_name: { required },
        phone_number:{ required },
        dob:{ required },
        post_code:{ required },
        post_town:{ required },
        addressLine1: { required }
    },
    email: { required, email }
}

const validations = useVuelidate(rules, payload)


const submitForm = async() => {

    if(validations.value.$silentErrors.length){
        return;
    }

    buttons[0] = true

    let data = {
        first_name : payload.value.details.first_name,
        last_name :  payload.value.details.last_name,
        middle_name :  payload.value.details.middle_name,
        phone_number :  payload.value.details.phone_number,
        post_code :  payload.value.details.post_code,
        post_town:  payload.value.details.post_town,
        dob:  payload.value.details.dob,
        addressLine1:  payload.value.details.addressLine1,
        addressLine2:  payload.value.details.addressLine2
    }

    try {
        let res = await customerStore.updateCustomer(route.params.id,data)

    } catch (error) {
        console.log(error)
    }
    finally{
        buttons[0] = false
    }
    

    
}

const submitComplianceDocumentRequest = async() => {


    buttons[1] = true
    try {
        let res = await customerStore.updateCustomer(route.params.id,complianceDocumentPayload.value)

    } catch (error) {
        console.log(error)
    }
    finally{
        buttons[1] = false
    }

}

const changeVerificationStatus = async() => {

    if(!payload.value.details.verification_status){
        return
    }

    buttons[2] = true

    try {
        let res = await customerStore.updateCustomer(route.params.id,{
            verification_status: payload.value.details.verification_status
        })

    } catch (error) {
        console.log(error)
    }
    finally{
        buttons[2] = false
    }
}

onMounted(async()=>{

})
</script>

<style>
.ql-snow * {
    box-sizing: border-box;
    font-family: 'Satoshi-Regular';
}

.ql-toolbar.ql-snow {
    border-top-left-radius: 0.5rem/* 8px */;
    border-top-right-radius: 0.5rem/* 8px */;
}

.ql-container.ql-snow {
    border: 1px solid #d1d5db;
    border-bottom-left-radius: 0.5rem/* 8px */;
    border-bottom-right-radius: 0.5rem/* 8px */;
    min-height: 200px;
    background-color: #fff;
}
</style>