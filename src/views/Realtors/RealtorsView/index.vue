<template>
  <v-layout justify-center align-center wrap>
    <span class="title mb-4">{{ realtor.name }}</span>
    <v-flex xs12>
      <realties-card :realties="realtor.estates" />
    </v-flex>
  </v-layout>
</template>

<script>
import RealtiesCard from '@/views/Realties/RealtiesList/RealtiesCard'

export default {
  name: 'RealtorView',

  components: {
    RealtiesCard,
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
