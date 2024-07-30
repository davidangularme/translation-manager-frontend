<template>
  <div>
    <h1>Applications</h1>
    <ul>
      <li v-for="app in applications" :key="app.id">
        {{ app.name }}
        <button @click="downloadExcel(app.id)">Download XLSX</button>
        <button @click="deployTranslations(app.id)">Deploy</button>
        <router-link :to="{ name: 'TranslationKeys', params: { appId: app.id } }">Manage Translations</router-link>
      </li>
    </ul>
    <div>
      <input v-model="newAppName" placeholder="New application name" />
      <button @click="addApplication">Add Application</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      applications: [],
      newAppName: ''
    }
  },
  mounted() {
    this.fetchApplications();
  },
  methods: {
    async fetchApplications() {
      try {
        const response = await axios.get('/api/applications');
        this.applications = response.data;
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    },
    async addApplication() {
      try {
        await axios.post('/api/applications', null, { params: { name: this.newAppName } });
        this.newAppName = '';
        this.fetchApplications();
      } catch (error) {
        console.error('Error adding application:', error);
      }
    },
    async downloadExcel(appId) {
      try {
        const response = await axios.get(`/api/translations/${appId}/download`, { responseType: 'blob' });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'translations.xlsx');
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error('Error downloading Excel:', error);
      }
    },
    async deployTranslations(appId) {
      try {
        await axios.post(`/api/translations/${appId}/deploy`);
        alert('Translations deployed successfully');
      } catch (error) {
        console.error('Error deploying translations:', error);
      }
    }
  }
}
</script>
