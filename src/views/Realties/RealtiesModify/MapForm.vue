<template>
  <v-card>
    <v-card-title>Место на карте</v-card-title>

    <v-card-text>
      <v-layout column>
        <v-text-field
          v-model="realty.coord"
          :rules="[rulesList.required]"
          label="Координаты"
        />

        <realty-map :coords="realty.coord" />
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import RealtyMap from '@/components/helper/RealtyMap';

export default {
  name: 'MapForm',

  components: {
    RealtyMap,
  },

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
  },
};
</script>
