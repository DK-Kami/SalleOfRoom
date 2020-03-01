<template>
  <v-card>
    <v-card-title class="headline font-weight-regular">Контакты</v-card-title>
    <v-divider />

    <v-card-text class="black--text">
      <v-layout
        v-if="realtor && counterparty"
        class="px-3"
        column
      >
        <span class="title mt-4">Риелтор</span>
        <span class="subtitle-1">{{ realtor.Name }}</span>
        <span class="subtitle-2">
          <a :href="'tel:' + realtor.Phone">{{ realtor.Phone }}</a>
        </span>

        <span class="title mt-5">Контрагент</span>
        <span class="subtitle-1">{{ counterparty.Name }}</span>
        <span class="subtitle-2">
          <a :href="'tel:' + counterparty.Phone">{{ counterparty.Phone }}</a>
        </span>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ContactCard',

  props: {
    counterparty: Object,
    realtor: Object,
  },
};
</script>
