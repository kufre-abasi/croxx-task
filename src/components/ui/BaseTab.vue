<template>
    <div class="bg-white  py-6 p-4 rounded-[8px]  min-h-[100vh]">
      <div class="p-0">
        <div class="hidden flex-col gap-3 px-4 justify-between mb-4">
            <input class="border-[1px]  border-gray-200 outline-none bg-[#F6F8FB] px-4 py-[12px] rounded-[4px]" type="search" placeholder="search" name="" id="">
        </div>
        <!-- tabs -->
        <div v-if="!isOnMobile" class="tabs pb-0 justify-between items-center">
          <a
            class="px-4"
            v-on:click="activetab = '1'"
            v-bind:class="[activetab === '1' ? 'active' : '']"
          >
            <slot name="tab1"></slot>
          </a>
          <a
            v-on:click="activetab = '2'"
            v-bind:class="[activetab === '2' ? 'active' : '']"
          >
            <slot name="tab2"></slot>
          </a>
          <a
            v-on:click="activetab = '3'"
            v-bind:class="[activetab === '3' ? 'active' : '']"
          >
            <slot name="tab3"></slot>
          </a>
          <a
            v-on:click="activetab = '4'"
            v-bind:class="[activetab === '4' ? 'active' : '']"
          >
            <slot name="tab4"></slot>
          </a>
          <a
            v-on:click="activetab = '5'"
            v-bind:class="[activetab === '5' ? 'active' : '']"
          >
            <slot name="tab5"></slot>
          </a>
          <a
            v-on:click="activetab = '6'"
            v-bind:class="[activetab === '6' ? 'active' : '']"
          >
            <slot name="tab6"></slot>
          </a>
          <a
            v-on:click="activetab = '7'"
            v-bind:class="[activetab === '7' ? 'active' : '']"
          >
            <slot name="tab7"></slot>
          </a>
          <!-- <a
            v-on:click="activetab = '8'"
            v-bind:class="[activetab === '8' ? 'active' : '']"
          >
            <slot name="tab8"></slot>
          </a>
          <a
            v-on:click="activetab = '9'"
            v-bind:class="[activetab === '9' ? 'active' : '']"
          >
            <slot name="tab9"></slot>
          </a>
          <a
            v-on:click="activetab = '10'"
            v-bind:class="[activetab === '10' ? 'active' : '']"
          >
            <slot name="tab10"></slot>
          </a>
          <a
            v-on:click="activetab = '11'"
            v-bind:class="[activetab === '11' ? 'active' : '']"
          >
            <slot name="tab11"></slot>
          </a>
          <a
            v-on:click="activetab = '12'"
            v-bind:class="[activetab === '12' ? 'active' : '']"
          >
            <slot name="tab12"></slot>
          </a>
          <a
            v-on:click="activetab = '13'"
            v-bind:class="[activetab === '13' ? 'active' : '']"
          >
            <slot name="tab13"></slot>
          </a> -->
        </div>
        <!-- tabs for mobile screen size start here -->
        <select class="dropdown px-4 py-3 w-full" v-if="isOnMobile" @change="onChange" v-model="activetab">
          <option value="1">
            <slot name="tab1"></slot>
          </option>
          <option value="2">
            <slot name="tab2"></slot>
          </option>
          <option value="3">
            <slot name="tab3"></slot>
          </option>
          <option value="4">
            <slot name="tab4"></slot>
          </option>
          <option value="5">
            <slot name="tab5"></slot>
          </option>
          <option value="6">
            <slot name="tab6"></slot>
          </option>
          <option value="7">
            <slot name="tab7"></slot>
          </option>
          <!-- <option value="8">
            <slot name="tab8"></slot>
          </option>
          <option value="9">
            <slot name="tab9"></slot>
          </option>
          <option value="10">
            <slot name="tab10"></slot>
          </option>
          <option value="11">
            <slot name="tab11"></slot>
          </option>
          <option value="12">
            <slot name="tab12"></slot>
          </option>
          <option value="13">
            <slot name="tab13"></slot>
          </option> -->
        </select>
      </div>
      <!-- tabs  view  start here -->
      <div class="pt-2">
        <div v-if="activetab === '1'" class="tabcontent">
          <slot name="view1"></slot>
        </div>
        <div v-if="activetab === '2'" class="tabcontent">
          <slot name="view2"></slot>
        </div>
        <div v-if="activetab === '3'" class="tabcontent">
          <slot name="view3"></slot>
        </div>
        <div v-if="activetab === '4'" class="tabcontent">
          <slot name="view4"></slot>
        </div>
        <div v-if="activetab === '5'" class="tabcontent">
          <slot name="view5"></slot>
        </div>
        <div v-if="activetab === '6'" class="tabcontent">
          <slot name="view6"></slot>
        </div>
        <div v-if="activetab === '7'" class="tabcontent">
          <slot name="view7"></slot>
        </div>
        <div v-if="activetab === '8'" class="tabcontent">
          <slot name="view8"></slot>
        </div>
        <div v-if="activetab === '9'" class="tabcontent">
          <slot name="view9"></slot>
        </div>
        <div v-if="activetab === '10'" class="tabcontent">
          <slot name="view10"></slot>
        </div>
        <div v-if="activetab === '11'" class="tabcontent">
          <slot name="view11"></slot>
        </div>
        <div v-if="activetab === '12'" class="tabcontent">
          <slot name="view12"></slot>
        </div>
        <div v-if="activetab === '13'" class="tabcontent">
          <slot name="view13"></slot>
        </div>
      </div>
      <!-- tabs  view  start end -->
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
// export default {
//   setup() {
    const activetab = ref('1');
    const isOnMobile = ref(false);

    const onResize = () => {
      if (window.innerWidth <= 768) {
        isOnMobile.value = true;
      } else {
        isOnMobile.value = false;
      }
    };

    onMounted(() => {
      onResize();
      window.addEventListener('resize', onResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize);
    });

    const onChange = (e) => {
      activetab.value = e.target.value;
    };
</script>