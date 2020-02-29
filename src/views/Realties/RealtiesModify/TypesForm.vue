<template>
  <v-card class="px-4">
    <v-card-title>Типа типы</v-card-title>

    <v-card-text>
      <v-layout column class="px-3">
        <v-select
          v-model="realty.realtorId"
          :items="realtor"
          item-text="Name"
          item-value="Id"
          label="Риелтор"
        />

        <v-layout class="px-3">
          <v-select
            v-model="realty.counterpartyId"
            :items="counterparty"
            label="Контрагент"
            item-text="Name"
            item-value="Id"
          />

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

        <v-select
          v-model="realty.transactionTypeId"
          :items="transaction"
          label="Тип транзакции"
          item-text="Name"
          item-value="Id"
        />

        <v-select
          v-model="realty.categoryId"
          :items="category"
          label="Категория"
          item-text="Name"
          item-value="Id"
        />
      </v-layout>

      <v-select
        v-model="realty.wallMaterialId"
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
import DialogBase from '@/components/base/DialogBase';

export default {
  name: 'TypesForm',

  components: {
    CounterpartiesModify,
    DialogBase,
  },

  created() {
    this.loadCounterparty();
    this.loadWallMaterial();
    this.loadTransaction();
    this.loadCategory();
    this.loadRealtor();
  },

  data: () => ({
    counterpartyDialog: false,
  }),

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },

    counterparty() {
      return this.$store.getters['counterparties/getCounterparties'];
    },
    wallMaterial() {
      return this.$store.getters['types/getWallMaterial'];
    },
    transaction() {
      return this.$store.getters['types/getTransaction'];
    },
    category() {
      return this.$store.getters['types/getCategory'];
    },
    realtor() {
      return this.$store.getters['users/getRealtor'];
    },
  },

  methods: {
    async loadCounterparty() {
      await this.$store.dispatch('counterparties/loadCounterparties', { page: 1 });
    },
    async loadWallMaterial() {
      await this.$store.dispatch('types/loadWallMaterial');
    },
    async loadTransaction() {
      await this.$store.dispatch('types/loadTransaction');
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
    }
  },
};
</script>
