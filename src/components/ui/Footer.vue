<template>
   <section class="bg-black overflow-hidden" >
       <div class="container bg-black overflow-hidden mx-auto py-14 px-3 lg:p-" >
           <div class="lg:grid px-4 lg:grid-cols-12 lg:gap-6" >
               <div class="lg:col-span-2">
                   <div class="flex justify-start -ml-4 lg:justify-start">
                       <img src="../../assets/img/trybalogowhite.svg" class=" md:h-10 md:w-auto" alt="">     
                   </div>
                   <div class="flex justify-start space-x-4 lg:space-x-0 lg:justify-between my-3  lg:mr-4">
                       <div>
                           <a href="https://facebook.com/tryba.io">
                       <img src="../../assets/img/facebookwhite.svg" class="h-10 w-2/3" alt="">     
                           </a>
                       </div>
                        <div>
                           <a href="https://twitter.com/IoTryba">
                       <img src="../../assets/img/twitterwhite.svg" class="h-10 w-2/3" alt="">     
                           </a>
                       </div>
                        <div>
                           <a href="https://instagram.com/tryba.io">
                       <img src="../../assets/img/instagramwhite.svg" class="h-10 w-2/3" alt="">     
                           </a>
                       </div>
                        <div>
                           <a href="#">
                       <img src="../../assets/img/linkedInwhite.svg" class="h-10 w-2/3" alt="">     
                           </a>
                       </div>
                   </div>
               </div>
               <div class="lg:col-span-10 hidden mt-8 lg:mt-0 lg:grid grid-rows-2 lg:grid-rows-1 lg:grid-flow-row lg:grid-cols-10 grid-flow-col gap-3" >
                   <div class="font-inter lg:col-span-2 text-sm" >
                        <h1 class="footer-h1 font-semibold text-primary-light" >LEGAL</h1>
                        <ul class="text-gray-200 my-4 grid grid-rows-1 gap-3 text-sm font-light">
                            <li><a href="terms-and-conditions" class="hover:underline text-white">Terms and conditions</a></li>
                            <li><a href="privacy-policy" class="hover:underline text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="font-inter lg:col-span-2 text-sm" >
                        <h1 class="footer-h1 font-semibold text-primary-light" >RESOURCES</h1>
                        <ul class="text-gray-200 my-4 grid grid-rows-1 gap-3 text-sm font-light">
                            <li><a href="faqs" class="hover:underline text-white">FAQs</a></li>
                            <li><a href="https://helpdesk.tryba.io/" class="hover:underline text-white">Help Center</a></li>
                        </ul>
                    </div>
                    <div class="font-inter lg:col-span-2 text-sm" >
                        <h1 class="footer-h1 font-semibold text-primary-light" >INTEGRATIONS</h1>
                        <ul class="text-gray-200 my-4 grid grid-rows-1 gap-3 text-sm font-light">
                            <li><a href="user/merchant-api" class="hover:underline">Developers</a></li>
                            <li><a href="https://tryba.statuspage.io/" class="hover:underline">System Status</a></li>
                        </ul>
                    </div>
                    <div class="font-inter font-light flex flex-col space-y-4 text-xs text-gray-200 lg:col-span-4" >
                        <div>
                           Tryba U.K Ltd designs and operate tryba.io websites and app. Company number 13509269. Registered Office International House, 126 Colmore Row, Birmingham, United Kingdom, B3 3AP. Tryba is an EMD distributor of Modulr FS Limited who is authorised and regulated by the Financial Conduct Authority for issuance of electronic money (FRN 900573).
                        </div>
                        <div>
                            Payment Initiation Services on Tryba are provided by Yapily Connect Ltd who is authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 [827001] for the provision of Account Information and Payment Initiation.
                        </div>
                        <div class="text-gray-500">
                            Tryba © 2022. All Rights Reserved.
                        </div>
                    </div>
               </div>
               <div class="lg:hidden">
                   <div class="text-gray-200">
                       <div class="flex flex-col space-y-4 my-6">
                           <div @click="toggleShowFeatures" class="flex justify-between py-3">
                               <div class="font-bold">Features</div>
                               <div class="font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': showFeatures}" class="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                               </div>
                           </div>
                           <div v-if="showFeatures">
                               <ul class="flex flex-col space-y-4">
                                    <li><a href="#">Website</a></li>
                                    <li><a href="#">Hosted payment links</a></li>
                                    <li><a href="#">Invoicing</a></li>
                                    <li><a href="#">Bookings</a></li>
                                    <li><a href="#">Expense and budgeting</a></li>
                                    <li><a href="#">Connect to marketplace</a></li>
                               </ul>
                           </div>
                            <div @click="toggleShowLegal" class="flex justify-between py-3">
                               <div class="font-bold">Legal</div>
                               <div class="font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': showLegal}"  class="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                               </div>
                           </div>
                            <div v-if="showLegal">
                               <ul class="flex flex-col space-y-4">
                                    <li><a href="terms-and-conditions" class="hover:underline">Terms and conditions</a></li>
                                    <li><a href="privacy-policy" class="hover:underline">Privacy Policy</a></li>
                               </ul>
                           </div>
                            <div @click="toggleshowResource" class="flex justify-between py-3">
                               <div class="font-bold">Resources</div>
                               <div class="font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': showResource}"  class="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                               </div>
                           </div>
                            <div v-if="showResource">
                               <ul class="flex flex-col space-y-4">
                                    <li><a href="faqs" class="hover:underline">FAQs</a></li>
                                    <li><a href="https://helpdesk.tryba.io/" class="hover:underline">Help Center</a></li>
                               </ul>
                           </div>
                            <div @click="toggleshowIntegration" class="flex justify-between py-3">
                               <div class="font-bold">Integration</div>
                               <div class="font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': showIntegration}" class="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                               </div>
                           </div>
                            <div v-if="showIntegration">
                               <ul class="flex flex-col space-y-4">
                                    <li><a href="user/merchant-api" class="hover:underline">Developers</a></li>
                                    <li><a href="https://tryba.statuspage.io/" class="hover:underline">System Status</a></li>
                               </ul>
                            </div>
                       </div>
                   </div>
                    <div class="font-inter font-light flex flex-col space-y-4 text-xs text-gray-200 lg:col-span-4" >
                        <div>
                          Tryba U.K Ltd designs and operates tryba.io websites and app. Company number 13509269 and ICO ZB319956. Registered Office International House, 126 Colmore Row, Birmingham, United Kingdom, B3 3AP. Tryba is an EMD distributor of Modulr FS Limited, company authorised and regulated by the Financial Conduct Authority for issuance of electronic money (FRN 900573).
                        </div>
                        <div>
                            Payment Initiation Services on Tryba are provided by Yapily Connect Ltd who is authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 [827001] for the provision of Account Information and Payment Initiation.
                        </div>
                        <div class="text-gray-500">
                            Tryba © 2022. All Rights Reserved.
                        </div>
                    </div>
               </div>
           </div>
       </div>
   </section>
</template>

<script>
export default {
    name:"Footer",
    props:['asset'],
    data(){
        return{
            date: new Date().getFullYear(),
            showFeatures:true,
            showLegal:true,
            showResource:true,
            showIntegration:true
        }
    },
    methods:{
        toggleShowFeatures(){
            this.showFeatures = !this.showFeatures
        },
        toggleShowLegal(){
            this.showLegal = !this.showLegal
        },
        toggleshowResource(){
            this.showResource = !this.showResource
        },
        toggleshowIntegration(){
            this.showIntegration = !this.showIntegration
        }
    }
}
</script>

<style>

</style>