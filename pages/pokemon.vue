<script setup lang="ts">
const { data } = await useFetch('/api/pokemon/48')


</script>

<template>
    <div class="flex flex-wrap gap-2 flex-row">
     <PokemonCard v-for="index in 1025" :pokemonId="index"></PokemonCard>
   </div>
</template>