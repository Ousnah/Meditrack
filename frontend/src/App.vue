<template>
  <div class="app">
    <div class="content">
      <!-- Home Tab -->
      <section v-if="activeTab === 'home'" class="tab-content">
        <h1>🏥 Accueil</h1>
      </section>

      <!-- Steps Tab -->
      <section v-if="activeTab === 'steps'" class="tab-content">
        <h1>📋 Étapes</h1>
        <p>Suivi des étapes de traitement</p>
        <div class="demo-section">
          <h2>Étapes en cours</h2>
          <ul>
            <li>✓ Étape 1 - Diagnostic</li>
            <li>▸ Étape 2 - Traitement</li>
            <li>○ Étape 3 - Suivi</li>
          </ul>
        </div>
      </section>

      <!-- Appointments Tab -->
      <section v-if="activeTab === 'appointments'" class="tab-content">
        <h1>📅 Rendez-vous</h1>
    
        
      </section>

      <!-- Documents Tab -->
      <section v-if="activeTab === 'documents'" class="tab-content">
        <h1>📄 Documents</h1>
        <p>Gestion des documents et fichiers</p>
        <div class="demo-section">
          <h2>Documents importants</h2>
          <ul>
            <li>📑 Rapport médical.pdf</li>
            <li>📑 Résultats analyses.pdf</li>
            <li>📑 Prescription.pdf</li>
          </ul>
        </div>
      </section>
    </div>

    <!-- Tab Navigation -->
    <TabBar :tabs="navigationTabs" :defaultTab="activeTab" @tab-change="activeTab = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabBar from './components/TabBar.vue'

const activeTab = ref('home')

const navigationTabs = [
  { id: 'home', label: 'Accueil', icon: 'home' },
  { id: 'steps', label: 'Étapes', icon: 'steps' },
  { id: 'appointments', label: 'Rendez-vous', icon: 'calendar' },
  { id: 'documents', label: 'Documents', icon: 'documents' }
]
</script>

<style scoped>
/* Mobile-first approach */
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.content {
  flex: 1;
  padding: 16px;
  width: 100%;
  overflow-y: auto;
}

.tab-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
}

p {
  color: #6b7280;
  font-size: 14px;
  margin: 0 0 24px 0;
  line-height: 1.6;
}

h2 {
  font-size: 18px;
  margin: 20px 0 12px 0;
  color: #374151;
}

.demo-section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px 0;
  color: #4b5563;
  font-size: 14px;
  border-bottom: 1px solid #f3f4f6;
}

li:last-child {
  border-bottom: none;
}

/* Tablet et plus grand */
@media (min-width: 640px) {
  .app {
    padding-bottom: 64px;
  }

  .content {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 32px;
    margin: 0 0 12px 0;
  }

  p {
    font-size: 16px;
  }

  h2 {
    font-size: 22px;
    margin: 28px 0 16px 0;
  }

  .demo-section {
    padding: 20px;
    margin-bottom: 20px;
  }

  li {
    padding: 12px 0;
    font-size: 16px;
  }
}
</style>
