<script setup lang="ts">
const { data } = await useFetch('/api/products')


</script>

<template>

<div v-for="product in data" class="flex flex-col items-center">
    <Product :product="product"></Product>
</div>
<pre>{{ data }}</pre>
</template>