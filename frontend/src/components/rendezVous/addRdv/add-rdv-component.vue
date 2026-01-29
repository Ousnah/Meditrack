<script>
export default {
    name: 'addRdvComponent',
    methods: {
        handleClick() {
            alert('Ajouter un nouveau rendez-vous');
        }
    }
}
</script>

<template>

    <div class="add-rdv-container">
        <div class="add-rdv-text">
            <h2>Rendez vous</h2>
            <p>2 à venir </p>
        </div>
        <button class="add-rdv-button" @click="handleClick"> + </button>
    </div>

</template>

<style scoped>

.add-rdv-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.add-rdv-text h2 {
    margin: 0;
    font-size: 24px;
    color: #0f2722;
}
.add-rdv-text p {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #6b7280;
}

.add-rdv-button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #3a8d7a;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
}

</style>