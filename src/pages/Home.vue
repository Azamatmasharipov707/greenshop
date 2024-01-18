<template>
    <div>
       <Navbar />
       <Header />
       <Categories />
       <Offering />
    </div>
</template>

<script setup>
import Categories from '@/components/Categories.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Offering from '@/components/Offering.vue';
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped>

</style>