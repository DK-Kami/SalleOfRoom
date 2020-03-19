<template>
  <v-card class="px-4">
    <v-card-title>Типа типы</v-card-title>

    <v-card-text>
      <v-layout column class="px-3">
        <v-select
          v-if="isAdmin"
          v-model="realty.realtorId"
          :rules="[rulesList.required]"
          :items="realtor"
          item-text="Name"
          item-value="Id"
          label="Риелтор"
        />

        <v-layout class="px-3">
          <v-select
            v-model="realty.counterpartyId"
            :rules="[rulesList.required]"
            :items="counterparty"
            label="Контрагент"
            item-text="Name"
            item-value="Id"
            @input="selectCounterparty"
          >
            <template slot="prepend-item">
              <v-text-field
                v-model="searchCounterparty"
                label="Поиск по телефону"
                class="mx-3"
              />
              <v-divider />
            </template>
          </v-select>

          <dialog-base
            v-model="counterpartyDialog"
            title="Добавление контрагента"
            max-width="850"
          >
            <counterparties-modify dialog-view @add="addCounterparty" />
          </dialog-base>

          <v-btn
            color="primary"
            class="ml-3"
            fab
            @click="openCounterpartyDialog"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-layout>

        <toggle-element
          v-if="counterpartyHaveEstates"
          title="Недвижимости контрагента"
        >
          <v-layout justify-center align-center wrap>
            <v-flex xs12>
              <realties-card :realties="currentCounterparty.estates" small />
            </v-flex>
          </v-layout>
        </toggle-element>

        <!-- <v-select
          v-model="realty.transactionTypeId"
          :items="transaction"
          label="Тип сделки"
          item-text="Name"
          item-value="Id"
        /> -->

        <v-select
          v-model="realty.categoryId"
          :rules="[rulesList.required]"
          :items="category"
          label="Категория"
          item-text="Name"
          item-value="Id"
        />
      </v-layout>

      <v-select
        v-model="realty.wallMaterialId"
        :rules="[rulesList.required]"
        :items="wallMaterial"
        label="Материал стены"
        item-text="Name"
        item-value="Id"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import CounterpartiesModify from '@/views/Counterparties/CounterpartiesModify';
import RealtiesCard from '@/views/Realties/RealtiesList/RealtiesCard'
import ToggleElement from '@/components/base/ToggleElement';
import DialogBase from '@/components/base/DialogBase';

import { mapGetters } from 'vuex';

export default {
  name: 'TypesForm',

  components: {
    CounterpartiesModify,
    ToggleElement,
    RealtiesCard,
    DialogBase,
  },

  created() {
    if (!this.isAdmin) {
      this.realty.realtorId = this.$store.getters['auth/getUserId'];
    }

    this.loadCounterparty();
    this.loadWallMaterial();
    this.loadCategory();
    this.loadRealtor();
  },

  data: () => ({
    counterpartyDialog: false,
    searchCounterparty: '',
  }),

  computed: {
    ...mapGetters({
      currentCounterparty: 'counterparties/getCounterparty',
      wallMaterial: 'types/getWallMaterial',
      category: 'types/getCategory',
      realty: 'realties/getRealty',
      realtor: 'users/getRealtor',
    }),

    isAdmin() {
      return this.$store.getters['auth/getUserRole'] === 'admin';
    },

    counterpartyHaveEstates() {
      return this.currentCounterparty
          && this.currentCounterparty.estates
          && this.currentCounterparty.estates.length;
    },

    counterparty() {
      return this.$store.getters['counterparties/getCounterparties']
        .filter(c => {
          const search = this.searchCounterparty
            .toString()
            .trim()
            .replace('+', '')
            .replace('(', '')
            .replace(')', '');

          return c.Phone.match(new RegExp(search));
        });
    },
  },

  methods: {
    async loadCurrentCounterparty(id) {
      await this.$store.dispatch('counterparties/loadCounterparty', id);
    },

    async loadCounterparty() {
      await this.$store.dispatch('counterparties/loadCounterparties', { page: 1 });
    },
    async loadWallMaterial() {
      await this.$store.dispatch('types/loadWallMaterial');
    },
    async loadCategory() {
      await this.$store.dispatch('types/loadCategory');
    },
    async loadRealtor() {
      await this.$store.dispatch('users/loadUsers', { page: 1 });
    },

    openCounterpartyDialog() {
      this.counterpartyDialog = true;
    },
    closeCounterpartyDialog() {
      this.counterpartyDialog = false;
    },

    addCounterparty(counterpartyId) {
      this.loadCounterparty();
      this.realty.counterpartyId = counterpartyId;
      this.closeCounterpartyDialog();
    },

    selectCounterparty(counterparty) {
      this.loadCurrentCounterparty(counterparty);
    },
  },

  watch: {
    'realty.categoryId'(categoryId) {
      if (categoryId === 2) this.realty.kitchenArea = 0;
    },
  },
};
</script>
