<template>
<NuxtImg :src="product.imgPath" width="200" height="200"/>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>€ {{ product.price }}</p>
</template>

<script setup lang="ts">
import type { Product } from '~/server/api/products';


// Define the props
const props = defineProps<{
  product: Product; // Define the product prop as a Product type
}>();
</script>