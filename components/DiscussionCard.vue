<template>
    <UCard>
      <template #header>
        <!-- Display the Pokemon's name if data is available -->
        <h1 v-if="data && data.success">{{ data.data }}</h1>
        <h1 v-else>Loading...</h1>
      </template>
  
    </UCard>
  </template>
  
  <script setup lang="ts">
  import type { DiscussionResponse } from '~/server/api/discussion/[id]';
  
  // Define props and ensure `pokemonId` is passed in correctly
  const props = defineProps<{
    discussionId: number;
  }>();
  
  // Fetch the Pokemon data based on the `pokemonId` prop and define its type
  const { data, pending, error } = await useFetch<DiscussionResponse>('/api/discussion/' + props.discussionId);
  
  // You can handle the pending state and errors if needed
  </script>
  