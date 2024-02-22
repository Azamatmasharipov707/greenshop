<template>
    <div>
        <Navbar />
        <section class="mb-20">
            <div class="container">
                <ul class="mt-9 mb-11">
                    <li><b>Home</b> / Shop / Shopping Cart </li>
                </ul>
                <div class="flex justify-between gap-x-2 flex-wrap xl:flex-nowrap">
                    <table class="max-w-[1000px] w-full h-max border-separate border-spacing-y-3">
                        <thead class="border-b-[1px] border-b-[rgba(70,_163,_88,_0.50)] pb-3">
                            <tr class="text-left text-darkGray">
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody class="border-separate border-spacing-3">
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
                    <div class="max-w-[500px] mx-auto xl:max-w-[380px] w-full">
                        <p class="font-bold border-b-[1px] border-[rgba(70,_163,_88,_0.50)] text-darkGray text-lg">Cart
                            Totals</p>
                        <p class="text-sm text-darkGray py-3">Coupon Apply</p>
                        <div class="flex justify-between border border-green rounded mb-7">
                            <input type="text" placeholder="Enter coupon code here..." class="py-3 px-2 text-xs xl:text-base">
                            <button class="bg-green py-3 pr-6 pl-9 text-white font-bold hover:bg-greenHover">Apply</button>
                        </div>
                        <div>
                            <p class="flex justify-between items-center mb-4">
                                <span class="text-darkGray">Subtotal</span>
                                <span class="text-lg text-darkGray font-bold">$2,683.00</span>
                            </p>
                            <p class="flex justify-between items-center mb-4">
                                <span class="text-darkGray">Coupon Discount</span>
                                <span class="text-lg text-darkGray font-bold">(-) 00.00</span>
                            </p>
                            <p class="flex justify-between items-center mb-4">
                                <span class="text-darkGray">Shiping</span>
                                <span class="text-lg text-darkGray font-bold">$16.00</span>
                            </p>
                            <div class="flex justify-end">
                                <button class="text-sm text-green">View shipping charge</button>
                            </div>
                            <div class="flex justify-between items-center my-7">
                                <p class="to-darkGray font-bold">Total</p>
                                <span class="text-green font-bold text-lg">$2,699.00</span>
                            </div>
                            <div class="flex flex-col">
                                <button
                                    class="w-full bg-green rounded py-3 text-white font-bold hover:bg-greenHover mb-3">Proceed
                                    To Checkout</button>
                                <!-- <button class="text-green">Continue Shopping</button> -->
                                <button class="btn">Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h3>You may be interested in</h3>
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
