<template>
  <v-layout column>
    <v-divider />
    <sort-bar :view.sync="view" :is-favorite="isFavorite" />

    <v-layout v-if="view === 'map'">
      <v-flex xs5></v-flex>
      <v-flex xs6></v-flex>
    </v-layout>

    <v-layout v-if="view === 'list'" class="px-6 py-4" column>
      <div class="headline font-weight-bold my-2">Продажа квартир в Домодедово</div>
      <v-layout align-center wrap>
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
        <v-spacer />
        <span>{{ realties.length }} предложений</span>

        <v-flex xs12>
          <v-divider />
        </v-flex>

        <v-flex xs12 mt-8>
          <v-container grid-list-xl>
            <v-layout wrap justify-center>
              <v-flex
                v-for="(realty, index) in realties"
                :key="index"
                xs3
              >
                <sale-item :realty="realty" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
import SaleItem from './SaleItem';
import SortBar from './SortBar';

const sortTypes = [
  { text: 'Дате', value: 'date'   },
  { text: 'Цене', value: 'price'  },
];

export default {
  name: 'SalleAll',

  components: {
    SaleItem,
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

    realties() {
      return [
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
        { title: 'Продаётся квартира', rooms: '3', area: '96', floor: '8/14', address: 'г. Москва, ул. Новороссийская д. 30, корп. 1', price: '7 600 000', date: '16 марта', images: ['/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png', '/test-realty.png'] },
      ];
    }
  }),
};
</script>