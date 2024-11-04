import { defineStore } from 'pinia';
import axios from 'axios';

export const useExampleStore = defineStore('example', {
  state: () => ({
    data: null,
    error: null,
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/endpoint`, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_KEY}`,
          },
        });
        this.data = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
});
