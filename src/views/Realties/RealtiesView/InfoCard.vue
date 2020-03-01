<template>
  <v-card class="pa-3">
    <!-- <v-card-title class="headline" :class="`${colorByStatus}--text`">
      {{ realty.russReadyState }}
    </v-card-title> -->

    <v-layout
      justify-space-between
      class="px-3"
      wrap
    >
      <v-flex
        v-for="itemData in realtyData"
        :key="itemData.title"
        xs12 lg5
      >
        <div class="title">{{ itemData.title }}</div>
        <v-divider />

        <v-list>
          <v-list-item
            v-for="itemList in itemData.list"
            :key="itemList.value"
          >
            <v-list-item-title>{{ itemList.title }}</v-list-item-title>
            <v-list-item-action>{{ realty[itemList.value] }}</v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>

      <v-flex xs12 v-if="realty.comment">
        <div class="title">Комментарий</div>
        <v-divider />
        {{ realty.comment }}
      </v-flex>
    </v-layout>

    <v-layout>
      <realty-map :coords="realty.coord" aspect-ratio="2.7" />
    </v-layout>
  </v-card>
</template>

<script>
import RealtyMap from '@/components/helper/RealtyMap';

const realtyData = [
  {
    title: 'Размеры',
    list: [
      { title: 'Этаж',              value: 'floor'        },
      { title: 'Номер квартиры',    value: 'houseNumber'  },
      { title: 'Количество комнат', value: 'roomCount'    },
      { title: 'Площадь',           value: 'area'         },
      { title: 'Жилая площадь',     value: 'livingArea'   },
      { title: 'Площадь кухни',     value: 'kitchenArea'  },
    ],
  },
  {
    title: 'Расположение',
    list: [
      { title: 'Город',           value: 'city'         },
      { title: 'Округ',           value: 'cityDistrict' },
      { title: 'Район',           value: 'district'     },
      { title: 'Регион',          value: 'region'       },
      { title: 'Улица',           value: 'street'       },
      { title: 'Номер дома',      value: 'houseNumber'  },
    ],
  },
];

export default {
  name: 'InfoCard',

  props: {
    realty: Object,
  },

  components: {
    RealtyMap,
  },

  data: () => ({
    realtyData,
  }),

  computed: {
    readyStates() {
      return this.$store.getters['realties/getReadyStates'];
    },

    colorByStatus() {
      const status = this.readyStates.find(s => s.value === this.realty.readyState);
      return status ? status.color : 'black';
    }
  },
};
</script>
