<template>
  <v-container grid-list-xl px-0>
    <v-card class="px-6">
      <v-layout wrap>
        <v-flex xs3>
          <v-checkbox
            v-model="realty.onDomClick"
            label="Выгрузка: ДомКлик"
          />
        </v-flex>

        <v-flex xs12 sm6 md3 lg3>
          <v-checkbox
            v-model="realty.OnRestat"
            label="Выгрузка: Рестат"
          />
        </v-flex>

        <v-flex xs12 sm6 md3 lg3>
          <v-checkbox
            v-model="realty.OnMirKvartir"
            label="Выгрузка: Мир квартир"
          />
        </v-flex>

        <v-flex xs12 sm6 md3 lg3>
          <v-checkbox
            v-model="realty.OnGdeEtotDom"
            label="Выгрузка: Где этот дом"
          />
        </v-flex>

        <v-flex xs12 sm6 md3 lg3>
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