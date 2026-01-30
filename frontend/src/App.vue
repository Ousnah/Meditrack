<script setup>
  import { ref } from 'vue';
  import TabBar from './layout/tabbar/tabbar-component.vue';
  import Header from './components/Chirurgie_Suivi/Header.vue';
  import Home from './components/home/home-component.vue';
  import Etapes from './components/etapes/etapes-component.vue';
  import ContainerSection from './components/container/ContainerSection.vue';
  import rdvComponent from './components/rendezVous/rdv-component.vue';
  import docComponent from './components/doc/doc-component.vue';

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
  <div id="app" role="application" aria-label="Application Meditrack">
    <!-- Home Tab -->
    <section v-if="activeTab === 'home'" aria-label="Page d'accueil">
      <a href="#" class="backup-link" @click.prevent="handleTabChange(navigationTabs[0].id)" aria-label="Retour à l'accueil">Retour à l'accueil</a>
      <Home />
    </section>

    <!-- Steps Tab -->
    <section v-if="activeTab === 'steps'" aria-label="Page des étapes">
      <a href="#" class="backup-link" @click.prevent="handleTabChange(navigationTabs[0].id)" aria-label="Retour à l'accueil">Retour à l'accueil</a>
      <Etapes />
    </section>

    <!-- Appointments Tab -->
    <section v-if="activeTab === 'appointments'" class="tab-content" aria-label="Page des rendez-vous">
      <a href="#" class="backup-link" @click.prevent="handleTabChange(navigationTabs[0].id)" aria-label="Retour à l'accueil">Retour à l'accueil</a>
      <rdvComponent />
    </section>

    <!-- Documents Tab -->
    <section v-if="activeTab === 'documents'" class="tab-content" aria-label="Page des documents">
      <a href="#" class="backup-link" @click.prevent="handleTabChange(navigationTabs[0].id)" aria-label="Retour à l'accueil">Retour à l'accueil</a>
      <docComponent />
    </section>

    <!-- TabBar Navigation -->
    <TabBar :tabs="navigationTabs" default-tab="home" @tab-change="handleTabChange" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap');

#app {
  background: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 56px;
  font-family: 'Arimo', sans-serif;
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

.backup-link {
  display: hidden;
  margin-bottom: 12px;
  color: transparent;
  text-decoration: underline;
  cursor: pointer;
}

.backup-link:hover,
.backup-link:focus,
.backup-link:focus-visible {
  opacity: 1;
  color: #2563eb;
  display: inline-block;
}

/* visible focus outline for keyboard users */
.backup-link:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 3px;
}
</style>
