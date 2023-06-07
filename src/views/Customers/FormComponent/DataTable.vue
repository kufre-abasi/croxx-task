<script setup>
import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
import ThreeDotsIcon from '@/assets/img/icons/threeDotsIcon.vue'
import customerStore from "@/stores/customer" 
import Dropdown from "@/components/ui/Dropdown/Dropdown.vue";
import Modal from "@/components/ui/Modal.vue";
import dayjs from 'dayjs';
import { storeToRefs } from "pinia";
import { computed, onMounted, reactive, ref } from 'vue';
import customerServices from '@/services/Customer.js';
import { useRoute } from "vue-router";

const route = useRoute()
const store = customerStore();
const { customerDocuments,customer } = storeToRefs(store);
const showDocument = ref({});
const showDocumentToggle = ref(false);
const showDocumentModal = ref(false);
const buttons = reactive([false,false,false])
const error = reactive({
    reason:""
})
const items = ref([
    {
        name:"view",
        context:"View Document"
    }
])

const reason = ref("");
const message = ref("Loading")

onMounted(async() => { 
    await store.getCustomerDocuments()
    message.value = "No data found"
})

const toggleDocument = (document) => {

    if(showDocument.value.id == document.id){
        return showDocumentToggle.value = !showDocumentToggle.value 
    }

    //showDocument.value = {}
    showDocument.value = document
    reason.value = document.reason
    showDocumentToggle.value = true

}

const clickedItem = (link) => {
    if(link.context == "View Document"){
        toggleDocumentModal()
    }
}

const toggleDocumentModal = () => {
    showDocumentModal.value = !showDocumentModal.value

}

const checkFileType = computed(()=>{

    if (showDocument.value.file_name.match(/\.(jpg|jpeg|png|gif)$/i)){
        return "IMAGE"
    }

    if (showDocument.value.file_name.match(/\.(mp4|webm)$/i)){
        return "VIDEO"
    }

    if (showDocument.value.file_name.match(/\.(doc|pdf)$/i)){
        return "DOCUMENT"
    }
})

const updateDocument  = async (status,id,btnNo) => {

    if(!reason.value){
        return error.reason = `Reasons is required`
    }

    error.reason = ""
    buttons[btnNo] = true

    let payload = {
        verification_status:status, 
        reason:reason.value,
        customer_id: customer.value.details.id
    }


    try {
        
        let res = await customerServices.updateDocuments(payload,id)

        customerDocuments.value.data.map(item => {
            if(item.id == id){
                item.verification_status  = status
            } 
        })

        toggleDocumentModal()

    } catch (error) {
        console.log(error)
    }
    finally {
        buttons[btnNo] = false
    }

   
}

const createCustomer  = async () => {

    buttons[0] = true
    
    try {
  
        let res = await customerServices.createCustomerModulr(customer.value.details.id)

    } catch (error) {
        console.log(error)
    }
    finally {
        buttons[0] = false   
    }

}

const closeDropdown = () => {
    showDocumentToggle.value = false;
    //showDocument.value = {};
}

</script>
<template>
    <div>
        <button type="button" @click="createCustomer" class="btn my-4 !px-16">
            <ButtonPreloader v-if="buttons[0]"/>
            <span v-if="!buttons[0]">Create Customer</span>
        </button> 
    </div>
    <div>
        <table class="table-auto w-full">
            <thead class=" bg-[#F9FBFF] text-[#A8AABC]">
                <tr class="text-left text-[14px]">
                <th class="text-left w-64 p-4">Document type</th>
                <th class="text-left">Document view</th>
                <th class="text-left w-24">Status</th>
                <th class="text-left">Date created</th>
                <th class="text-left">Action</th>
                </tr>
            </thead>
            <tbody v-if="!customerDocuments.data.length">
                <tr class="border-b text-[14px]">
                    <td colspan="6" class="py-4 text-center pl-4">{{ message }}</td>
                </tr>
            </tbody>
            <tbody v-if="customerDocuments.data.length">
                <tr v-for="document in customerDocuments.data" :key="document" class="border-b text-[14px]">
                    <td class="capitalize text-sm p-4">{{ document.document_type.replace('_',' ') }}</td>
                    <td class="capitalize text-sm" >{{( document.document_side) ?  document.document_side.toLowerCase() : "-" }}</td>
                    <td :class="{ 
                        'text-[#F50C40]': document.verification_status == 'REJECTED',
                        'text-amber-500': document.verification_status == 'PENDING',  
                        'text-green-500': document.verification_status == 'APPROVED',  
                    }">{{ document.verification_status }}</td>
                    <td class="text-sm">{{ dayjs(document.created_at).format("DD MMMM YYYY HH:mm:ss") }}</td>
                    <td class="text-center cursor-pointer relative pr-4">
                        <ThreeDotsIcon @click="toggleDocument(document)" />
                        <Dropdown
                            v-if="showDocument.id == document.id && showDocumentToggle"  
                            :showDropdown="showDocument.id == document.id && showDocumentToggle" 
                            :link="false"
                            class="-bottom-14 w-36 z-10 -left-24"
                            :items="items"
                            :id="`dropdown`+ document.id"
                            @closeDropdown="closeDropdown"
                            @clickedItem="clickedItem"
                        />
                    </td>
                </tr>
            </tbody>
        </table> 
        <div v-if="customerDocuments.data.length" class="flex place-content-center mt-4 mx-auto ">
            <button v-if="customerDocuments.links.prev" @click="prev" class="border-[1px] py-1 px-2">Previous</button>
            <span class="place-self-center px-2 bg-brand text-white cursor-pointer">{{ customerDocuments.meta.current_page }}</span>
            <span v-if="customerDocuments.links.next" class="place-self-center px-2 cursor-pointer">2</span>
            <button v-if="customerDocuments.links.next" @click="next" class="border-[1px] py-1 px-2">Next</button>
        </div> 

    </div>

    <Modal v-if="showDocumentModal" @closeModal="toggleDocumentModal" title="Document Upload Document">
        <div v-if="checkFileType == 'IMAGE'">
            <img :src="showDocument.file_path" class="rounded h-72 w-full object-cover" alt="">
        </div>

        <div v-if="checkFileType == 'VIDEO'" class="">
            <video width="200" height="" controls>
                <source  :src="showDocument.file_path">
            </video>
        </div>

        <div v-if="checkFileType == 'DOCUMENT'" class="">
            <iframe
                :src="showDocument.file_path"
                frameBorder="0"
                scrolling=""
                height="100%"
                width="100%"
            ></iframe>
        </div>

        <div class="my-4">
            <textarea v-model="reason" class="input" id="" cols="30" rows="3" placeholder="Reason"></textarea>
            <div class="text-sm text-red-500">{{  error.reason }}</div>
        </div>

        <div class="mt-6 flex gap-3">
            <button @click="updateDocument('APPROVED',showDocument.id,1)" class="btn !px-6">
                <ButtonPreloader v-if="buttons[1]"/>
                <span v-if="!buttons[1]">Approve</span>
            </button>
            <button  @click="updateDocument('REJECTED',showDocument.id,2)" class="btn !bg-red-500 !px-6">
                <ButtonPreloader v-if="buttons[2]"/>
                <span v-if="!buttons[2]">Reject</span>

            </button>
        </div>
    </Modal>
</template>
