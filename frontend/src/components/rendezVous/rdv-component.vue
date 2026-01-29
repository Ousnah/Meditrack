<script setup>
import './rdv.css';
import RdvCardsComponent from './rdvCards/rdv-cards-component.vue';
import addRdvComponent from './addRdv/add-rdv-component.vue';
</script>

<template>
    <addRdvComponent />
    <h2>A venir</h2>
    <div class="rdv-component">
        <RdvCardsComponent
            profilePicture="https://randomuser.me/api/portraits/men/32.jpg"
            nom="Dupont"
            prenom="Jean"
            profession="Cardiologue"
            operation="Consultation de suivi"
            date="12 Octobre 2024"
            heure="14:30"
            adresse="123 Rue de la Santé, Paris"
            :isPast="false"
        />
    </div>
    <h2>Historique</h2>
    <div class="rdv-component">
        <RdvCardsComponent
            profilePicture="https://randomuser.me/api/portraits/men/32.jpg"
            nom="Dupont"
            prenom="Jean"
            profession="Cardiologue"
            operation="Consultation de suivi"
            date="12 Octobre 2024"
            heure="14:30"
            adresse="123 Rue de la Santé, Paris"
            :isPast="true"
        />
    </div>

</template>

<style scoped>
.rdv-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

h2 {
    color: #333333;
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 20px;
}
</style>