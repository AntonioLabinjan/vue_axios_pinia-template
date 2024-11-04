<template>
  <div>
    <h1>Data from API</h1>
    <p v-if="data">{{ data }}</p>
    <p v-if="error">Error: {{ error }}</p>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script>
import { useExampleStore } from './stores/exampleStore';

export default {
  setup() {
    const store = useExampleStore();

    return {
      data: store.data,
      error: store.error,
      fetchData: store.fetchData,
    };
  },
};
</script>
