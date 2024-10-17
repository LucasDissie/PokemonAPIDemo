<template>
<pre>{{ data }}</pre>

<div class="flex flex-wrap gap-2 flex-row">
     <PokemonCard v-for="index in 100" :pokemonId="index"></PokemonCard>
   </div>

</template>

<script setup lang="ts">

const { data } = await useFetch('/api/discussions')
</script>