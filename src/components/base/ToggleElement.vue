<template>
  <v-expansion-panels v-model="toggle">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <slot name="title">
          <div class="title">{{ title }}</div>
        </slot>
        <template #actions>
          <v-layout align-center>
            <!-- {{ value ? 'Скрыть' : 'Подробнее' }} -->
            <v-icon color="accent">$expand</v-icon>
          </v-layout>
        </template>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <slot />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'ToggleElement',

  props: {
    value: [Boolean, Number],
    title: String,
  },

  computed: {
    toggle: {
      get() {
        return this.value ? 0 : undefined;
      },
      set(toggle) {
        this.$emit('input', this.value === 0);
      },
    },
  },
};
</script>
