<template>
  <v-layout justify-center align-center wrap>
    <span class="headline font-weight-medium mb-4">{{ counterparty.name }}</span>
    <v-flex xs12>
      <realties-table
        v-if="counterparty.estates && counterparty.estates.length"
        :realties="counterparty.estates"
      />

      <div
        v-else
        class="title text-center font-weight-regular grey--text"
      >Нет данных</div>
    </v-flex>
  </v-layout>
</template>

<script>
// import RealtiesCard from '@/views/Realties/RealtiesList/RealtiesCard'
import RealtiesTable from '@/views/Realties/RealtiesList/RealtiesTable';

export default {
  name: 'CounterpartyView',

  components: {
    RealtiesTable,
  },

  created() {
    this.$store.dispatch('counterparties/clearCounterparty');
    this.loadCounterparty();
  },

  data: () => ({
    loading: false,
  }),

  computed: {
    counterparty() {
      return this.$store.getters['counterparties/getCounterparty'];
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    async loadCounterparty() {
      await this.$store.dispatch('counterparties/loadCounterparty', this.id);
    },
  },
};
</script>
