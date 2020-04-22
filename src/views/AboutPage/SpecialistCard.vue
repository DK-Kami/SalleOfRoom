<template>
  <v-card>
    <v-img :src="specialist.image" />
    <v-card-title>
      {{ specialist.name }}
    </v-card-title>
    <v-card-text>
      {{ specialist.position }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SpecialistCard',

  props: {
    specialist: Object,
  },
};
</script>