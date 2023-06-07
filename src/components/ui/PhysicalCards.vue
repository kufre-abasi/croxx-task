<template>
    <div
    class="min-h-[432px] border-2 bg-white p-4 pl-6 rounded-[13px]"
    >
        <div class="flex items-center justify-between  mb-4">
            <p class="text-base font-Satoshi900">Physical Cards</p>
            <div class="flex gap-1 items-center">
            <div class="flex gap-1 items-center">
                <img src="@/assets/dashboard/new_dashboard/add-blue.svg" />
                <p class="text-[#2B3C87] font-Satoshi500 text-[12px] leading-[112%]">New Card</p>
            </div>
            <img src="@/assets/dashboard/new_dashboard/setting-3.svg" />
            </div>
        </div>
        <!-- First-row second col -->
        <div class="">
            <div class="flex overflow-x-scroll hide-scrollbar gap-4">
            <div class="relative h-[155px] flex-none">
                <img
                class="h-full"
                src="@/assets/dashboard/new_dashboard/Kavlr-card-designs-blue.png"
                />
                <div
                class="absolute top-16 ml-7 font-bold h-[74px] text-white flex flex-col justify-between"
                >
                <p class="text-lg">4187 2899 8388 5727</p>
                <p class="">MR. KUFRE-ABASI</p>
                </div>
            </div>
            <div class="relative h-[155px] flex-none">
                <img
                class="h-full"
                src="@/assets/dashboard/new_dashboard/Kavlr-card-designs-green.png"
                />
                <div
                class="absolute top-16 ml-7 font-bold h-[74px] text-white flex flex-col justify-between"
                >
                <p class="text-lg">4187 2899 8388 5727</p>
                <p class="">MR. AYO OLOWO</p>
                </div>
            </div>
            <div class="relative h-[155px] flex-none">
                <img
                class="h-full"
                src="@/assets/dashboard/new_dashboard/Kavlr-card-designs-black.png"
                />
                <div
                class="absolute top-16 ml-7 font-bold h-[74px] text-white flex flex-col justify-between"
                >
                <p class="text-lg">4187 2899 8388 5727</p>
                <p class="">MR. IYODO NICK</p>
                </div>
            </div>
            </div>
            <!-- Second-row second col -->
            <div class="bg-white my-4">
            <div class="flex justify-between items-start mb-2">
                <div class="">
                <p class="font-Satoshi900 text-[12px] leading-[13.44px]">Recent Activities</p>
                </div>
                <p class="font-Satoshi500 text-[12px] leading-[13.44px] text-[#2B3C87]">See all</p>
            </div>
            <div
                v-for="andrew in [{ name: 'Today' }, { name: 'Yesterday' }]" :key="andrew"
                class="bg-[]"
            >
                <div>
                <p class="text-[#00000085] font-Satoshi500 text-[12px] leading-[13.44px] mt-1">{{ andrew.name }}</p>
                <a-divider class="m-2 mb-3 mx-0" />
                </div>
                <div class="flex justify-between gap-4 mb-4 items-start">
                <div class="w-3 h-3 bg-[#2B3C87] rounded-full"></div>
                <div
                    class="w-full mr-0 flex items-center justify-between"
                >
                    <div>
                    <p class="font-Satoshi700 text-[12px] leading-[11.04px] m-0">Apple Payment</p>
                    <p class="text-[10.85px] font-Satoshi500 leading-[16.27px] mt-1 text-[#718096]">
                        6th June, 18:30
                    </p>
                    </div>
                    <div>
                    <p class="text-[#FF784B] text-[13.01px] font-Satoshi700 text-base">
                        £300.00
                    </p>
                    </div>
                </div>
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