<template>
  <v-card class="px-4">
    <v-card-title>Замеры недвижимости</v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex xs6>
          <v-text-field
            v-model="realty.livingArea"
            label="Общая площадь"
            type="number"
            min="0"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.area"
            label="Площадь"
            type="number"
            min="0"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.kitchenArea"
            label="Площадь кухни"
            type="number"
            min="0"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.floor"
            type="number"
            label="Этаж"
            min="0"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.roomCount"
            label="Количество комнат"
            type="number"
            min="0"
          />
        </v-flex>
        <v-flex xs6>
          <v-select
            v-model="realty.readyState"
            :items="readyStates"
            item-value="Value"
            item-text="Text"
            label="Статус недвижимости"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.roomType"
            label="Тип комнат"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.storeysNumber"
            label="Этажность"
            type="number"
            min="0"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.cadastralNumber"
            label="Кадастравый номер"
            v-mask="cadastralNumber"
          />
        </v-flex>

        <v-flex xs6>
          <v-select
            v-model="realty.status"
            :items="estateStates"
            item-value="Value"
            label="Состояние"
            item-text="Text"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'MeasuringForm',

  directives: {
    mask,
  },

  created() {
    this.loadReadyStates();
    this.loadEstateStates();
  },

  data: () => ({
    cadastralNumber: '##:##:#######:#####',
  }),

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
    readyStates() {
      return this.$store.getters['realties/getReadyStates'];
    },
    estateStates() {
      return this.$store.getters['types/getEstateStates'];
    },
  },

  methods: {
    loadReadyStates() {
      this.$store.dispatch('realties/loadReadyState');
    },
    loadEstateStates() {
      this.$store.dispatch('types/loadEstateStates');
    },
  },
};
</script>
