<template>
  <section class="fixed h-screen w-screen flex justify-center items-center overflow-y-auto top-0 z-50 left-0">
      <div ref="blur" class="h-full w-full fixed bg-black/40"></div>
        <div class="pb-6">
            <div :class="getWidth" ref="modal" class="bg-white blur-none w-full rounded-lg mx-3 lg:mx-0 transition scale-75 duration-50 ease-out" >
                <div class="flex items-center border-b p-6 justify-between">
                    <div class="text-xl font-semibold" >
                        {{ title }}
                    </div>
                    <div>
                        <button @click="closeModal" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mb-4 p-6">
                    <slot></slot>
                </div>
            </div>
        </div>

  </section>
</template>

<script>
  export default {
      name:"Dashboard",
      props:[
          'width','title'
      ],
      computed:{
          getWidth(){
              if(this.width == 'modal-sm'){
                  return 'lg:w-[300px]'
              }

              if(this.width == 'modal-lg'){
                  return 'lg:w-[800px]'
              }

              if(this.width == 'modal-xl'){
                  return 'lg:w-[1140px]'
              }

              return 'lg:w-[500px]'
          }
      },
      methods: {
          closeModal(){
                this.$refs.modal.classList.add("scale-75")
                this.$refs.blur.classList.remove("backdrop-blur")
                setTimeout(()=>{
                    this.$emit('closeModal')
                },50)
          }
      },
      mounted(){
        setTimeout(()=>{
            this.$refs.modal.classList.remove("scale-75")
            this.$refs.blur.classList.add("backdrop-blur")
            
        },50)
        let body = document.querySelector("body")
        body.classList.add('overflow-hidden')
      },
      beforeUnmount(){
        let body = document.querySelector("body")
        body.classList.remove('overflow-hidden')
      }
  }
</script>