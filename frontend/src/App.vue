<script setup>
  import { ref } from 'vue';
  import TabBar from './components/TabBar.vue';
  import Home from './components/home/Home.vue';
  import Etapes from './components/etapes/Etapes.vue';

  const activeTab = ref('home');

  const navigationTabs = [
    { id: 'home', label: 'Accueil', icon: 'home' },
    { id: 'steps', label: 'Étapes', icon: 'steps' },
    { id: 'appointments', label: 'Rendez-vous', icon: 'calendar' },
    { id: 'documents', label: 'Documents', icon: 'documents' },
  ];

  const handleTabChange = (newTab) => {
    activeTab.value = newTab;
  };
</script>

<template>
  <div id="app">
    <!-- Home Tab -->
    <section v-if="activeTab === 'home'">
      <Home />
    </section>

    <!-- Steps Tab -->
    <section v-if="activeTab === 'steps'">
      <div class="container">
        <h1>Étapes</h1>
        <p>Vos étapes seront affichées ici</p>
      </div>
      <Etapes />
    </section>

    <!-- Appointments Tab -->
    <section v-if="activeTab === 'appointments'" class="tab-content">
      <div class="container">
        <h1>📅 Rendez-vous</h1>
        <p>Vos rendez-vous seront affichés ici</p>
      </div>
    </section>

    <!-- Documents Tab -->
    <section v-if="activeTab === 'documents'" class="tab-content">
      <div class="container">
        <h1>📄 Documents</h1>
        <p>Vos documents seront affichés ici</p>
      </div>
    </section>

    <!-- TabBar Navigation -->
    <TabBar :tabs="navigationTabs" default-tab="home" @tab-change="handleTabChange" />
  </div>
</template>

<style scoped>
#app {
  background: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 56px;
}

.tab-content {
  padding: 16px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.container h1 {
  font-size: 24px;
  margin-bottom: 12px;
}

.container p {
  color: #6b7280;
}

@media (min-width: 768px) {
  #app {
    padding-bottom: 64px;
  }
}
</style>
