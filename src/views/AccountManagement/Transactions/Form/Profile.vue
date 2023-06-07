<template>
    <div class="grid gap-4 lg:w-[75%]">
        <div class="mb-4">
            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Profile</h3>
            <p class="font-Satoshi500 text-[14px] leading-[21.86px] text-[#6C6C73]">Please ensure all information entered is correct before submitting this form as errors and ommissions cannot be reversed.</p>
        </div>
        <div class="">
            <div class="grid lg:grid-cols-2 gap-x-4 gap-y-12">
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">First Name</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="Abdur-rasheed ">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">last Name</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="Idris">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Recipient Account Number/IBAN</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Recipient Sort Code/BIC</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Amount</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="number" placeholder="">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Reference</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-2 font-Satoshi500 text-[#6C6C73] mt-2" type="number" placeholder="">
                </div>
            </div>
            <div class="mt-12 grid lg:grid-rows gap-y-12">
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Sender Account ID</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Password</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="">
                </div>
            </div>   
            <button class="bg-brand text-white text-[16px] font-Satoshi600 leading-[21.86px] px-16 rounded-[4px] py-4 mt-8">Save changes</button>                 
        </div>
    </div>
</template>
<script setup>

</script>