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

        <v-flex xs6>
          <v-text-field
            v-model="realty.roomTypes"
            label="Тип комнат"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.commission"
            label="Комииссия"
            type="number"
            min="0"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.floors"
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
            v-model="realty.state"
            :items="states"
            item-value="Value"
            label="Состояние"
            item-text="Text"
          />
        </v-flex>

        <v-flex xs12>
          <v-checkbox
            v-model="realty.withRepair"
            label="С ремонтом"
          />
        </v-flex>

        <v-flex xs12>
          <v-textarea
            v-model="realty.text"
            label="Текст"
            filled
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mask } from 'vue-the-mask';

const states = [
  { Value: 'good',    Text: 'Хорошее' },
  { Value: 'middle',  Text: 'Средне'  },
  { Value: 'bad',     Text: 'Плохое'  },
];

export default {
  name: 'AddressForm',

  directives: {
    mask,
  },

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
  },

  data: () => ({
    cadastralNumber: '##:##:#######:#####',
    states,
  }),
};
</script>
