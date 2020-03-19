export default {
  data: () => ({
    footerTableProps:{
      'items-per-page-options': [25],
    },
  }),
  computed: {
    rulesList() {
      return this.$store.getters['getRules'];
    },
  },
};
