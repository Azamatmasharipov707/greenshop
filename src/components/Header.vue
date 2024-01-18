<template>
    <div>
        <div class="container">
            <Carousel :autoplay="3000" :wrap-around="true" class="mt-3 bg-zinc-100">
                <Slide v-for="slide in 3" :key="slide" class="pt-3 pb-3 xl:pt-16 xl:pb-20 px-4 xl:px-10 flex flex-col md:flex-row">
                    <div class="text-center md:text-left">
                        <p class="text-sm font-medium text-darkGray mb-2 tracking-[1.4px] uppercase">Welcome to GreenShop
                        </p>
                        <h1 class="text-4xl lg:text-7xl uppercase font-black xl:max-w-[565px] w-full text-darkGray mb-1">
                            Let’s Make a Better <span class="text-green">Planet</span>
                        </h1>
                        <p class="text-sm text-gray max-w-[557px] w-full mb-3 md:mb-10">We are an online plant shop offering a wide
                            range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your
                            favorite plants!</p>
                        <BaseButton title="SHOP NOW" />
                    </div>
                    <div class="max-w-[400px] xl:max-w-[510px] w-full">
                        <img src="../../img/header-img.png" alt="" class="w-full h-full">
                    </div>

                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import BaseButton from './BaseButton.vue';

defineComponent({
    name: 'Autoplay',
})
</script>  
<style>
.carousel__slide {
    justify-content: space-between;
}

.carousel__pagination-button::after {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #46A3584D;
}

.carousel__pagination-button.carousel__pagination-button--active .carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
   background: green;
}
</style> 
