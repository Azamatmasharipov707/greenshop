<template>
    <section class="pb-32">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-9 lg:gap-y-0 lg:gap-x-5">
                <div class="relative flex justify-between items-center h-[250px] py-8 px-6 bg-zinc-100">
                    <div class="relative h-full w-full">
                        <img src="../../public/img/offering/img-2.png" alt="" class="absolute h-[140%] top-[-35%] object-cover">
                        <img src="../../public/img/offering/circle1.svg" alt="" class="absolute h-full left-0 bottom-0">
                        <img src="../../public/img/offering/circle2.svg" alt="" class="absolute h-full left-0 bottom-0">
                    </div>
                    <div class="flex flex-col gap-y-4 text-right">
                        <p class="text-xl font-bold text-darkGray w-44 uppercase text-right ml-auto">Summer cactus & succulents</p>
                        <p class="text-sm text-gray">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        <BaseButton title="Find More" />
                    </div>
                </div>
                <div class="relative flex justify-between items-center h-[250px] py-8 px-6 bg-zinc-100">
                    <div class="relative h-full w-full">
                        <img src="../../public/img/offering/img-1.png" alt="" class="absolute h-[140%] top-[-35%] object-cover">
                        <img src="../../public/img/offering/circle1.svg" alt="" class="absolute h-full left-0 bottom-0">
                        <img src="../../public/img/offering/circle2.svg" alt="" class="absolute h-full left-0 bottom-0">
                    </div>
                    <div class="flex flex-col gap-y-4 text-right">
                        <p class="text-xl font-bold text-darkGray w-44 uppercase text-right ml-auto">Summer cactus & succulents</p>
                        <p class="text-sm text-gray">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        <BaseButton title="Find More" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseButton from './BaseButton.vue';


</script>

<style lang="scss" scoped>

</style>