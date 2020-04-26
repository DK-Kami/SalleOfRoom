<template>
  <v-layout column>
    <v-divider />
    <sort-bar :view.sync="view" :is-favorite="isFavorite" />

    <v-layout v-if="view === 'map'">
      <v-flex xs5></v-flex>
      <v-flex xs6></v-flex>
    </v-layout>

    <v-layout v-if="view === 'list'" class="px-6 py-4" column>
      <div class="headline font-weight-bold">Продажа квартир в Домодедово</div>
      <v-layout align-center>
        <span class="subtitle mr-2">Сортировать по:</span>
        <v-select
          v-model="sortBy"
          :items="sortTypes"
          append-icon="mdi-chevron-down"
          style="max-width: 105px"
          hide-details
          single-line
          dense
          flat
          solo
        />
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
import SortBar from './SortBar';

const sortTypes = [
  { text: 'Дате', value: 'date'   },
  { text: 'Цене', value: 'price'  },
];

export default {
  name: 'SalleAll',

  components: {
    SortBar,
  },

  data: () => ({
    sortBy: 'date',
    view: 'list',
    sortTypes,
  }),

  computed: ({
    isFavorite() {
      return this.$route.name === 'favorite';
    },
  }),
};
</script>