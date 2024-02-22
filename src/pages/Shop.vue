<template>
    <div>
        <Navbar />
        <section class="mb-[250px]">
            <div class="container">
                <ul class="mt-9 mb-11">
                    <li><b>Home</b> / Shop</li>
                </ul>
                <div class="grid xl:grid-cols-2">
                    <div class="flex flex-col-reverse xl:flex-row items-center gap-x-7 mb-7 xl:mb-0">
                        <div class="flex xl:flex-col gap-y-4">
                            <div @click="tabIndex = 1"
                                :class="`cursor-pointer border  ${tabIndex == 1 ? 'border-green' : 'border-white'}`"><img
                                    src="../../public/img/shop/img1.png" alt=""></div>
                            <div @click="tabIndex = 2"
                                :class="`cursor-pointer border  ${tabIndex == 2 ? 'border-green' : 'border-white'}`"><img
                                    src="../../public/img/shop/img4.png" alt=""></div>
                            <div @click="tabIndex = 3"
                                :class="`cursor-pointer border  ${tabIndex == 3 ? 'border-green' : 'border-white'}`"><img
                                    src="../../public/img/shop/img3.png" alt=""></div>
                            <div @click="tabIndex = 4"
                                :class="`cursor-pointer border  ${tabIndex == 4 ? 'border-green' : 'border-white'}`"><img
                                    src="../../public/img/shop/img4.png" alt=""></div>
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
                                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                                ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants
                                off
                                the ground.
                            </p>
                        </div>
                        <div>
                            <p class="font-medium text-darkGray">Size:</p>
                            <div class="flex gap-x-3 mt-3 mb-6">
                                <button @click="btnIndex = 1"
                                    :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 1 ? 'border-green text-green' : 'border-gray text-gray'}`">S</button>
                                <button @click="btnIndex = 2"
                                    :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 2 ? 'border-green text-green' : 'border-gray text-gray'}`">M</button>
                                <button @click="btnIndex = 3"
                                    :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 3 ? 'border-green text-green' : 'border-gray text-gray'}`">L</button>
                                <button @click="btnIndex = 4"
                                    :class="`w-7 h-7 border rounded-full flex justify-center items-center text-sm font-bold ${btnIndex == 4 ? 'border-green text-green' : 'border-gray text-gray'}`">XL</button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-3 xl:flex-row xl:items-center gap-x-7">
                            <div class="flex items-center gap-x-6">
                                <button @click="decrement()"
                                    class="w-9 h-10 bg-green text-2xl text-white rounded-full">-</button>
                                <span class="w-5 h-5 flex justify-center items-center text-xl">{{ number }}</span>
                                <button @click="increment()"
                                    class="w-9 h-10 bg-green text-2xl text-white rounded-full">+</button>
                            </div>
                            <div class="flex flex-col sm:flex-row xl:items-center gap-x-3 gap-y-3">
                                <button
                                    class="py-3 px-8 bg-green text-sm text-white font-bold rounded-md hover:bg-greenHover duration-300">Buy
                                    NOW</button>
                                <button
                                    class="py-3 px-8  text-sm text-green font-bold rounded-md border border-green hover:bg-green hover:text-white duration-300 uppercase">Add
                                    to cart</button>
                                <button
                                    class="py-3 px-3  text-sm text-green font-bold rounded-md border border-green hover:bg-green hover:text-white duration-300 uppercase">
                                    <Icon class="text-xl mx-auto" icon="iconamoon:heart-thin" />
                                </button>
                            </div>
                        </div>
                        <div class="mt-7">
                            <p class="mb-3">
                                <span class="text-gray">SKU:</span>
                                <span class="text-darkGray ml-1">1995751877966</span>
                            </p>
                            <p class="mb-3">
                                <span class="text-gray">Categories:</span>
                                <span class="text-darkGray ml-1">Potter Plants</span>
                            </p>
                            <p class="mb-3">
                                <span class="text-gray">Tags:</span>
                                <span class="text-darkGray ml-1">Home, Garden, Plants</span>
                            </p>
                            <div class="flex items-center gap-x-4">
                                <p class="text-darkGray font-medium">Share this products:</p>
                                <div class="flex items-center text-xl text-darkGray gap-x-5">
                                    <a href="#!">
                                        <Icon icon="ri:facebook-fill" />
                                    </a>
                                    <a href="#!">
                                        <Icon icon="mdi:twitter" />
                                    </a>
                                    <a href="#!">
                                        <Icon icon="ri:linkedin-fill" />
                                    </a>
                                    <a href="#!">
                                        <Icon icon="lets-icons:message-light" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-[120px]">
            <div class="container">
                <div>
                    <div class="flex items-center gap-x-7 mb-4 border-b-[1px] border-b-[rgba(70,_163,_88,_0.50)]">
                        <button @click="descIndex = 1"
                            :class="`text-lg font-bold pb-3 border-b-2  ${descIndex == 1 ? 'border-b-green' : 'border-b-white'}`">Product
                            Description</button>
                        <button @click="descIndex = 2"
                            :class="`text-lg font-bold pb-3 border-b-2  ${descIndex == 2 ? 'border-b-green' : 'border-b-white'}`">Reviews
                            (19)</button>
                    </div>
                    <div v-if="descIndex == 1">
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                            tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo
                            gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <p class="text-sm text-gray leading-6 mb-7">
                            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                            eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                            sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
                            nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
                            luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic
                            cylinder planters come with a wooden stand to help elevate your plants off the ground.
                        </p>
                        <strong>Living Room:</strong>
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <strong>Dining Room:</strong>
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <strong>Office:</strong>
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div v-if="descIndex == 2">
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                            tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo
                            gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.

                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                            tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo
                            gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <p class="text-sm text-gray leading-6 mb-7">
                            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                            eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                            sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
                            nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
                            luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic
                            cylinder planters come with a wooden stand to help elevate your plants off the ground.
                        </p>
                        <strong>Living Room:</strong>
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <strong>Dining Room:</strong>
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <strong>Office:</strong>
                        <p class="text-sm text-gray leading-6 mb-7">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off
                            the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-[120px]">
            <div class="container">
                <h3 class="pb-3 text-green font-bold text-lg border-b-[1px]">Releted Products</h3>
                <div>
                    <Carousel :autoplay="3000" :items-to-show="5" :wrap-around="true" class="mt-3">
                        <Slide v-for="slide in 3" :key="slide"
                            class="pt-3 pb-3 xl:pt-16 xl:pb-20 px-4 xl:px-10 flex flex-col md:flex-row">
                            <ProductCard />
                        </Slide>
                        <template #addons>
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import ProductCard from '@/components/ProductCard.vue';
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';

import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


const tabIndex = ref(1)
const btnIndex = ref(1)
const number = ref(1)
const increment = () => {
    return number.value++
}
const decrement = () => {
    if (number.value > 0) return number.value--
}

const descIndex = ref(1)


</script>

<style lang="scss">
.carousel__pagination-button::after {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #46A3584D;
}

.carousel__pagination-button.carousel__pagination-button--active .carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
    background: green;
}
</style>