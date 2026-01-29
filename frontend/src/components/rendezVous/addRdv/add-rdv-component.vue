<script setup>
import { computed, ref } from 'vue';
import { supabase } from '../../../lib/supabase';

const props = defineProps({
  upcomingCount: { type: Number, default: 0 },
});

const emit = defineEmits(['created']);

const isModalOpen = ref(false);
const saving = ref(false);
const errorMessage = ref(null);

const form = ref({
  prenom: '',
  nom: '',
  profession: '',
  operation: '',
  date: '',
  heure: '',
  adresse: '',
  profilePicture: '',
});

const resetForm = () => {
  form.value = {
    prenom: '',
    nom: '',
    profession: '',
    operation: '',
    date: new Date().toISOString().slice(0, 10),
    heure: '09:00',
    adresse: '',
    profilePicture: '',
  };
};

const openModal = () => {
  errorMessage.value = null;
  resetForm();
  isModalOpen.value = true;
};

const closeModal = () => {
  if (saving.value) return;
  isModalOpen.value = false;
  errorMessage.value = null;
};

const upcomingLabel = computed(() => {
  const n = props.upcomingCount ?? 0;
  return `${n} à venir`;
});

const submit = async () => {
  errorMessage.value = null;
  if (!form.value.date || !form.value.heure) {
    errorMessage.value = 'Veuillez renseigner une date et une heure.';
    return;
  }

  saving.value = true;
  try {
    const startsAt = `${form.value.date}T${form.value.heure}:00`;

    const { error } = await supabase.from('rendezvous').insert({
      doctor_first_name: form.value.prenom,
      doctor_last_name: form.value.nom,
      profession: form.value.profession,
      operation: form.value.operation,
      address: form.value.adresse,
      profile_picture: form.value.profilePicture || null,
      starts_at: startsAt,
    });

    if (error) {
      console.error(error);
      errorMessage.value = error.message || "Impossible d'ajouter le rendez-vous.";
      return;
    }

    emit('created');
    closeModal();
  } finally {
    saving.value = false;
  }
};
</script>

<template>
  <div class="add-rdv-container">
    <div class="add-rdv-text">
      <h2>Rendez vous</h2>
      <p>{{ upcomingLabel }}</p>
    </div>
    <button class="add-rdv-button" type="button" @click="openModal" :disabled="saving"> + </button>
  </div>

  <div
    v-if="isModalOpen"
    role="dialog"
    aria-modal="true"
    aria-label="Ajouter un rendez-vous"
    style="position:fixed;inset:0;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;padding:14px;z-index:60;"
    @click.self="closeModal"
  >
    <div style="background:#fff;border-radius:14px;max-width:560px;width:100%;padding:20px;max-height:90vh;overflow-y:auto;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">
        <div>
          <h3 style="margin:0;font-size:16px;">Ajouter un rendez-vous</h3>
          <p style="margin:4px 0 0;color:#6b7280;font-size:12px;">Renseigne les informations du RDV</p>
        </div>
        <button
          type="button"
          class="add-rdv-button"
          style="background:#e5e7eb;color:#111827;font-size:14px;"
          @click="closeModal"
          :disabled="saving"
        >
          ✕
        </button>
      </div>

      <form style="margin-top:12px;display:flex;flex-direction:column;gap:10px;" @submit.prevent="submit">
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <label style="flex:1;min-width:180px;display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
            Prénom du médecin
            <input v-model.trim="form.prenom" required type="text" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
          </label>
          <label style="flex:1;min-width:180px;display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
            Nom du médecin
            <input v-model.trim="form.nom" required type="text" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
          </label>
        </div>

        <label style="display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
          Profession
          <input v-model.trim="form.profession" required type="text" placeholder="Ex: Cardiologue" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
        </label>

        <label style="display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
          Motif / Opération
          <input v-model.trim="form.operation" required type="text" placeholder="Ex: Consultation de suivi" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
        </label>

        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <label style="flex:1;min-width:180px;display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
            Date
            <input v-model="form.date" required type="date" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
          </label>
          <label style="flex:1;min-width:180px;display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
            Heure
            <input v-model="form.heure" required type="time" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
          </label>
        </div>

        <label style="display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
          Adresse
          <input v-model.trim="form.adresse" required type="text" placeholder="Ex: 123 Rue de la Santé, Paris" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
        </label>

        <label style="display:flex;flex-direction:column;gap:6px;font-size:12px;color:#374151;">
          Photo (URL) – optionnel
          <input v-model.trim="form.profilePicture" type="url" placeholder="https://…" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px;" :disabled="saving" />
        </label>

        <p v-if="errorMessage" style="margin:0;color:#b91c1c;font-size:12px;">{{ errorMessage }}</p>

        <button
          type="submit"
          class="add-rdv-button"
          style="width:100%;height:auto;border-radius:12px;padding:12px 16px;font-size:14px;"
          :disabled="saving"
        >
          {{ saving ? 'Ajout…' : 'Ajouter le rendez-vous' }}
        </button>
      </form>
    </div>
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