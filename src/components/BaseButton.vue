<template>
    <div>
        <button class="bg-green py-3 px-7 rounded-md font-bold text-white hover:bg-greenHover duration-300">{{ props.title }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss" scoped>

</style>