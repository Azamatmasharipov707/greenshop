<template>
    <section class="mt-11 mb-32">
        <div class="container">
            <div class="flex gap-x-12">
                <div class="bg-zinc-100 max-w-[310px] w-full h-max p-5">
                    <p class="text-lg text-darkGray font-bold mb-2">Categories</p>
                    <ul>
                        <li v-for="item, index in categorLink" :key="index" class="ml-3">
                            <button class="flex justify-between text-[15px] mb-3 w-full">
                                <span>{{ item.btn }}</span>
                                <span>({{ item.number }})</span>
                            </button>
                        </li>
                    </ul>
                    <div>
                        <p class="text-lg font-bold mb-5">Price Range</p>
                        <input type="range" v-model="range" class="w-3/4" id="range">
                        <p class="text-[15px] mb-4">Price: <span class="text-green font-bold">${{ 39 }} - ${{ 39 * range
                        }}</span></p>
                        <button
                            class="py-2 px-6 rounded-md bg-green text-white font-bold hover:bg-greenHover">Filter</button>
                    </div>
                    <div class="mt-11 pb-4">
                        <p class="text-lg font-black mb-2">Size</p>
                        <ul>
                            <li v-for="item in 3" class="flex justify-between mb-2 ml-3">
                                <span>Small</span>
                                <span>(119)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src="../../public/img/Super Sale Banner.png" alt="">
                    </div>
                </div>
                <div class="w-full relative overflow-hidden">
                    <div class="flex justify-between">
                        <ul class="flex items-center gap-x-9 text-[15px] ">
                            <li>
                                <button class="py-2 relative before:block before:absolute before:w-full before:bottom-0 hover:before:h-1 before:bg-green">All Plants</button>
                            </li>
                            <li>
                                <button class="py-2 relative before:block before:absolute before:w-full before:bottom-0 hover:before:h-1 before:bg-green">New Arrivals</button>
                            </li>
                            <li>
                                <button class="py-2 relative before:block before:absolute before:w-full before:bottom-0 hover:before:h-1 before:bg-green">Sale</button>
                            </li>
                        </ul>
                        <div>
                            Short by:
                            <select>
                                <option value="">Default sorting</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-x-9 gap-y-16 mt-8">
                        <ProductCard v-for="item in 9" />
                    </div>
                    <div class="flex items-center gap-x-2 mt-20 justify-end">
                        <button class="w-9 h-9 border border-gray rounded">1</button>
                        <button class="w-9 h-9 border border-gray rounded">2</button>
                        <button class="w-9 h-9 border border-gray rounded">3</button>
                        <button class="w-9 h-9 border border-gray rounded">4</button>
                        <button class="w-9 h-9 border border-gray rounded">></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import axios from 'axios';

const categorLink = ref([
    { btn: 'House Plants', number: 33 },
    { btn: 'Potter Plants', number: 33 },
    { btn: 'Seeds', number: 33 },
    { btn: 'House Plants', number: 33 },
    { btn: 'House Plants', number: 33 },
    { btn: 'House Plants', number: 33 },
    { btn: 'House Plants', number: 33 },
    { btn: 'House Plants', number: 33 },
    { btn: 'House Plants', number: 33 },
])

const range = ref('')

/* let product = ref([])

const getPosts = async () => {
    let res = await axios.get('https://dummyjson.com/products')
    if(res.status === 200) {
        console.log(res.data)
        product = [...res.data.products]
    }
}

onMounted(() => {
    getPosts()
}) */

</script>

<style lang="scss" scoped></style>
