<template>
  <v-card class="px-4">
    <v-card-title>Прочее</v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex xs6>
          <v-text-field
            v-model="realty.header"
            label="Заголовок"
          />
        </v-flex>

        <v-flex xs12>
          <v-select
            v-model="realty.repairs"
            :items="repairs"
            item-value="Value"
            label="Ремонт"
            item-text="Text"
          />
        </v-flex>

        <v-flex xs12>
          <v-textarea
            v-model="realty.message"
            label="Текст"
            filled
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'AddressForm',

  created() {
    this.loadRepairs();
  },

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
    repairs() {
      return this.$store.getters['types/getRepairs'];
    },
  },

  methods: {
    async loadRepairs() {
      await this.$store.dispatch('types/loadRepairs');
    },
  },
};
</script>
