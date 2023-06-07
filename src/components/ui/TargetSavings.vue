<template>
    <div class="mt-4 my-5 bg-white p-5 rounded-[13px]">
        <h1 class="font-Satoshi900 text-[14px] leading-[15.68px] text-base mb-4">Target Savings</h1>
        <div class="grid md:grid-cols-2 cols-1 gap-8 w-full md:px-4">
            <div
            v-for="item in [
                {
                name: 'Car',
                amount: '£2,500.42',
                totalAmount: 'of £20,500.42',
                daysLeft: '100 days left',
                percevt: '10%',
                },
                {
                name: 'Kathrine',
                amount: '£500.42',
                totalAmount: 'of £1,500.42',
                daysLeft: '200 days left',
                percevt: '50%',
                },
                {
                name: 'Ann’s Birthday',
                amount: '£20.42',
                totalAmount: 'of £1,500.42',
                daysLeft: '10 days left',
                percevt: '10%',
                },
                {
                name: 'My Game',
                amount: '£450.42',
                totalAmount: 'of 500.42',
                daysLeft: '5 days left',
                percevt: '50%',
                },
            ]" :key="item"
            class="flex justify-between w-full mr-0 gap-4 items-center my-1"
            >
            <div>
                <img
                class="w-16 h-14 border-2"
                src="@/assets/dashboard/new_dashboard/man.png"
                />
            </div>
            <div class="w-full mr-0 flex flex-col">
                <div class="flex justify-between ">
                <p class="font-satoshi500 text-[#000000] leading-[15.6px] font-bold text-[12px]">{{ item.name }}</p>
                <p class="text-[10px] flex gap-1">
                    <b class="text-brand font-satoshi700 text-[12px] leading-[15.6px]">{{ item.amount }}</b>
                    <span class="text-[#0000006B] font-satoshi700 font-bold text-[10px] leading-[13px] ">{{
                    item.totalAmount
                    }}</span>
                </p>
                </div>
                <div class="flex gap-2 items-center my-[2px]">
                <div class="bg-[#06C27040] rounded-lg w-full">
                    <div class="h-[7px] rounded-lg bg-[#06C270] w-2/5"></div>
                </div>
                <p class="text-[12px] leading-[15.6px] font-bold text-[#000000]">
                    {{ item.percevt }}
                </p>
                </div>
                <div class="">
                <p class="text-[12px] font-bold font-satoshi700 text-[#00000047]">
                    {{ item.daysLeft }}
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