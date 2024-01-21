<template>
    <div>
       <Navbar />
       <Header />
       <Categories />
       <Offering />
       <BlogPost />
       <Footer />
    </div>
</template>

<script setup>
import BlogPost from '@/components/BlogPost.vue';
import Categories from '@/components/Categories.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Offering from '@/components/Offering.vue';
</script>

<style lang="scss" scoped>

</style>