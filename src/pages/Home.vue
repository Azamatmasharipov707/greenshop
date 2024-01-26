<template>
  <div> 
      <Navbar @bosilganda="upIsOpen"/>
        <Shop/>   
        <LoginRegister v-if="isOpen" @bosilganda="upIsOpen"/>   
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Shop from "@/components/Shop.vue";
import LoginRegister from "@/components/LoginRegister.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isOpen = ref (false);
const upIsOpen = param => isOpen.value = param
</script>

<style lang="scss" scoped></style>
