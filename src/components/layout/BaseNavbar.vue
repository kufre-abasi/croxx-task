<template>
  <header class="bg-white text-[#282929] px-0">
    <div class="ml-2 px-4">
      <router-link to="/"
        ><img src="@/assets/logo.png" class="w-[70%] justify-start" alt="Croxx logo"
      /></router-link>
    </div>
    <!-- The nav -->
    <nav class="nav font-Poppins500">
      <div class="px-4">
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <EvolveComplianceIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
            >Dashboard</span
          >
        </router-link>
        <button
          @click="toggleAccordion(0)"
          :class="{
            'bg-[#EBF3FF] border-[#C2DBFF] text-[#0040A1] border-[1px]':
              activeIndex === 0,
          }"
          class="w-full p-[10px] pr-0 flex justify-between rounded-full"
        >
          <div class="p-[0px] mr-[20px] rounded-[5px] flex justify-between">
            <CLVIcon class="place-self-center" />
            <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
              >System Panel</span
            >
          </div>

          <svg
            class="place-self-center"
            :class="{ 'rotate-90': activeIndex === 0 }"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.5C12 10.6076 11.9809 10.712 11.9427 10.8132C11.9046 10.9143 11.8537 10.9983 11.7901 11.065L8.27862 14.778C8.13867 14.926 7.96056 15 7.74427 15C7.52799 15 7.34987 14.926 7.20992 14.778C7.06997 14.63 7 14.4417 7 14.213C7 13.9843 7.06997 13.796 7.20992 13.648L10.187 10.5L7.20992 7.35202C7.06997 7.20404 7 7.0157 7 6.787C7 6.5583 7.06997 6.36996 7.20992 6.22197C7.34987 6.07399 7.52799 6 7.74427 6C7.96056 6 8.13867 6.07399 8.27862 6.22197L11.7901 9.93498C11.8664 10.0157 11.9206 10.1031 11.9527 10.1973C11.9847 10.2915 12.0005 10.3924 12 10.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div class="ml-7" v-show="activeIndex === 0">
          <router-link to="/" class="p-[10px] pr-0 flex justify-start rounded-[5px]">
            <span class="place-self-center text-[16px] leading-[21.6px] font-Poppins500"
              >Industry</span
            >
          </router-link>
          <router-link to="/" class="p-[10px] pr-0 flex justify-start rounded-[5px]">
            <span class="place-self-center text-[16px] leading-[21.6px]">Competency</span>
          </router-link>
        </div>
      </div>
      <div class="px-4 pb-2 capitalize">
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <AccountrequestIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]">Finder</span>
        </router-link>
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <ActivitylogIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
            >Activation</span
          >
        </router-link>
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <MessagesIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]">vetting</span>
        </router-link>
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <UsertrackingIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
            >Employers list</span
          >
        </router-link>
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <WaitingListIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
            >talent list</span
          >
        </router-link>
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <StaffIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
            >Global mobility</span
          >
        </router-link>
        <router-link
          to="/"
          class="p-[10px] pr-0 flex justify-start hover:bg-brand/[0.1] rounded-[5px]"
        >
          <div class="p-[1px] mr-[3px] rounded-[5px]">
            <WebsiteThemeIcon class="place-self-center" />
          </div>
          <span class="place-self-center text-[16px] ml-2 leading-[21.6px]"
            >canadidate</span
          >
        </router-link>

        <button
          @click="toggleAccordion(1)"
          :class="{
            'bg-[#EBF3FF] border-[#C2DBFF] text-[#0040A1] border-[1px]':
              activeIndex === 1,
          }"
          class="w-full p-[10px] pr-0 flex justify-between rounded-full"
        >
          <div class="p-[1px] rounded-[5px] flex gap-2 justify-between">
            <ComplianceIcon class="place-self-center" />
            <span
              class="place-self-center text-[16px] ml-[3px] capitalize leading-[21.6px]"
              >professionals</span
            >
          </div>
          <svg
            class="place-self-center"
            :class="{ 'rotate-90': activeIndex === 1 }"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.5C12 10.6076 11.9809 10.712 11.9427 10.8132C11.9046 10.9143 11.8537 10.9983 11.7901 11.065L8.27862 14.778C8.13867 14.926 7.96056 15 7.74427 15C7.52799 15 7.34987 14.926 7.20992 14.778C7.06997 14.63 7 14.4417 7 14.213C7 13.9843 7.06997 13.796 7.20992 13.648L10.187 10.5L7.20992 7.35202C7.06997 7.20404 7 7.0157 7 6.787C7 6.5583 7.06997 6.36996 7.20992 6.22197C7.34987 6.07399 7.52799 6 7.74427 6C7.96056 6 8.13867 6.07399 8.27862 6.22197L11.7901 9.93498C11.8664 10.0157 11.9206 10.1031 11.9527 10.1973C11.9847 10.2915 12.0005 10.3924 12 10.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div class="ml-10 capitalize" v-show="activeIndex === 1">
          <router-link to="/" class="p-[10px] pr-0 flex justify-start rounded-[5px]">
            <span class="place-self-center text-[16px] leading-[21.6px]"
              >Professionals</span
            >
          </router-link>
          <router-link to="/" class="p-[10px] pr-0 flex justify-start rounded-[5px]">
            <span class="place-self-center text-[16px] leading-[21.6px]">recruit</span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import AccountrequestIcon from "@/assets/img/icons/accountrequestIcon.vue";
import ActivitylogIcon from "@/assets/img/icons/activitylogIcon.vue";
import StaffIcon from "@/assets/img/icons/staffIcon.vue";
import ComplianceIcon from "@/assets/img/icons/compliance.vue";
import MessagesIcon from "@/assets/img/icons/messages.vue";
import UsertrackingIcon from "@/assets/img/icons/usertracking.vue";
import CustomerchurnrateIcon from "@/assets/img/icons/Customerchurnrate.vue";
import CACIcon from "@/assets/img/icons/CACicon.vue";
import ARPUIcon from "@/assets/img/icons/ARPUicon.vue";
import NetPromoterIcon from "@/assets/img/icons/netPromoterIcon.vue";
import LVTCRIcon from "@/assets/img/icons/LVTCRicon.vue";
import CLVIcon from "@/assets/img/icons/CLVicon.vue";
import UserFeedbackIcon from "@/assets/img/icons/userFeedbackIcon.vue";
import ConversionRateIcon from "@/assets/img/icons/conversionRateIcon.vue";
import RetentionRateIcon from "@/assets/img/icons/RetentionRate.vue";
import UserDemographicsIcon from "@/assets/img/icons/userDemographicsIcon.vue";
import PromotionalEmailIcon from "@/assets/img/icons/promotionalEmailIcon.vue";
import ProductsIcon from "@/assets/img/icons/productsIcon.vue";
import PaymentLinksIcon from "@/assets/img/icons/paymentLinksIcon.vue";
import InvoiceIcon from "@/assets/img/icons/invoiceIcon.vue";
import ProductCategoryIcon from "@/assets/img/icons/productCategoryIcon.vue";
import SubscriptionPlansIcon from "@/assets/img/icons/subscriptionPlansIcon.vue";
import BlogIcon from "@/assets/img/icons/BlogIcon.vue";
import EmailPricingIcon from "@/assets/img/icons/emailPricingIcon.vue";
import WaitingListIcon from "@/assets/img/icons/waitingListIcon.vue";
import PreorderIcon from "@/assets/img/icons/preorderIcon.vue";
import CustomDomainIcon from "@/assets/img/icons/customDomainIcon.vue";
import CountrySettingsIcon from "@/assets/img/icons/countrySettingsIcon.vue";
import MCCIcon from "@/assets/img/icons/MCCIcon.vue";
import WebsiteThemeIcon from "@/assets/img/icons/websiteThemeIcon.vue";
import WebsiteDesignIcon from "@/assets/img/icons/websiteDesignIcon.vue";
import BugReportIcon from "@/assets/img/icons/bugReportIcon.vue";
import EvolveComplianceIcon from "@/assets/img/icons/evolveComplianceIcon.vue";
import WebsiteIntegrationIcon from "@/assets/img/icons/websiteIntegrationIcon.vue";

import Piggybanq from "@/assets/img/icons/piggybanqIcon.vue";
import LogoutIcon from "@/assets/img/icons/logoutIcon.vue";
import { reactive, ref } from "vue";
// const state = reactive({
//   contains: false,
// });
// const toggleContains = () => {
//   state.contains = !state.contains;
// };

// export default {
//   contains: state.contains,
//   toggleContains,
// };
// const store = useStore();

const activeIndex = ref(null);

function toggleAccordion(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-height: 100vh;
  height: 100vh;
  overflow-y: scroll;
}

nav {
  width: 100%;
  /* border-top: 1px solid $color-grey-100; */
  padding-top: 20px;
  margin-bottom: 10px;
}
.link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 10px;
}

.link.router-link-exact-active,
.link__text {
  font-weight: 300;
  /* color: $color-primary; */
  /* // background-color: rgba($color: $color-primary, $alpha: 0.1); */
}

.link__icon {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: transparent;
  display: grid;
  place-items: center;
  margin-right: 20px;
}

.link i {
  font-size: 1.1rem;
  /* color: $color-grey-400; */
}

.link__text {
  font-size: 0.9rem;
  /* color: $color-grey-400; */
}
.cta {
  display: inline-block;
  padding: 10px 20px;
  /* background-color: $color-primary;
    color: $color-white; */
  font-size: 0.75rem;
  border-radius: 5px;
  transition: 0.15s ease;
}
.cta h4 {
  font-size: 0.8rem;
  /* color: $color-grey-300; */
  padding-inline: 10px;
  text-transform: uppercase;
  font-weight: 700;
}
.link:hover {
  /* background-color: rgba($color: $color-primary, $alpha: 0.1); */
  border-radius: 100%;
}

header::-webkit-scrollbar {
  width: 0.4vw;
  cursor: pointer;
}
header::-webkit-scrollbar-track {
  background-color: transparent;
}

header::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 50px;
}
</style>
