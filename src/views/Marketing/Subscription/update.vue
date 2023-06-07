<script setup>
import ButtonPreloader from "@/components/ui/Preloaders/ButtonPreloader.vue";
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import Layout from "@/components/layout/Dashboard.vue";
import subscriptionStore from '@/stores/subscription';
import subscription from '@/services/Subscription.js';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import ArrowLeft from '@/assets/img/icons/arrowLeft.vue'

const route = useRoute()
const store = subscriptionStore();
const { allPlans } = storeToRefs(store);
const buttons = reactive([false]);
const message = ref("Loading")
const submitted = ref(false);
const payload = ref({
 
});


const rules = {
    name : { required },
    amount : { required },
    duration : { required },
    duration_type: { required },
    annual_start_price : { required },
    annual_end_price : { required },
    status : { required },
    type : { required },
    email_limit : { required },
    sms_limit: { required },
    account_type : { required },
    visa_card_fee : { required },
    virtual_visa_card : { required },
    transfer_in : { required },
    transfer_out : { required },
    atm_withdrawal : { required },
    balance_hold : { required },
    free_payment_links : { required },
    free_transfer_in : { required },
    free_transfer_out : { required },
    free_atm_withdrawals : { required },
    above_balance_hold : { required },
    payment_link_fee : { required }
}

const validations = useVuelidate(rules, payload);

const updatePlan = async () => {

   

    if(validations.value.$silentErrors.length){

        submitted.value = true;

        setTimeout(()=>{
            submitted.value = false;
        },5000)

        return;
    }

    buttons[0] = true

    try {
        let res = await subscription.updatePlan(route.params.id,payload.value)

    } catch (error) {
        console.log(error)
    }
    finally{
        buttons[0] = false
    }
}


onMounted(async() => { 
    message.value = "No data found"
    payload.value =  await subscription.getSinglePlan(route.params.id)
})


 





</script>

<template>
  <main>
    <Layout>
        <div class="lg:px-6 px-3  pt-8 grid grid-rows gap-4">
            <div class="flex items-center my-4 gap-[2px]">
                <router-link to="/" class="font-Satoshi500 text-[14px] leading-[18.9px]">Home</router-link>
                <ArrowLeft />
                <router-link :to="{name:'SubscriptionPlan'}" class="font-Satoshi500 text-[14px] leading-[18.9px]">Subscription</router-link>
                <ArrowLeft />
                <a href="javascript:void())" class="font-Satoshi500 text-[14px] leading-[18.9px]">Update</a>
            </div>
            <div class="bg-white py-8 rounded-[8px] min-h-[100vh] relative px-2">
                <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
                    <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Update Plan</h3>
                </div>

                <form @submit.prevent="updatePlan" method="post" class="px-4">
                    <div class="grid lg:grid-cols-2 gap-4 lg:gap-x-4 lg:gap-y-6">
                        <div>
                            <label class="text-[#34343F] text-sm">Plan name</label>
                            <input v-model="payload.name" placeholder="Plan name" class="input mt-2" type="text">
                            <div v-if="submitted && validations.name.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.name.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Amount</label>
                            <input v-model="payload.amount" placeholder="Amount"  class="input mt-2" type="number">
                            <div v-if="submitted && validations.amount.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.amount.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Duration</label>
                            <input v-model="payload.duration" placeholder="Amount"  class="input mt-2" type="number">
                            <div v-if="submitted && validations.duration.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.duration.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Duration type</label>
                            <select v-model="payload.duration_type" class="input mt-2" name="" id="">
                                <option value="">Select duration</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                            <div v-if="submitted && validations.duration.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.duration.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Account type</label>
                            <select v-model="payload.account_type" class="input mt-2" name="" id="">
                                <option value="">Select account type</option>
                                <option value="personal">Personal Account</option>
                                <option value="business">Business Account</option>
                            </select>
                            <div v-if="submitted && validations.duration.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.duration.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Plan type</label>
                            <select v-model="payload.type" class="input mt-2" name="" id="">
                                <option value="">Select plan type</option>
                                <option value="free">Free</option>
                                <option value="standard">Standard</option>
                            </select>
                            <div v-if="submitted && validations.duration.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.duration.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Start price</label>
                            <input v-model="payload.annual_start_price" placeholder="Start price" class="input mt-2" type="number">
                            <div v-if="submitted && validations.annual_start_price.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.annual_start_price.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">End price</label>
                            <input v-model="payload.annual_end_price" placeholder="Start price" class="input mt-2" type="number">
                            <div v-if="submitted && validations.annual_end_price.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.annual_end_price.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Start price</label>
                            <input v-model="payload.annual_start_price" placeholder="Start price" class="input mt-2" type="number">
                            <div v-if="submitted && validations.annual_start_price.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.annual_start_price.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">End price</label>
                            <input v-model="payload.annual_end_price" placeholder="End price" class="input mt-2" type="number">
                            <div v-if="submitted && validations.annual_end_price.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.annual_end_price.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Email limit</label>
                            <input v-model="payload.email_limit" placeholder="Email limit" class="input mt-2" type="number">
                            <div v-if="submitted && validations.email_limit.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.email_limit.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">SMS Limit</label>
                            <input v-model="payload.sms_limit" placeholder="SMS Limit" class="input mt-2" type="number">
                            <div v-if="submitted && validations.sms_limit.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.sms_limit.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Visa card fee</label>
                            <input v-model="payload.visa_card_fee" placeholder="Visa card fee" class="input mt-2" type="number">
                            <div v-if="submitted && validations.visa_card_fee.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.visa_card_fee.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Virtual visa card</label>
                            <input v-model="payload.virtual_visa_card" placeholder="Virtual visa card" class="input mt-2" type="number">
                            <div v-if="submitted && validations.virtual_visa_card.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.virtual_visa_card.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Transfer in</label>
                            <input v-model="payload.transfer_in" placeholder="Transfer in" class="input mt-2" type="number">
                            <div v-if="submitted && validations.transfer_in.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.transfer_in.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Transfer out</label>
                            <input v-model="payload.transfer_out" placeholder="Transfer out" class="input mt-2" type="number">
                            <div v-if="submitted && validations.transfer_out.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.transfer_out.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">ATM withdrawal</label>
                            <input v-model="payload.atm_withdrawal" placeholder="ATM withdrawal" class="input mt-2" type="number">
                            <div v-if="submitted && validations.atm_withdrawal.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.atm_withdrawal.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Balance hold</label>
                            <input v-model="payload.balance_hold" placeholder="Balance hold" class="input mt-2" type="number">
                            <div v-if="submitted && validations.balance_hold.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.balance_hold.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Free payment links</label>
                            <input v-model="payload.free_payment_links" placeholder="Free payment links" class="input mt-2" type="number">
                            <div v-if="submitted && validations.free_payment_links.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.free_payment_links.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Free transfer in</label>
                            <input v-model="payload.free_transfer_in" placeholder="Free transfer in" class="input mt-2" type="number">
                            <div v-if="submitted && validations.free_transfer_in.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.free_transfer_in.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Free transfer out</label>
                            <input v-model="payload.free_transfer_out" placeholder="Free transfer out" class="input mt-2" type="number">
                            <div v-if="submitted && validations.free_transfer_out.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.free_transfer_out.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Free atm withdrawals</label>
                            <input v-model="payload.free_atm_withdrawals" placeholder="Free atm withdrawals" class="input mt-2" type="number">
                            <div v-if="submitted && validations.free_atm_withdrawals.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.free_atm_withdrawals.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Above balance hold</label>
                            <input v-model="payload.above_balance_hold" placeholder="Above balance hold" class="input mt-2" type="number">
                            <div v-if="submitted && validations.above_balance_hold.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.above_balance_hold.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#34343F] text-sm">Payment link fee</label>
                            <input v-model="payload.payment_link_fee" placeholder="Payment link fee" class="input mt-2" type="number">
                            <div v-if="submitted && validations.payment_link_fee.$silentErrors.length">
                                <div class="text-red-500 text-xs my-1">{{ validations.payment_link_fee.$silentErrors[0].$message }}</div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="btn my-4 !px-16">
                                <ButtonPreloader v-if="buttons[0]"/>
                                <span v-if="!buttons[0]">Update Plan</span>
                            </button>    
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  </main>
</template>
