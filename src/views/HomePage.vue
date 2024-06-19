<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contacts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-searchbar v-model="searchQuery"></ion-searchbar>
      <ion-list>
        <ion-item v-for="contact in filteredContacts" :key="contact.id" :router-link="`/${contact.id}`">
          <ion-label>
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.email }}</p>
          </ion-label>
          <ion-button slot="end" color="danger" @click="deleteContact(contact.id)">
            Supprimer
          </ion-button>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button :router-link="'/create'">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<script>
import { ref, computed } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    const contacts = ref([]);
    const searchQuery = ref('');

    if (localStorage.getItem('contacts')) {
      contacts.value = JSON.parse(localStorage.getItem('contacts'));
    }

    const filteredContacts = computed(() => {
      return contacts.value.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const deleteContact = (id) => {
      contacts.value = contacts.value.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(contacts.value));
    };

    return {
      searchQuery,
      filteredContacts,
      deleteContact
    };
  }
};
</script>
