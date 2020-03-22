<template>
  <v-card>
    <v-carousel v-if="realty.Picture && realty.Picture.length" style="height: 280px">
      <v-carousel-item
        v-for="(photo, index) in realty.Picture"
        :key="'picture-' + index"
      >
        <v-img :src="photoLink(photo)" :aspect-ratio="15/10" />
      </v-carousel-item>
    </v-carousel>

    <v-card-title
      v-if="realty.Counterparty"
      class="ma-4"
    >
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

    <v-card-actions v-if="withActions">
      <v-spacer />
      <tooltip-button
        tooltip="Посмотреть недвижимость"
        icon="mdi-eye"
        color="primary"
        @action="openRealtyView(realty.Id)"
      />
      <tooltip-button
        tooltip="Редактирование недвижимости"
        icon="mdi-pencil"
        color="primary"
        @action="editRealty(realty.Id)"
      />
      <tooltip-button
        tooltip="Удаление недвижимости"
        icon="mdi-delete"
        color="error"
        @action="deleteRealty(realty.Id)"
      />
    </v-card-actions>
    
    <v-card-actions v-else>
      <v-spacer />
      <v-btn
        color="primary"
        @click="viewRealty"
      >Просмотреть</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

const realtyData = [
  { title: 'Этаж',              value: 'Floor'        },
  { title: 'Номер квартиры',    value: 'FlatNumber'   },
  { title: 'Количество комнат', value: 'RoomCount'    },
  { title: 'Площадь',           value: 'Area'         },
  { title: 'Жилая площадь',     value: 'LivingArea'   },
  { title: 'Площадь кухни',     value: 'KitchenArea'  },
  { title: 'руб./м2',           value: 'PriceArea'    },
];

export default {
  name: 'RealtyCard',

  components: {
    TooltipButton,
  },

  props: {
    withActions: Boolean,
    realty: Object,
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
    async deleteRealty(id) {
      await this.$store.dispatch('realties/deleteRealty', id);
      await this.loadRealties();
    },

    editRealty(id) {
      this.$router.push({ name: 'realties.edit', params: { id }});
    },
    openRealtyView(id) {
      this.$router.push({ name: 'realties.view', params: { id }});
    },

    // russReadyState(readyState) {
    //   if (!readyState) return '';
    //   const state = this.readyStates.find(s => s.Value === readyState);
    //   return state ? state.Text : '';
    // },

    photoLink(photo) {
      return 'https://mayak-reality.com/v1/api/service/image?id=' + photo;
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
