export default {
  computed: {
    rulesList() {
      return this.$store.getters['getRules'];
    },
  },
};
