export default {
  data: () => ({
    footerTableProps:{
      'items-per-page-options': [15],
    },
  }),
  computed: {
    rulesList() {
      return this.$store.getters['getRules'];
    },
  },
};
