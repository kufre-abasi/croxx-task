<template>
    
  <div class="bg-white  py-6 rounded-[8px] min-h-[100vh] relative">
        <div class="flex lg:flex-row flex-col gap-3 px-4 justify-between mb-4">
            <h3 class="font-Satoshi500 text-[24px] place-self-center leading-[32.4px] text-[#001727]">Accounts</h3>
                <select class="border-[1px] border-gray-200 px-6 py-2 bg-[#f6f6f6] rounded-[4px] " name="" id="">
                    <option >Sort by</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
        </div>
        <div class="flex overflow-x-scroll hide-scrollbar gap-4">
            <table class="table-auto w-full ">
            <thead class=" bg-[#F9FBFF] text-[#A8AABC]  ">
                <tr class="py-8 text-left font-Satoshi700 text-[14px]">
                <th class="py-4 pl-4"><input class="mr-2 outline-none" type="checkbox" name="" id="">S/N</th>
                <th class="text-left">Name</th>
                <th class="text-left">Account ID</th>
                <th class="text-left">Customer ID</th>
                <th class="text-left">Balances</th>
                <th class="text-left">Currency</th>
                <th class="text-right pr-4">Account No</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b font-Satoshi500 text-[14px]">
                    <td class="py-4 pl-4"><input class="mr-2 outline-none" type="checkbox" name="" id="">1</td>
                    <td> <router-link to="/customers/manage-customer/id:">Peter Abutu</router-link></td>
                    <td>A1211AQM</td>
                    <td>C120WAB7</td>
                    <td>£225.00</td>
                    <td>GBP</td>
                    <td class="text-right pr-4">70972282</td>
                </tr>
                <tr class="border-b font-Satoshi500 text-[14px]">
                    <td class="py-4 pl-4"><input class="mr-2 outline-none" type="checkbox" name="" id="">2</td>
                    <td>Golam Kadiri</td>
                    <td>A1211AQM</td>
                    <td>C120WAB7</td>
                    <td>£225.00</td>
                    <td>GBP</td>
                    <td class="text-right pr-4">70972282</td>
                </tr>
            </tbody>
            </table>  
        </div>
        <!-- <div class="flex place-content-center mt-4 mx-auto ">
            <button class="border-[1px] p-3 px-4">Previous</button>
            <span class="place-self-center px-4">1</span>
            <span class="place-self-center px-4 p-3 text-white bg-brand">2</span>
            <button class="border-[1px] p-3 px-4">Next</button>
        </div> -->
    </div>
</template>

<script>

</script>

<style>
thead{
    padding: 20px 0px !important;
}
</style>