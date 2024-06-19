<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Détails du Contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item>
          <ion-label>Nom: {{ contact.name }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Email: {{ contact.email }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Téléphone: {{ contact.phone }}</ion-label>
        </ion-item>
        <ion-button expand="full" :router-link="`/${contact.id}/edit`">Modifier</ion-button>
      </ion-content>
    </ion-page>
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'DetailPage',
    setup() {
      const route = useRoute();
      const contact = ref(null);
  
      onMounted(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        const foundContact = contacts.find(c => c.id === parseInt(route.params.id));
        if (foundContact) {
          contact.value = foundContact;
        } else {
          router.push('/');
        }
      });
  
      return {
        contact
      };
    }
  };
  </script>
  