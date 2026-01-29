<template>
  <main class="doc" role="main" aria-label="Page Documents médicaux">
    <!-- Header -->
    <header class="header">
      <h1>Chirurgie Suivi</h1>
      <p>Votre parcours chirurgical étape par étape</p>
    </header>

    <!-- Content -->
    <div class="container">
      <!-- Documents Header -->
      <section class="documents-header" aria-label="En-tête documents">
        <h2>Documents médicaux</h2>
        <div class="header-info">
          <span class="doc-count">6 documents</span>
          <button class="upload-btn" aria-label="Télécharger un nouveau document" title="Télécharger">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
          </button>
        </div>
      </section>

      <!-- Category Filters -->
      <nav class="category-filters" role="tablist" aria-label="Filtrer les documents par catégorie">
        <button 
          v-for="category in categories"
          :key="category.id"
          :class="['filter-btn', { active: activeCategory === category.id }]"
          :role="'tab'"
          :aria-selected="activeCategory === category.id"
          @click="activeCategory = category.id"
        >
          {{ category.label }}
        </button>
      </nav>

      <!-- Documents List -->
      <section class="documents-list" aria-label="Liste des documents">
        <article 
          v-for="doc in filteredDocuments" 
          :key="doc.id"
          class="document-card"
        >
          <div class="doc-header">
            <div class="doc-icon" aria-hidden="true">📋</div>
            
            <div class="doc-content">
              <h3 class="doc-title">{{ doc.title }}</h3>
              <span class="doc-category" :class="`category-${doc.category.toLowerCase()}`">
                {{ doc.category }}
              </span>
              <div class="doc-meta">
                <span>{{ doc.date }}</span>
                <span>•</span>
                <span>{{ doc.size }}</span>
              </div>
            </div>
          </div>

          <div class="doc-actions">
            <button class="action-btn view-btn" aria-label="Voir le document" title="Voir">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Voir</span>
            </button>
            <button class="action-btn download-btn" aria-label="Télécharger le document" title="Télécharger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Télécharger</span>
            </button>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import './Doc.css'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'chirurgie', label: 'Chirurgie' },
  { id: 'ordonnances', label: 'Ordonnances' },
  { id: 'examens', label: 'Examens' },
]

const documents = [
  {
    id: 1,
    title: 'Compte rendu opératoire',
    category: 'Chirurgie',
    date: '15 Jan 2026',
    size: '245 KB',
  },
  {
    id: 2,
    title: 'Ordonnance post-opératoire',
    category: 'Ordonnances',
    date: '15 Jan 2026',
    size: '156 KB',
  },
  {
    id: 3,
    title: 'Consentement éclairé',
    category: 'Administratif',
    date: '10 Jan 2026',
    size: '89 KB',
  },
  {
    id: 4,
    title: 'Bilan pré-opératoire',
    category: 'Examens',
    date: '5 Jan 2026',
    size: '512 KB',
  },
  {
    id: 5,
    title: 'Analyse de sang',
    category: 'Examens',
    date: '3 Jan 2026',
    size: '234 KB',
  },
  {
    id: 6,
    title: 'Prescription antibiotique',
    category: 'Ordonnances',
    date: '20 Jan 2026',
    size: '67 KB',
  },
]

const filteredDocuments = computed(() => {
  if (activeCategory.value === 'all') {
    return documents
  }
  return documents.filter(doc => 
    doc.category.toLowerCase() === activeCategory.value
  )
})
</script>
