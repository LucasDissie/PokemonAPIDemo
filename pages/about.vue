<template>
    <section>
      <p>This page will be displayed at the /about route.</p>
      <pre>{{ data }}</pre>
    </section>
  </template>

<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>
  