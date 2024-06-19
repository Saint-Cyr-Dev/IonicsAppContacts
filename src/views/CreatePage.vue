<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Ajouter un Contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item>
          <ion-label position="floating"></ion-label>
          <ion-input v-model="name" placeholder="Nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating"></ion-label>
          <ion-input v-model="email" placeholder="Email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating"></ion-label>
          <ion-input v-model="phone" placeholder="Téléphone"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="createContact">Ajouter</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'CreatePage',
    setup() {
      const router = useRouter();
      const name = ref('');
      const email = ref('');
      const phone = ref('');
  
      const createContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  
        const newContact = {
          id: Date.now(),
          name: name.value,
          email: email.value,
          phone: phone.value
        };
  
        contacts.push(newContact);
  
        localStorage.setItem('contacts', JSON.stringify(contacts));
  
        router.push('/');
      };
  
      return {
        name,
        email,
        phone,
        createContact
      };
    }
  };
  </script>
  