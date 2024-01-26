<template>
  <div>
    <p class="text-sm text-darkGray">Enter your username and password to login.</p>
    <form action="">
      <input
        class="border text-alfa w-full p-3.5 outline-none rounded my-3.5"
        type="text"
        placeholder="almamun_uxui@outlook.com"
      />
      <div class="relative">
        <input
          :type="inputType"
          class="border text-alfa w-full p-3.5 outline-none rounded"
          type="password"
          placeholder="Password"
        />
        <div
          @click="ToggleInput"
          class="absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center"
        >
          <span v-if="inputType == 'password'">
            <Icon
              class="top-5 w-5 cursor-pointer h-5 text-alfa"
              icon="iconamoon:eye-off"
            />
          </span>
          <span v-else>
            <Icon class="right-2 text-alfa cursor-pointer top-5 w-5 h-5" icon="ph:eye" />
          </span>
        </div>
      </div>
      <p class="text-sm text-green text-end mt-3.5 cursor-pointer">Forgot Password?</p>
    </form>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";



  
export default {
  components: {
    Icon,
  },
  data() {
    return {
      inputType: "password",
      register: "Register",
      // login:'Login.vue'
    };
  },
  methods: {
    ToggleInput() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
  },
};

  


  
</script>
