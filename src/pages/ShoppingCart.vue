<template>
    <div>
        <Navbar />
        <section>
            <div class="container">
                <ul class="mt-9 mb-11">
                    <li><b>Home</b> / Shop / Shopping Cart </li>
                </ul>
                <div class="flex">
                    <table class="max-w-[1000px] w-full">
                        <thead class="border-b-[1px] border-b-[rgba(70,_163,_88,_0.50)] pb-3">
                            <tr class="text-left text-darkGray">
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-[#FBFBFB]">
                                <td class="flex items-center gap-x-3">
                                    <div class="w-20 h-20">
                                        <img src="../../img/shop/img1.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                    <div>
                                        <p class="text-darkGray font-bold">Barberton Daisy</p>
                                        <p class="text-sm text-gray">SKU: <span class="text-darkGray">1995751877966</span>
                                        </p>
                                    </div>
                                </td>
                                <td class="font-semibold text-gray">
                                    $119.00
                                </td>
                                <td>
                                    <div class="flex items-center gap-x-4">
                                        <button @click="decr()"
                                            class="w-9 h-10 bg-green text-2xl text-white rounded-full">-</button>
                                        <span class="w-5 h-5 flex justify-center items-center text-xl">{{ num }}</span>
                                        <button @click="incr()"
                                            class="w-9 h-10 bg-green text-2xl text-white rounded-full">+</button>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex justify-between pr-6">
                                        <span class="text-green font-bold mr-7">{{ getCalc }}</span>
                                        <button class="text-xl text-gray hover:text-greenHover">
                                            <Icon icon="mi:delete-alt" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';

const num = ref(1);

const incr = () => {
    return num.value++
}
const decr = () => {
    if (num.value > 1) return num.value--
}


const price = ref(119)


const getCalc = computed(() => {
    const totalPrice = `$${price.value * num.value}.00`;
    return totalPrice
})
</script>

<style lang="scss" scoped></style>