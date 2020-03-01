<template>
  <v-layout justify-center align-center wrap>
    <span class="title">{{ realtor.name }}</span>
    <v-flex xs12>
      {{realtor.estates}}
    </v-flex>
  </v-layout>
</template>

<script>
import FormBase from '@/components/base/FormBase';

export default {
  name: 'RealtorView',

  components: {
    FormBase,
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
