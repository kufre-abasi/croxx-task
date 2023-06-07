<template>
    <div class="grid gap-4 lg:w-[75%]">
        <div class="mb-2">
            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Promotional email</h3>
        </div>
        <div class="border-[1px] border-[#E4DFDF] rounded-[16px] py-8 p-6">
            <div class="grid lg:grid-cols-1 gap-x-4 gap-y-12">
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Subject</label>
                    <input class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" type="text" placeholder="Enter email subject">
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Sent to</label>
                    <select name="" id="" class="border-[1px] border-[#E4DFDF] bg-white rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2">
                        <option value="">Enter email subject</option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Broadcast channel</label>
                    <select name="" id="" class="border-[1px] border-[#E4DFDF] bg-white rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2">
                        <option value="">Enter email subject</option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label class="text-[#34343F] font-Satoshi600 text-[16px] leading-[21.86px]">Message</label>
                    <textarea class="border-[1px] border-[#E4DFDF] rounded-[4px] w-full  outline-none p-4 py-3 font-Satoshi500 text-[#6C6C73] mt-2" placeholder="Birmingham" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <button class="bg-brand text-white text-[16px] font-Satoshi600 leading-[21.86px] px-20 rounded-[4px] py-4 mt-8">Send</button>                 
        </div>
    </div>
</template>
<script setup>

</script>