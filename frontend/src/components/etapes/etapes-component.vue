<template>
    <div class="etapes-container">
        <div class="etapes-cards">
            <Cards
                state="done"
                icon="medical-consultation"
                title="Consultation pré-opératoire"
                description="Consultation avec le chirurgien et bilan pré-opératoire"
                date="2 Jan 2026"
                :steps="card1Steps"
                @toggle-step="(index) => toggleStep(card1Steps, index)"
            />
            <Cards
                state="current"
                icon="clipboard"
                title="Préparation à l'intervention"
                description="Préparation physique et administrative avant la chirurgie"
                date="10-14 Jan 2026"
                :steps="card2Steps"
                @toggle-step="(index) => toggleStep(card2Steps, index)"
            />
            <Cards
                state="next"
                icon="surgery"
                title="Intervention chirurgicale"
                description="Jour de l'opération"
                date="15 Jan 2026"
                :steps="card3Steps"
                @toggle-step="(index) => toggleStep(card3Steps, index)"
            />
            <Cards
                state="next"
                icon="hospital-bed"
                title="Post-opératoire immédiat"
                description="Surveillance et récupération en hospitalisation"
                date="15-17 Jan 2026"
                :steps="card4Steps"
                @toggle-step="(index) => toggleStep(card4Steps, index)"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import './etapes.css';
import Cards from './cards/cards-component.vue';

const card1Steps = ref([
    { label: 'Consultation chirurgien', done: true },
    { label: 'Bilan sanguin', done: true },
    { label: 'ECG', done: true },
    { label: 'Consultation anesthésiste', done: true }
]);

const card2Steps = ref([
    { label: 'Arrêt de certains médicaments', done: true },
    { label: 'Jeûne pré-opératoire (12h)', done: true },
    { label: 'Douche antiseptique', done: false },
    { label: 'Documents administratifs', done: true },
    { label: 'Prévoir accompagnant', done: false }
]);

const card3Steps = ref([
    { label: 'Arrivée à la clinique (2h avant)', done: false },
    { label: 'Préparation en salle', done: false },
    { label: 'Intervention', done: false },
    { label: 'Salle de réveil', done: false }
]);

const card4Steps = ref([
    { label: 'Surveillance 24h', done: false },
    { label: 'Gestion de la douleur', done: false },
    { label: 'Premiers levés', done: false },
    { label: 'Reprise alimentaire', done: false },
    { label: 'Soins de la plaie', done: false }
]);

const toggleStep = (steps, index) => {
    steps[index].done = !steps[index].done;
};
</script>

<style src="./etapes.css" scoped></style>