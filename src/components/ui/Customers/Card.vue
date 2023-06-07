<template>
    <div>
        <div class="icon">
            <slot name="icon"></slot>
            <!-- <img src="../../../assets/img/eruo.svg" alt=""> -->
        </div>
        <div class="title font-Satoshi700 text-white py-4 text-[16px] leading-[21.6px]">
            <slot name="title"></slot>
        </div>
        <div class="amount font-Satoshi700 text-white pb-4 text-[32px] leading-[43.2px]">
            <slot name="amount"></slot>
        </div>
    </div>
</template>
<script>

</script>