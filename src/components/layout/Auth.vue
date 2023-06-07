<template>
    <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:px-16 gap-16">
            <div class="sticky md:flex items-center hidden h-screen top-0">
                <div class="relative md:block ">
                    <div class="">
                        <img v-show="slides[0]" src="@/assets/AuthSlides/slide1.png" alt="Auth">
                        <img v-show="slides[1]" src="@/assets/AuthSlides/slide2.png" alt="Auth">
                        <img v-show="slides[2]" src="@/assets/AuthSlides/slide3.png" alt="Auth">
                        <img v-show="slides[3]" src="@/assets/AuthSlides/slide4.png" alt="Auth">
                    </div>
    
                    <div class="absolute bottom-4 left-4 flex gap-2">
                        <div :class="{ 'bg-white':slides[0], 'bg-white/40':!slides[0] }" class="h-4 w-4 rounded-full"></div>
                        <div :class="{ 'bg-white':slides[1], 'bg-white/40':!slides[1] }" class="h-4 w-4 rounded-full"></div>
                        <div :class="{ 'bg-white':slides[2], 'bg-white/40':!slides[2] }" class="h-4 w-4 rounded-full"></div>
                        <div :class="{ 'bg-white':slides[3], 'bg-white/40':!slides[3] }" class="h-4 w-4 rounded-full"></div>
                    </div>
                    
                </div>
            </div>
            <div class="flex min-h-screen md:h-auto justify-center items-center py-16">
                <div class="w-[100%]">
                    <slot></slot>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";


const slides =  ref([
    true,false,false,false
]);


const setSlideTimeout = () => {
   
  
    let index  = slides.value.findIndex(item => item == true);
    
    slides.value[index] = false;

    if(index + 1 > 3){
        return slides.value[0] = true
    }

    return slides.value[index + 1] = true
   
}

onMounted(()=>{
    setInterval(() => {
        setSlideTimeout()
    },5000)
})
</script>

