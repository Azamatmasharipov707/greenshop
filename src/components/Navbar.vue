<template>
  <div class="">
    <div class="container">
      <div
        class="hidden lg:flex justify-between items-center overflow-hidden border-b-[0.03px] border-green"
      >
        <RouterLink to="/">
          <img src="../../img/Logo.svg" alt="logo" />
        </RouterLink>
        <ul class="flex gap-x-12">
          <li v-for="(item, index) in links" :key="index" @click="">
            <RouterLink 
              :to="item.link" 
              class="py-9 block text-darkGray hover:text-shadow-sm relative before:block before:absolute before:w-full before:bottom-0 hover:before:h-1 before:bg-green"
            >
              {{ item.text }}
            </RouterLink>
            <!-- require('tailwindcss-textshadow') text-shadow ishlashi uchun  -->
          </li>
        </ul>
        <ul class="flex items-center gap-x-7">
          <li class="flex items-center relative">
            <input
              type="search"
              class="outline-none border border-gray rounded-lg absolute duration-300 px-2 py-1"
              :class="activeClose ? 'translate-x-[150%]' : '-translate-x-full'"
            />
            <button @click="searchBtn()">
              <Icon icon="material-symbols:search" class="text-4xl text-darkGray" />
            </button>
          </li>
          <li>
            <button class="relative">
              <Icon icon="icon-park-outline:shopping" class="text-4xl text-darkGray" />
              <span
                class="absolute h-5 w-5 bg-green rounded-full top-0 ring-0 border-2 border-[#fff] text-xs text-white"
                >6</span
              >
            </button>
          </li>
          <li>
            <!-- Login -->
            <button
             @click="openModel"
              class="flex items-center py-2 px-4 bg-green rounded-md text-white font-medium hover:bg-greenHover duration-300"
            >
              <Icon icon="tabler:logout" class="text-2xl" />
              Login
            </button>
            <!-- Login -->
          </li>
        </ul>
      </div>
      <div class="lg:hidden mt-4 py-6">
        <div class="flex justify-between items-center">
          <div
            class="flex items-center gap-x-2 px-3 bg-[#f8f8f8] w-full mr-2 rounded-2xl"
          >
            <Icon icon="material-symbols:search" class="text-4xl text-[#A5A5A5]" />
            <input
              type="text"
              placeholder="Find your plants"
              class="h-full w-full py-3 bg-inherit outline-none text-[#A5A5A5]"
            />
          </div>
          <button
            class="h-11 w-11 rounded-2xl bg-green flex items-center justify-center shrink-0 shadow-[3px_5px_10px_0px_rgba(70,_163,_88,_0.50)]"
          >
            <img src="../../img/btn.svg" alt="" @click="toggleBtn = !toggleBtn" />
          </button>
        </div>
        <div
          class="bg-zinc-400 fixed top-0 h-full max-w-[250px] w-full px-6 pt-10 duration-300 flex items-start justify-between"
          :class="toggleBtn ? 'left-0' : '-left-full'"
        >
          <div>
            <ul>
              <li v-for="(item, index) in links" :key="index">
                <RouterLink
                  :to="item.link"
                  class="text-xl text-white pb-3 block hover:text-green"
                  >{{ item.text }}</RouterLink
                >
              </li>
            </ul>
            <ul class="flex items-center gap-x-2">
              <li>
                <button
                  class="flex items-center py-2 px-4 bg-green rounded-md text-white font-medium hover:bg-greenHover duration-300"
                >
                  <Icon icon="tabler:logout" class="text-2xl" />
                  Login
                </button>
              </li>
              <li>
                <button class="relative">
                  <Icon
                    icon="icon-park-outline:shopping"
                    class="text-4xl text-darkGray"
                  />
                  <span
                    class="absolute h-5 w-5 bg-green rounded-full top-0 ring-0 border-2 border-[#fff] text-xs text-white"
                    >6</span
                  >
                </button>
              </li>
            </ul>
          </div>
          <button class="text-white text-3xl" @click="toggleBtn = !toggleBtn">x</button>
        </div>
      </div>
    </div>
  </div>
  <div>

  </div>
</template>

<script setup>
import router from '@/router';
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import LoginRegister from './LoginRegister.vue';


const links = ref([
  { link: "/", text: "Home" },
  { link: "/", text: "Shop" },
  { link: "/", text: "Plant Care" },
  { link: "/", text: "Blogs" },
]);

let activeClose = ref(true);
let toggleBtn = ref(false);

const searchBtn = () => {
  activeClose.value = !activeClose.value;
  
};
// login bosilganda
const emit = defineEmits(['bosilganda'])
const openModel = () =>{
  emit('bosilganda', true)
}
// login bosilganda

</script>
