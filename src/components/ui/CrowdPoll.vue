<template>
    <div
        class="min-h-[223px] bg-white p-4 mt-5 rounded-[13px]"
    >
        <div class="flex justify-between items-center mb-4">
            <p class="font-Satoshi900 text-[14px] leading-[112%] text-[#000000]">CrowdPoll</p>
            <p class="text-[#2B3C87] font-Satoshi700 text-[12px] leading-[112%]">See all</p>
        </div>
        <div
            v-for="andrew in [{ name: 'hi' }, { name: 'hi' }]" :key="andrew"
            class="bg-[#F5F5F5] p-[2%] border-l-8 mb-4 rounded-l-[3px] rounded-r-[8px] border-[#000000]"
        >
            <div class="flex justify-between gap-4 items-center">
            <div>
                <img
                class="w-12 h-10 border-2 border-primary-light"
                src="@/assets/dashboard/new_dashboard/man.png"
                />
            </div>
            <div class="w-full mr-0 flex items-center justify-between">
                <div>
                <p class="font-Satoshi700 text-[12px] leading-[130%]">Andrews Birthday Party</p>
                <p class="text-[10px] font-Satoshi500 leading-[130%]">Closes on 26.11.2022</p>
                </div>
                <div>
                <p class="text-[#06C270] font-Satoshi900 text-[16px] leading-[130%] text-base">£2.00</p>
                <p class="text-[10px] font-Satoshi500 leading-[130%]">Collected</p>
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