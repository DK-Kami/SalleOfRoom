export default {
  props: {
    value: Boolean,
  },

  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(dialog) {
        this.$emit('input', dialog);
        this.$emit('close-dialog');
      },
    },
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
