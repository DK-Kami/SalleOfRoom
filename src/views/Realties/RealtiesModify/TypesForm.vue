<template>
  <v-card class="px-4">
    <v-card-title>Типа типы</v-card-title>

    <v-card-text>
      <v-layout wrap>
        <v-flex>
          <v-select
            v-model="realty.realtorId"
            :items="realtor"
            item-text="Name"
            item-value="Id"
            label="Риелтор"
          />
        </v-flex>

        <v-flex>
          <v-select
            v-model="realty.transactionTypeId"
            :items="counterparty"
            label="Контрагент"
            item-text="Name"
            item-value="Id"
          />
        </v-flex>

        <v-flex>
          <v-select
            v-model="realty.wallMaterialId"
            :items="transaction"
            label="Тип транзакции"
          />
        </v-flex>

        <v-flex>
          <v-select
            v-model="realty.categoryId"
            :items="category"
            label="Категория"
          />
        </v-flex>
      </v-layout>

      <v-select
        v-model="realty.counterpartyId"
        :items="wallMaterial"
        label="Материал стены"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TypesForm',

  created() {
    this.loadCounterparty();
    this.loadWallMaterial();
    this.loadTransaction();
    this.loadCategory();
    this.loadRealtor();
  },

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
  }
};
</script>
