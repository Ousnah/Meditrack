<script setup>
import './rdvCards.css';

defineProps({
    profilePicture: { type: String, default: '' },
    nom: { type: String, default: '' },
    prenom: { type: String, default: '' },
    profession: { type: String, default: '' },
    operation: { type: String, default: '' },
    date: { type: String, default: '' },
    heure: { type: String, default: '' },
    adresse: { type: String, default: '' },
});
</script>

<template>
  <div class="rdv-cards">
    <div class="card-header">
        <img :src="profilePicture" alt="Profile Picture" class="profile-picture" />
        <div class="user-info">
            <h2>Dr {{ prenom }} {{ nom }}</h2>
            <p>{{ profession }}</p>
            <p>{{ operation }}</p>
        </div>
    </div>
    <p> {{ date }}</p>
    <p> {{ heure }}</p>
    <p> {{ adresse }}</p>
    <button class="details-button">Voir les détails</button>
  </div>
</template>
