<template>
  <v-card>
    <v-carousel v-if="realty.Picture.length" style="height: 280px">
      <v-carousel-item
        v-for="(photo, index) in realty.Picture"
        :key="'picture-' + index"
      >
        <v-img :src="photoLink(photo)" :aspect-ratio="15/10" />
      </v-carousel-item>
    </v-carousel>

    <v-card-title class="ma-4">
      <v-layout justify-space-between>
        <span>Контрагент:</span>
        <span>{{ realty.Counterparty.Name }}</span>
      </v-layout>
    </v-card-title>

    <v-card-text class="subtitle-1">
      <v-layout column class="mx-2 py-4">
        <v-layout
          v-for="itemList in realtyData"
          :key="itemList.value"
          justify-space-between
          class="mx-0"
        >
          <span>{{ itemList.title }}</span>
          <span>{{ realty[itemList.value] }}</span>
        </v-layout>

        <v-layout column class="mx-0 pt-4">
          <span>Адрес:</span>
          <span>
            {{ address }}
          </span>
        </v-layout>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        @click="viewRealty"
      >Просмотреть</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const realtyData = [
  { title: 'Этаж',              value: 'Floor'        },
  { title: 'Номер квартиры',    value: 'FlatNumber'  },
  { title: 'Количество комнат', value: 'RoomCount'    },
  { title: 'Площадь',           value: 'Area'         },
  { title: 'Жилая площадь',     value: 'LivingArea'   },
  { title: 'Площадь кухни',     value: 'KitchenArea'  },
];

export default {
  name: 'RealtyCard',

  props: {
    realty: Object,
  },

  created() {
    this.loadReadyStates();
  },

  data: () => ({
    realtyData,
  }),

  computed: {
    readyStates() {
      return this.$store.getters['realties/getReadyStates'];
    },
    address() {
      return [
        this.realty.City,
        this.realty.CityDistrict,
        this.realty.District,
        this.realty.Region,
        this.realty.Street,
        this.realty.HouseNumber
      ].join(', ')
    },
  },

  methods: {
    async loadReadyStates() {
      await this.$store.dispatch('realties/loadReadyState');
    },

    // russReadyState(readyState) {
    //   if (!readyState) return '';
    //   const state = this.readyStates.find(s => s.Value === readyState);
    //   return state ? state.Text : '';
    // },

    photoLink(photo) {
      return 'https://localhost:44388/api/service/image?id=' + photo;
    },
    viewRealty() {
      this.$router.push({
        params: { id:  this.realty.Id },
        name: 'realties.view',
      });
    },
  },
};
</script>
