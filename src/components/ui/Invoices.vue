<template>
    <div  class="min-h-[223px] my-5 bg-white p-4 rounded-[13px]">
        <div class="flex justify-between items-center mb-4">
            <p class="font-Satoshi900 text-[14px] leading-[15.68px]">Invoices</p>
            <p class="font-Satoshi700 text-[12px] leading-[13.44px] text-[#2B3C87]">See all</p>
        </div>
        <div
            v-for="andrew in [
            {
                name: 'Nelson Joe',
                date: 'Due on 26.11.2022',
                payment: 'Awaiting Payment',
            },
            {
                name: 'Andrew’s Birthday Party',
                date: 'Due on 26.11.2022',
                payment: 'Payment Received',
            },
            ]" :key="andrew"
            class="bg-[#F5F5F5] p-[2%] border-l-8 mb-4 rounded-l-[3px] rounded-r-[8px] border-[#7B61FF]"
        >
            <div class="flex justify-between gap-4 p-2 items-center">
            <div class="w-full mr-0 flex items-center justify-between">
                <div>
                <p class="font-Satoshi700 text-[12px] leading-[15.6px]">{{ andrew.name }}</p>
                <p class="text-[10px] font-Satoshi500 leading-[13px] mt-2">Due {{ andrew.date }}</p>
                </div>
                <div class="text-right">
                <p class="text-[#304999] font-Satoshi900 text-[16px] leading-[20.8px] text-base">£2.00</p>
                <p class="text-[10px] font-Satoshi500 leading-[13px] text-[#06C270]">
                    {{ andrew.payment }}
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>