<template>
  <v-card class="px-4">
    <v-card-title>Замеры недвижимости</v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex xs6>
          <v-text-field
            v-model="realty.area"
            :rules="[rulesList.required]"
            label="Общая площадь"
            type="number"
            min="0"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.livingArea"
            label="Жилая площадь"
            type="number"
            min="0"
          />
        </v-flex>

        <v-flex xs6 v-if="realty.categoryId !== 2">
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
            :rules="[rulesList.required]"
            label="Количество комнат"
            type="number"
            min="0"
          />
        </v-flex>
        <v-flex xs6>
          <v-select
            v-model="realty.readyState"
            :rules="[rulesList.required]"
            :items="readyStates"
            item-value="Value"
            item-text="Text"
            label="Статус недвижимости"
          />
        </v-flex>

        <v-flex xs6>
          <v-select
            v-model="realty.roomType"
            :items="roomTypes"
            item-value="Value"
            label="Тип комнат"
            item-text="Text"
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
            v-model="realty.сadastralNumber"
            label="Кадастравый номер"
            v-mask="сadastralNumber"
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
import { mapGetters } from 'vuex';

export default {
  name: 'MeasuringForm',

  directives: {
    mask,
  },

  created() {
    this.loadReadyStates();
    this.loadEstateStates();
    this.loadRoomTypes();
  },

  data: () => ({
    сadastralNumber: '##:##:#######:#####',
  }),

  computed: {
    ...mapGetters({
      readyStates: 'realties/getReadyStates',
      estateStates: 'types/getEstateStates',
      roomTypes: 'types/getRoomTypes',
      realty: 'realties/getRealty',
    }),
  },

  methods: {
    loadReadyStates() {
      this.$store.dispatch('realties/loadReadyState');
    },
    loadEstateStates() {
      this.$store.dispatch('types/loadEstateStates');
    },
    loadRoomTypes() {
      this.$store.dispatch('types/loadRoomTypes');
    },
  },
};
</script>
