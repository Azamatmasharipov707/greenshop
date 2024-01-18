<template>
    <div class="relative group cursor-pointer">
        <div class="flex flex-col items-center">
            <span class="h-0 bg-green w-full group-hover:h-[1px] absolute"></span>
            <div class="w-full overflow-hidden">
                <img src="../../public/img/image-1.png" alt="" class="w-full object-cover">
            </div>
            <div class="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 flex gap-x-2">
                <button><Icon icon="icon-park-outline:shopping" class="text-4xl text-darkGray hover:text-green duration-300" /></button>
                <button><Icon icon="ph:heart-thin" class="text-4xl text-darkGray hover:text-green duration-300" /></button>
            </div>
        </div>
        <div class="mt-3">
            <p class="text-darkGraygray mb-1">Barberton Daisy</p>
            <p class="text-lg font-bold text-green">$169.00</p>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style lang="scss" scoped>

</style>