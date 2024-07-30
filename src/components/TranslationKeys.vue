<template>
    <div>
      <h1>Translation Keys for Application ID: {{ $route.params.appId }}</h1>
      <ul>
        <li v-for="translation in translations" :key="translation.id">
          {{ translation.key }}: {{ translation.value }}
        </li>
      </ul>
      <div>
        <input v-model="newKey" placeholder="Key" />
        <input v-model="newValue" placeholder="Value" />
        <button @click="addTranslationKey">Add Translation Key</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        translations: [],
        newKey: '',
        newValue: ''
      }
    },
    mounted() {
      this.fetchTranslations();
    },
    methods: {
      async fetchTranslations() {
        try {
          const response = await axios.get(`/api/translations/${this.$route.params.appId}`);
          this.translations = response.data;
        } catch (error) {
          console.error('Error fetching translations:', error);
        }
      },
      async addTranslationKey() {
        if (!this.newKey || !this.newValue) {
          alert('Please enter both key and value');
          return;
        }
        try {
          await axios.post(`/api/translations/${this.$route.params.appId}`, null, {
            params: { key: this.newKey, value: this.newValue }
          });
          this.newKey = '';
          this.newValue = '';
          this.fetchTranslations();
        } catch (error) {
          console.error('Error adding translation key:', error);
          alert('Failed to add translation key. Please try again.');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  input {
    margin-right: 10px;
  }
  </style>
  