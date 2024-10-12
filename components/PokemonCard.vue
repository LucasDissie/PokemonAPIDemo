<template>
  <UCard>
    <template #header>
      <!-- Display the Pokemon's name if data is available -->
      <h1 v-if="data && data.success">{{ data.data?.name }}</h1>
      <h1 v-else>Loading...</h1>
    </template>

    <!-- Display the Pokemon's sprite image if available -->
    <NuxtImg
      v-if="data && data.success && data.data?.sprites.front_default"
      class="w-20"
      :src="data.data.sprites.front_default"
    />
  </UCard>
</template>

<script setup lang="ts">
import type { PokemonResponse } from '~/server/api/pokemon/[name]';

// Define props and ensure `pokemonId` is passed in correctly
const props = defineProps<{
  pokemonId: number;
}>();

// Fetch the Pokemon data based on the `pokemonId` prop and define its type
const { data, pending, error } = await useFetch<PokemonResponse>('/api/pokemon/' + props.pokemonId);

// You can handle the pending state and errors if needed
</script>
