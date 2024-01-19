<template>
  <div class="container">
    <ul class="flex my-[36px]">
      <li>Home <span class="mx-1">/</span></li>
      <li>Shop <span class="mx-1">/</span></li>
      <li>Checkout</li>
    </ul>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 md: sm:grid-cols-1 gap-x-[22px] mb-[210px]">
      <!-- colonka start 1 -->
      <form action="">
        <h3 class="text-darkGray font-semibold">Billing Address</h3>
        <div class="mt-[21px] grid gap-y-[30px]">
          <!-- input -->
          <div>
            <label class="text-[15px] text-darkGray" for="">First Name </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              type="text"
              v-model="text"
            />
          </div>
          <!-- inpur -->
          <!-- Select -->
          <div>
            <label class="text-[15px] text-darkGray" for="">Country/Region </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <select
              class="border rounded w-full py-2 px-3 mt-[10px] text-alfa outline-none"
              name=""
              id=""
            >
              <option value="">Select a country / region</option>
              <option value="">America</option>
              <option value="">Uzbekiston</option>
              <option value="">Turkish</option>
            </select>
          </div>
          <!-- Select -->
          <!-- input -->
          <div>
            <label class="text-[15px] text-darkGray" for="">Street Address </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              placeholder="House number and street name "
              type="text"
            />
          </div>
          <!-- input -->
          <!-- Select -->
          <div>
            <label class="text-[15px] text-darkGray" for="">State </label
            ><span :class="text ? '' : 'text-red-600'">*</span>
            <br />
            <select
              class="border rounded w-full py-2 px-3 mt-[10px] text-alfa outline-none"
              name=""
              id=""
            >
              <option value="">Select a state</option>
              <option value="">Washington</option>
              <option value="">Urganch</option>
              <option value="">Istanbul</option>
            </select>
          </div>
          <!-- Select -->
          <!-- input -->
          <div>
            <label class="text-[15px] text-darkGray" for="">Email address </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              type="text"
            />
          </div>
          <!-- input -->
          <!-- input -->
          <div class="flex place-items-center">
            <input type="radio" id="foo" class="mr-2 accent-green w-4 h-4" />
            <label for="foo" class="font-medium">Ship to a different address?</label>
          </div>
          <!-- input -->
          <!-- Textare -->
          <div>
            <label for="" class="text-darkGray">Order notes (optional)</label>
           <textarea name="" class="w-full h-[152px] border text-alfa rounded outline-none my-4 resize-none" ></textarea>
          </div>
          <!-- Textare -->
        </div>
      </form>
      <!-- colonka end 1 -->

      <!-- colonka start 2 -->
      <div>
        <div class="mt-[44px] grid gap-y-[30px]">
          <!-- input -->
          <div>
            <label class="text-[15px] text-darkGray" for="">Last Name </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              type="text"
            />
          </div>
          <!-- input -->
          <!-- input -->
          <div>
            <label class="text-[15px] text-darkGray" for="">Town / City </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              type="text"
            />
          </div>
          <!-- input -->
          <!-- input -->
          <div>
            <input
              class="w-full border text-alfa p-2 mt-[34px] rounded outline-none"
              type="text"
              placeholder="Appartment, suite, unit, etc. (optional)"
            />
          </div>
          <!-- input -->
          <!-- input -->
          <div>
            <label class="text-[15px] text-darkGray" for="">Zip </label
            ><span :class="text ? '' : 'text-red-600'">*</span>

            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              type="text"
            />
          </div>
          <!-- input -->
          <!-- input -->
          <div class="mb-4">
            <label class="text-[15px] text-darkGray" for="">Phone Number </label>
            <span :class="text ? '' : 'text-red-600'">*</span>
            <input
              class="w-full border text-alfa p-2 mt-[10px] rounded outline-none"
              type="Number"
              value="+998"
            />
          </div>
          <!-- input -->
        </div>
      </div>
      <!-- colonka end 2 -->

      <!-- colonka start 3 -->
      <div v-for="order in orders">
        <h3 class="text-darkGray font-semibold">Your Order</h3>
        <div class="flex justify-between mt-[21px] text-darkGray">
          <p class="font-medium text-darkGray">Products</p>
          <p class="font-medium text-darkGray">Subtotal</p>
        </div>
        <hr class="text-slate-400 my-3" />

        <div class="flex justify-between items-center mb-2.5">
          <!-- card -->
          <div class="flex items-center max-w-[230px]">
            <!-- img -->
            <div class="w-[70px] h-[70px] mr-3">
              <img
                class="w-full h-full object-cover"
                :src="order.img"
                alt=""
              />
            </div>
            <!-- img -->
            <div>
              <h3 class="text-darkGray font-medium">{{ order.title }}</h3>
              <p class="text-sm mt-1.5 text-darkGray">
                <span class="text-gray">SKU:</span> {{ order.sk }}
              </p>
            </div>
          </div>
          <span class="text-gray text-sm w-8">(x {{ order.num }})</span>
          <span class="text-green text-lg font-bold w-[82px] ml-1">{{ order.price }}</span>
        </div>
        <div class="flex justify-between items-center mb-2.5">
          <!-- card -->
          <div class="flex items-center max-w-[230px]">
            <!-- img -->
            <div class="w-[70px] h-[70px] mr-3">
              <img
                class="w-full h-full object-cover"
                :src="order.img"
                alt=""
              />
            </div>
            <!-- img -->
            <div>
              <h3 class="text-darkGray font-medium">{{ order.title }}</h3>
              <p class="text-sm mt-1.5 text-darkGray">
                <span class="text-gray">SKU:</span> {{ order.sk }}
              </p>
            </div>
          </div>
          <span class="text-gray text-sm w-8">(x {{ order.num }})</span>
          <span class="text-green text-lg font-bold w-[82px] ml-1">{{ order.price }}</span>
        </div>
        <div class="flex justify-between items-center mb-2.5">
          <!-- card -->
          <div class="flex items-center max-w-[230px]">
            <!-- img -->
            <div class="w-[70px] h-[70px] mr-3">
              <img
                class="w-full h-full object-cover"
                :src="order.img"
                alt=""
              />
            </div>
            <!-- img -->
            <div>
              <h3 class="text-darkGray font-medium">{{ order.title }}</h3>
              <p class="text-sm mt-1.5 text-darkGray">
                <span class="text-gray">SKU:</span> {{ order.sk }}
              </p>
            </div>
          </div>
          <span class="text-gray text-sm w-8">(x {{ order.num }})</span>
          <span class="text-green text-lg font-bold w-[82px] ml-1">{{ order.price }}</span>
        </div>
        <!-- card -->
        
        <!-- Totol -->
        <div class="grid justify-end">
          <!-- Summa -->
          <div class="flex items-center max-w-[321px] w-full" >
            <div class="grid gap-4">
              <p class="text-sm text-darkGray">Subtotal</p>
              <p class="text-sm text-darkGray">Coupon Discount</p>
              <p class="text-sm text-darkGray">Shiping</p>
            </div>
            <div class="grid text-end gap-4">
              <p class="text-sm text-darkGray">
                Have a coupon code? <span class="text-green">Click here</span>
              </p>
              <p class="text-lg font-medium text-darkGray">$2,683.00</p>
              <p class="text-sm text-darkGray">(-) 00.00</p>
              <p class="text-lg font-medium text-darkGray">$16.00</p>
              <p class="text-green text-xs">View shipping charge</p>
            </div>
          </div>
          <!-- Summa -->
          <hr class="text-slate-400 my-3" />
          <!-- Payme -->
          <div>
            <div class="flex justify-between">
              <h3 class="text-darkGray font-bold">Total</h3>
              <span class="text-green text-lg font-bold">$2,699.00</span>
            </div>
            <h3 class="text-darkGray font-bold mt-12 mb-5">Payment Method</h3>
            <div class="grid gap-4 mb-[49px]">
              <div class="flex gap-2.5 items-center border p-3 rounded text-[#EAEAEA]">
                <input type="radio" name="job" id="too" class="mr-2 accent-green w-4 h-4" />
                <label for="too">
                  <img src="../../public/img/Payme.png" alt="">
                </label>
              </div>
              <div class="flex gap-2.5 items-center border p-3 rounded text-[#EAEAEA]">
                <input type="radio" name="job" id="roo" class="mr-2 accent-green w-4 h-4" />
               <label for="roo" class="text-sm text-darkGray">Dorect bank transfer</label>
              </div>
              <div class="flex gap-2.5 items-center border p-3 rounded text-[#EAEAEA]">
                <input type="radio" name="job" id="goo" class="mr-2 accent-green w-4 h-4" />
                <label for="goo" class="text-sm text-darkGray">Cash on delivery</label>
              </div>
            </div>
            <button class="text-sm text-white w-full py-3 bg-green rounded">Place Order</button>

          </div>
          <!-- Payme -->
        </div>
      </div>
      <!-- colonka end 3 -->
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

let text = ref("");

const requaried = ref(true);
const orders = [
  {
    img:'../../public/img/Shop 1.png',
    title:'Barberton Daisy',
    sk:'1995751877966',
    num:'2',
    price: '$238.00'
  }
]







</script>
