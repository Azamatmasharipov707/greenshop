<template>
    <div>
        <Navbar />
        <div class="container">
            <ul class="mt-9 mb-11">
                <li><b>Home</b> / Shop</li>
            </ul>
            <div class="grid grid-cols-2">
                <div class="flex items-center gap-x-7">
                    <div class="flex flex-col gap-y-4">
                        <div @click="tabIndex = 1" :class="`cursor-pointer border  ${tabIndex == 1 ? 'border-green' : 'border-white'}`" ><img src="../../public/img/shop/img1.png" alt=""></div>
                        <div @click="tabIndex = 2" :class="`cursor-pointer border  ${tabIndex == 2 ? 'border-green' : 'border-white'}`" ><img src="../../public/img/shop/img4.png" alt=""></div>
                        <div @click="tabIndex = 3" :class="`cursor-pointer border  ${tabIndex == 3 ? 'border-green' : 'border-white'}`" ><img src="../../public/img/shop/img3.png" alt=""></div>
                        <div @click="tabIndex = 4" :class="`cursor-pointer border  ${tabIndex == 4 ? 'border-green' : 'border-white'}`" ><img src="../../public/img/shop/img4.png" alt=""></div>
                    </div>
                    <div>
                        <img src="../../public/img/shop/img5.png" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div>
                    <h3 class="text-3xl font-bold text-darkGray mb-5">Barberton Daisy</h3>
                    <div class="flex items-center justify-between pb-3 border-b-[1px] border-[rgba(70,_163,_88,_0.50)]">
                        <span class="text-2xl text-green font-bold">$119.00</span>
                        <div class="flex items-center gap-x-3">
                            <div class="flex">
                                <Icon icon="ph:star-fill" class="text-yellow-500" />
                                <Icon icon="ph:star-fill" class="text-yellow-500" />
                                <Icon icon="ph:star-fill" class="text-yellow-500" />
                                <Icon icon="ph:star-fill" class="text-yellow-500" />
                                <Icon icon="ph:star-fill" class="text-gray" />
                            </div>
                            <p>19 Customer Review</p>
                        </div>
                    </div>
                    <div class="mt-4 mb-6">
                        <p class="font-medium text-darkGray mb-3">Short Description:</p>
                        <p class="text-gray text-sm leading-6">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
                        </p>
                    </div>
                    <div>
                        <p class="font-medium text-darkGray">Size:</p>
                        <div class="flex gap-x-3 mt-3 mb-6">
                            <button @click="btnIndex = 1" :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 1 ? 'border-green text-green' : 'border-gray text-gray'}`">S</button>
                            <button @click="btnIndex = 2" :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 2 ? 'border-green text-green' : 'border-gray text-gray'}`">M</button>
                            <button @click="btnIndex = 3" :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 3 ? 'border-green text-green' : 'border-gray text-gray'}`">L</button>
                            <button @click="btnIndex = 4" :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 4 ? 'border-green text-green' : 'border-gray text-gray'}`">XL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const tabIndex = ref(1)
const btnIndex = ref(1)



</script>

<style lang="scss" scoped>

</style>