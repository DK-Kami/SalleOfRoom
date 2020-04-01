<template>
  <v-layout class="px-4 pt-6" align-center wrap justify-space-between>
    <v-flex xs12 lg6 class="mb-3">
      <v-layout align-center>
        <v-flex shrink class="display-1 mr-6">
          <slot name="title">{{ title }}</slot>
        </v-flex>

        <v-flex shrink v-if="withActions">
          <slot name="actions">
            <v-btn
              color="primary"
              fab
              @click="action"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </slot>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 lg5>
      <v-layout align-center wrap justify-space-between>
        <v-flex shrink>
          <slot name="beforeSearch" />
        </v-flex>

        <v-flex xs12 lg8 v-if="withSearch">
          <v-text-field
            v-model="searchComp"
            append-icon="mdi-magnify"
            label="Поиск"
            class="pt-0"
            hide-details
            single-line
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TopBar',

  props: {
    withActions: {
      type: Boolean,
      default: true,
    },
    withSearch: {
      type: Boolean,
      default: true,
    },
    search: String,
    title: String,
  },

  computed: {
    searchComp: {
      get() {
        return this.search;
      },
      set(search) {
        this.$emit('input', search);
      },
    },
  },

  methods: {
    action() {
      return this.$emit('action');
    },
  },
};
</script>
