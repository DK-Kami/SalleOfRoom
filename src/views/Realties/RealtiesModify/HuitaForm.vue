<template>
  <v-card>
    <v-card-title>Прочее</v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex xs12 lg6>
          <v-text-field
            v-model="realty.header"
            :rules="[rulesList.required]"
            label="Заголовок"
          />
        </v-flex>

        <v-flex xs12>
          <v-select
            v-model="realty.repairs"
            :items="repairs"
            label="Ремонт"
          />
        </v-flex>

        <v-flex xs12>
          <v-textarea
            v-model="realty.message"
            :rules="[rulesList.required]"
            label="Текст"
            filled
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddressForm',

  created() {
    this.loadRepairs();
  },

  computed: {
    ...mapGetters({
      realty: 'realties/getRealty',
      repairs: 'types/getRepairs',
    }),
  },

  methods: {
    async loadRepairs() {
      await this.$store.dispatch('types/loadRepairs');
    },
  },
};
</script>
