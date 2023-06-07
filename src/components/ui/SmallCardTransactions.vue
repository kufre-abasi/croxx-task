<template>
    <div
    class="min-h-[342px] border-2 p-4 px-6 bg-white rounded-[13px]"
    >
    <div class="flex items-center justify-between mb-4">
        <p class="text-base font-Satoshi900">Transactions</p>
        <p class="text-[#2B3C87] font-semibold">See all</p>
    </div>
    <div class="text-[#2B3C87] font-bold flex gap-3 mb-8">
        <button
        class="bg-[#2B3C87] p-2 px-4 rounded-md border text-white"
        >
        All
        </button>
        <button class="bg-[#2B3C870A] p-2 px-4 rounded-md border">
        Revenue
        </button>
        <button class="bg-[#2B3C870A] p-2 px-4 rounded-md border">
        Expenses
        </button>
    </div>
    <div class="flex justify-between mb-4 items-start -ml-2">
        <img src="@/assets/dashboard/new_dashboard/arrow-up.svg" />
        <div class="w-full mr-0 flex items-center justify-between">
        <div>
            <p class="font-bold m-0">Money in via Open ban...</p>
            <p class="text-[11px] mt-1 text-[#718096]">
            6th June, 18:30
            </p>
        </div>
        <div>
            <p class="text-[#FF784B] font-semibold text-base">
            £300.00
            </p>
        </div>
        </div>
    </div>
    <!-- First-row second col -->
    <!-- <ManageCard /> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>