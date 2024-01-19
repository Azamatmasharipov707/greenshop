<template>
    <section class="mb-16">
        <div class="container">
            <div class="text-center">
                <h2 class="text-3xl text-darkGray font-bold capitalize mb-3">Our Blog Posts</h2>
                <p class="text-sm text-gray">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-11 py-9">
                <div class="bg-zinc-100" v-for="item in 4">
                    <div>
                        <img src="../../img/blog/img.png" alt="" class="w-full object-cover">
                    </div>
                    <div class="pt-2 px-4 pb-3">
                        <p class="text-green text-sm font-medium mb-1">September 12  I Read in 6 minutes</p>
                        <h3 class="text-xl font-bold text-darkGray mb-1">Cactus & Succulent Care Tips</h3>
                        <p class="text-sm text-gray mb-2">Cacti are succulents are easy care plants for any home or patio. </p>
                        <RouterLink to="/" class="flex items-center gap-x-1 text-darkGray font-medium hover:text-green duration-300 w-max">Read More <Icon icon="majesticons:arrow-right-line" /></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';


</script>

<style lang="scss" scoped>

</style>