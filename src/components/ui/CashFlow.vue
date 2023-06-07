<template>
    <div class="min-h-[223px] bg-white p-4 mt-5 rounded-[13px]"
    >
        <div class="mb-4">
            <p class="font-Satoshi900 text-[14px] leading-[15.68px]">Cash Flow for March</p>
        </div>
        <div
            v-for="obj in [
            { text: 'Earned', colorGreen: true, amount: '£500,000.42' },
            { text: 'Spent', colorGreen: false, amount: '£300,000.42' },
            ]" :key="obj"
            class="flex justify-between items-center mb-4 rounded-[9px] min-h-[63px]"
            :class="{
            'bg-[#06C27012]': obj.colorGreen,
            'bg-[#FF784B12]': !obj.colorGreen,
            }"
        >
            <p
            class="py-4 px-3  font-Satoshi700 text-[14px] leading-[92%]"
            :class="{ 'text-[#06C270]': obj.colorGreen }"
            >
            {{ obj.text }}
            </p>
            <p
            class="py-4 px-3  font-Satoshi700 text-[16px] leading-[130%]"
            :class="{ 'text-[#FF784B]': !obj.colorGreen }"
            >
            {{ obj.amount }}
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>