<template>
  <div>
    <div class="w-full h-full grid place-items-center fixed left-0 top-0 bg-[#0A0D1240]">
      <div
        class="max-w-[500px] w-full bg-white rounded border-b-green border-b-8 flex flex-col items-center"
      >
        <div class="w-full flex justify-end mt-3 mr-3">
          <Icon
            @click="hidden"
            class="w-6 h-6 text-green cursor-pointer"
            icon="ph:x"
          />
        </div>
        <div class="max-w-[300px] text-center">
          <div class="my-5">
            <span
              class="text-xl cursor-pointer text-darkGray font-medium "
              @click="isLogin = 'login'"
              :class="{ 'text-green':isLogin  == 'login'}"
              >Login</span
            >
            |
            <span
              @click="isLogin = 'registr'"
              class="text-xl cursor-pointer text-darkGray font-medium "
              :class="{ 'text-green': isLogin ==  'registr'}"
              >Register</span
            >
          </div>
          <div>
            <div v-if="isLogin === 'login' ">
         
              <Login />
            </div>
            <div v-if="isLogin === 'registr'">
            
              <Register />
            </div>
          </div>

          <button
            class="bg-green hover:bg-greenHover w-full py-4 rounded font-bold mt-9 mb-7 text-white"
          >
            Login
          </button>
          <div class="relative">
            <div class="w-full h-[1px] absolute top-3 bg-[#EAEAEA]"></div>
            <span
              class="text-darkGray inline-block bg-white text-[13px] px-1 relative mb-7"
              >Or login with</span
            >
          </div>
          <div class="flex flex-col gap-y-4">
            <button class="border text-alfa rounded py-2.5 flex justify-center gap-x-2">
              <img src="../../public/img/google 1.png" alt="" />Login with Google
            </button>
            <button
              class="mb-[58px] py-2.5 border text-alfa rounded flex justify-center gap-x-2"
            >
              <img src="../../public/img/facebook 1.png" alt="" />Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from'vue'
import { Icon } from "@iconify/vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

export default {
  components: {
    Icon,
    Login,
    Register,
  },

  data() {
    return {
      isLogin: 'login',
      inputType: "password",
    };
  },
  methods: {
    ToggleInput() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
// x bosilganda
hidden () {
  this.$emit('bosilganda', false)
}
// x bosilganda

  },
};

</script>
