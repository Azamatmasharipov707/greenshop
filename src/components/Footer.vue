<template>
    <footer>
        <div class="container">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 py-8 bg-zinc-100">
                <div :class="`pl-6 pr-8  border-zinc-300 ${index == 2 ? 'border-r-0' : 'border-r-[1px]'}`"
                    v-for="item, index  in 3">
                    <div>
                        <img src="../../img/footer/img.png" alt="">
                    </div>
                    <h3 class="text-[17px] font-bold text-darkGray mt-4 mb-2">Garden Care</h3>
                    <p class="text-sm text-gray leading-7">We are an online plant shop offering a wide range of cheap and
                        trendy plants.</p>
                </div>
                <div class="px-12 py-3 xl:py-0 col-span-1 xl:pr-6 lg:col-span-3 xl:col-span-1 flex flex-col items-center text-center xl:text-left">
                    <h3 class="text-lg text-darkGray font-bold">Would you like to join newsletters?</h3>
                    <div class="flex w-full py-4">
                        <input type="text" placeholder="enter your email address..." class="w-full p-3 text-sm rounded-l-md outline-none">
                        <button class="bg-green px-6 rounded-r-md text-lg text-white font-bold">Join</button>
                    </div>
                    <p class="text-sm text-gray leading-6">
                        We usually post offers and challenges in newsletter. We’re your online houseplant    destination. We
                        offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center xl:justify-start flex-wrap gap-3 xl:gap-20 py-7 px-6 bg-[rgba(70,_163,_88,_0.10)] border-t-[1px] border-b-[1px] border-t-[#46A358] border-b-[#46A358]">
                <RouterLink to="/"><img src="../../img/Logo.svg" alt=""></RouterLink>
                <ul class="flex items-center flex-wrap gap-4 lg:gap-20">
                    <li>
                        <a href="/" class="flex items-center gap-x-3  text-darkGray max-w-60 w-full">
                            <Icon class="text-green text-2xl shrink-0" icon="fluent:location-28-regular" />
                            70 West Buckingham Ave. Farmingdale, NY 11735
                        </a>
                    </li>
                    <li>
                        <a href="/" class="flex items-center gap-x-3  text-darkGray max-w-60 w-full">
                            <Icon class="text-green text-2xl shrink-0" icon="lets-icons:message-light" />
                            contact@greenshop.com
                        </a>
                    </li>
                    <li>
                        <a href="/" class="flex items-center gap-x-3  text-darkGray max-w-60 w-full">
                            <Icon class="text-green text-2xl shrink-0" icon="solar:phone-calling-linear" />
                            +88 01911 717 490
                        </a>
                    </li>
                </ul>
            </div>
            <div class="grid sm:grid-cols-3 sm:text-center lg:text-left sm:place-items-center lg:place-items-baseline lg:grid-cols-4 gap-y-5 py-8 border-b-[1px] border-b-[#46A358]">
                <ul>
                    <h3 class="text-lg font-bold text-darkGray capitalize mb-2">My Account</h3>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">my account</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">our stores</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">contact us</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">career</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">spesials</RouterLink>
                    </li>
                </ul>
                <ul>
                    <h3 class="text-lg font-bold text-darkGray capitalize mb-2">Help & Guide</h3>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">help center</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">how to bay</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">shipping & delivery</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">product policy</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">how to return</RouterLink>
                    </li>
                </ul>
                <ul>
                    <h3 class="text-lg font-bold text-darkGray capitalize mb-2">Categories</h3>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">house plants</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">potter plants</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">seeds</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">small plants</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="capitalize text-sm text-darkGray mb-2 block">accessories</RouterLink>
                    </li>
                </ul>
                <div class="sm:col-start-2 lg:col-start-auto">
                    <h3 class="text-lg font-bold text-darkGray capitalize mb-5">Social Media</h3>
                    <ul class="flex items-center gap-x-3 mb-8">
                        <li>
                            <a href="#!" class="w-8 h-8 border border-[rgba(70,_163,_88,_0.20)] flex justify-center items-center rounded-md hover:scale-[1.1] duration-300"><Icon class="text-green text-xl" icon="gg:facebook" /></a>
                        </li>
                        <li>
                            <a href="#!" class="w-8 h-8 border border-[rgba(70,_163,_88,_0.20)] flex justify-center items-center rounded-md hover:scale-[1.1] duration-300"><Icon class="text-green text-xl" icon="ri:instagram-line" /></a>
                        </li>
                        <li>
                            <a href="#!" class="w-8 h-8 border border-[rgba(70,_163,_88,_0.20)] flex justify-center items-center rounded-md hover:scale-[1.1] duration-300"><Icon class="text-green text-xl" icon="mdi:twitter" /></a>
                        </li>
                        <li>
                            <a href="#!" class="w-8 h-8 border border-[rgba(70,_163,_88,_0.20)] flex justify-center items-center rounded-md hover:scale-[1.1] duration-300"><Icon class="text-green text-xl" icon="ri:linkedin-fill" /></a>
                        </li>
                        <li>
                            <a href="#!" class="w-8 h-8 border border-[rgba(70,_163,_88,_0.20)] flex justify-center items-center rounded-md hover:scale-[1.1] duration-300"><Icon class="text-green text-xl" icon="mdi:youtube" /></a>
                        </li>
                    </ul>
                    <div>
                        <h3 class="text-lg font-bold text-darkGray capitalize mb-4">We accept</h3>
                        <div>
                            <img src="../../img/footer/visa.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-sm text-gray py-4 text-center">&copy; 2021 GreenShop. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';


</script>

<style lang="scss" scoped></style>