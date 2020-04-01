<template>
    <v-layout column>
      <v-layout class="pa-3" justify-end>
        <v-btn
          color="primary"
          large
          @click="editRealty"
        >
          <span>Редактировать</span>
          <v-icon class="ml-3">mdi-pencil</v-icon>
        </v-btn>
      </v-layout>

      <view-photos :photos="realty.previewImages" />

      <v-layout wrap justify-space-between>
        <v-flex class="display-1 font-weight-bold pa-4 mx-4 pb-3" xs12>
          {{ Number(parseFloat(realty.price)).toLocaleString() }} руб.
        </v-flex>

        <v-flex xs12 lg8 class="mb-6">
          <info-card :realty="realty" />
        </v-flex>

        <v-flex xs12 lg3>
          <contact-card
            :counterparty="realty.counterparty"
            :realtor="realty.realtor"
          />
        </v-flex>
      </v-layout>
    </v-layout>
</template>

<script>
import ContactCard from './ContactCard';
import ViewPhotos from './ViewPhotos';
import InfoCard from './InfoCard';

export default {
  name: 'RealtiesView',

  components: {
    ContactCard,
    ViewPhotos,
    InfoCard,
  },

  created() {
    this.loadRealty();
  },

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    async loadRealty() {
      await this.$store.dispatch('realties/loadRealty', this.id);
    },
    editRealty() {
      this.$router.push({ name: 'realties.edit', params: { id: this.id }});
    },
  },
};
</script>
