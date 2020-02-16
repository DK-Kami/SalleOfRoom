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
          <v-text-field
            v-model="realty.houseNumber"
            label="Номер дома"
            type="number"
            min="0"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.flatNumber"
            label="Номер квартиры"
            type="number"
            min="0"
          />
        </v-flex>
      </v-layout>

      <v-select
        v-model="realty.readyState"
        :items="readyStates"
        label="Статус недвижимости"
      />
    </v-card-text>
  </v-card>
</template>

<script>
const readyStates = [
  { text: 'Готов',    value: 'ready'  },
  { text: 'Закрыто',  value: 'stop'   },
];

export default {
  name: 'MeasuringForm',

  data: () => ({
    readyStates,
  }),

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
  },
};
</script>
