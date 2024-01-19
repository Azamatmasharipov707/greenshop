<template>
    <div>
       <Navbar />
       <Header />
       <Categories />
       <Offering />
       <BlogPost />
    </div>
</template>

<script setup>
import BlogPost from '@/components/BlogPost.vue';
import Categories from '@/components/Categories.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Offering from '@/components/Offering.vue';
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped>

</style>