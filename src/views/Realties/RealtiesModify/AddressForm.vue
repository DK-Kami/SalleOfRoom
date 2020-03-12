<template>
  <v-card class="px-4">
    <v-card-title>Адрес недвижимости</v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex xs6>
          <v-text-field
            v-model="realty.city"
            label="Город"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.cityDistrict"
            label="Округ"
          />
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="realty.district"
            label="Район"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="realty.region"
            label="Регион"
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

        <v-flex xs12>
          <v-text-field
            v-model="realty.street"
            label="Улица"
          />
        </v-flex>

        <v-flex xs12>
          <v-textarea
            v-model="realty.comment"
            label="Комментарий"
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

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
  },
};
</script>
