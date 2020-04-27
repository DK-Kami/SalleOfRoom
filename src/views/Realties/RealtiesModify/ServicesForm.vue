<template>
  <v-container grid-list-xl px-0>
    <v-card class="px-6">
      <v-layout>
        <v-flex xs6>
          <v-checkbox
            v-model="realty.onDomClick"
            label="Выгрузка: ДомКлик"
          />
        </v-flex>

        <v-flex xs6>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ServicesForm',

  computed: {
    ...mapGetters({
      realty: 'realties/getRealty',
    }),
  },
};
</script>