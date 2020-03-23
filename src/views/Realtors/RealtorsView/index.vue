<template>
  <v-layout justify-center align-center wrap>
    <span class="headline font-weight-medium mb-4">{{ realtor.name }}</span>
    <v-flex xs12>
      <realties-table
        v-if="realtor.estates && realtor.estates.length"
        :realties="realtor.estates"
        hide-default-footer
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
  name: 'RealtorView',

  components: {
    RealtiesTable,
  },

  created() {
    this.$store.dispatch('users/clearUser');
    this.loadRealtor();
  },

  data: () => ({
    loading: false,
  }),

  computed: {
    realtor() {
      return this.$store.getters['users/getUser'];
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    async loadRealtor() {
      await this.$store.dispatch('users/loadRealtor', this.id);
    },
  },
};
</script>
