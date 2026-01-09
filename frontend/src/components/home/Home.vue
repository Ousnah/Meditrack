<template>
  <main class="home" role="main" aria-label="Page d'accueil">
    <!-- Header -->
    <header class="header">
      <h1>Chirurgie Suivi</h1>
      <p>Votre parcours chirurgical étape par étape</p>
    </header>

    <!-- Content -->
    <div class="container">
      <!-- Greeting -->
      <section class="greeting" aria-label="Accueil personnalisé">
        <h2>Bonjour, Pierre 👋</h2>
        <p>Voici votre suivi du jour</p>
      </section>

      <!-- Status Badge -->
      <section class="status-badge" role="status" aria-live="polite">
        <span>Statut : Convalescence - Jour 3 post-op</span>
      </section>

      <!-- Next Appointment -->
      <section class="appointment-card" aria-label="Prochain rendez-vous">
        <header class="appointment-header">
          <h2 class="appointment-label">Prochain rendez-vous</h2>
          <button 
            class="info-button" 
            aria-label="Plus d'informations sur le rendez-vous"
            title="Plus d'informations"
          >
            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke-width="2"/>
              <line x1="12" y1="16" x2="12" y2="12" stroke-width="2"/>
              <line x1="12" y1="8" x2="12.01" y2="8" stroke-width="2"/>
            </svg>
          </button>
        </header>
        <article class="appointment-doctor">
          <h3>Dr. Sophie Martin</h3>
          <p class="specialty">Chirurgien</p>
          <p class="description">Contrôle post-opératoire J+10</p>
        </article>
        <div class="appointment-divider" role="presentation"></div>
        <div class="appointment-details">
          <div class="detail-item">
            <span class="detail-label" id="appointment-date-label">Date</span>
            <span class="detail-value" aria-labelledby="appointment-date-label">25 Jan</span>
          </div>
          <div class="detail-item">
            <span class="detail-label" id="appointment-time-label">Heure</span>
            <span class="detail-value" aria-labelledby="appointment-time-label">14:00</span>
          </div>
        </div>
      </section>

      <!-- Tasks Section -->
      <section class="section" aria-label="Tâches du jour">
        <header class="section-header">
          <h2>Tâches du jour</h2>
          <span class="count" aria-label="3 tâches à accomplir">3 tâches</span>
        </header>

        <ul class="tasks" role="list">
          <li class="task" role="listitem">
            <div class="task-left">
              <div class="task-indicator done" aria-hidden="true"></div>
              <div class="task-info">
                <div class="task-title">Soins de la plaie</div>
                <time class="task-time">09:00</time>
              </div>
            </div>
            <span class="task-status done" aria-label="Tâche accompllie">Fait</span>
          </li>

          <li class="task" role="listitem">
            <div class="task-left">
              <div class="task-indicator pending" aria-hidden="true"></div>
              <div class="task-info">
                <div class="task-title">Prise médicament anti-douleur</div>
                <time class="task-time">12:00</time>
              </div>
            </div>
            <span class="task-status pending" aria-label="Tâche à faire">À faire</span>
          </li>

          <li class="task" role="listitem">
            <div class="task-left">
              <div class="task-indicator pending" aria-hidden="true"></div>
              <div class="task-info">
                <div class="task-title">Exercices de mobilisation</div>
                <time class="task-time">15:00</time>
              </div>
            </div>
            <span class="task-status pending" aria-label="Tâche à faire">À faire</span>
          </li>
        </ul>
      </section>

      <!-- Documents Section -->
      <section class="section" aria-label="Documents récents">
        <header class="section-header">
          <h2>Documents récents</h2>
          <a href="#" class="see-all" aria-label="Voir tous les documents">Voir tout ></a>
        </header>

        <ul class="documents" role="list">
          <li class="document" role="listitem">
            <div class="doc-icon" aria-hidden="true">📄</div>
            <div class="doc-info">
              <div class="doc-title">Compte rendu opératoire</div>
              <div class="doc-meta">15 Jan 2026 · Chirurgie</div>
            </div>
          </li>

          <li class="document" role="listitem">
            <div class="doc-icon" aria-hidden="true">📄</div>
            <div class="doc-info">
              <div class="doc-title">Ordonnance post-opératoire</div>
              <div class="doc-meta">15 Jan 2026 · Ordonnances</div>
            </div>
          </li>

          <li class="document" role="listitem">
            <div class="doc-icon" aria-hidden="true">📄</div>
            <div class="doc-info">
              <div class="doc-title">Bilan pré-opératoire</div>
              <div class="doc-meta">5 Jan 2026 · Examens</div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
import './home.css';
</script>
