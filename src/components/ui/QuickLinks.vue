<template>
  <div class="bg-white rounded-[10px] py-6 px-4">
    <h3 class="font-extrabold text-base">Quick links</h3>
    <div class="h-full mt-6">
      <div class="flex">
        <router-link to="#" class="mr-1 h-full">
            <img @click="store.quickLinksAddMoney=true, store.accountModal=true" class="w-full h-full" src="../../assets/dashboard/quick_links_1.svg"/>
        </router-link>
         <router-link to="#" class="mr-1">
            <img @click="store.quickLinksTransferMoney=true, store.accountModal=true"  class="w-full h-full" src="../../assets/dashboard/quick_links_2.svg"/>
        </router-link>
         <router-link to="#" class="mr-1">
            <img @click="store.quickLinksRequestMoney=true, store.accountModal=true" class="w-full h-full" src="../../assets/dashboard/quick_links_3.svg"/>
        </router-link>
      </div>
      
     
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.quick-links {
  width: 100%;
  position: relative;
  padding: 0.7rem 1rem;
  background-color: rgba($color: #707070, $alpha: 0.03);
  border-radius: 12px;

  h3 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__container {
    display: grid;
    margin: auto;
    place-items: center;

    @include mobile {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    @include tablet {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    @include laptop {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    @include desktop {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
  }

  .link {
    text-align: center;

    img {
      display: block;
      margin: 0 auto;
    }
    span {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
}
</style>
