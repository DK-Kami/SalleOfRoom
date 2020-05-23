<template>
  <v-card class="elevation-3">
    <v-carousel
      class="elevation-0 mb-1"
      interval="9999"
      height="100%"
    >
      <v-carousel-item
        v-for="(image, index) in realty.images"
        :key="index"
      >
        <v-img
          :src="image"
          aspect-ratio="1.3"
        >
          <v-tooltip top>
            <template #activator="{ on }">
              <v-btn
                class="ma-2"
                v-on="on"
                color="#cacacaaa"
                small
                dark
                fab
              >
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
            </template>
            Добавить в избраное
          </v-tooltip>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <v-card-title class="mt-0 pt-1">
      {{ realty.title }}
    </v-card-title>

    <v-card-subtitle class="black--text">
      <v-layout class="body-1 mx-1 subtitle__items">
        <span>{{ realty.rooms }} комнаты </span>
        <span>{{ realty.area }} м <sup>2</sup> </span>
        <span>этаж {{ realty.floor }} </span>
      </v-layout>
    </v-card-subtitle>

    <v-card-text class="mx-1">
      {{ realty.address }}
    </v-card-text>
    <v-divider />

    <v-card-actions class="mx-1">
      <span>{{ realty.date }}</span>
      <v-spacer />
      <span class="body-1 font-weight-medium">{{ realty.price }} ₽</span>
    </v-card-actions>
  </v-card>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

export default {
  name: 'SaleItem',

  components: {
    TooltipButton,
  },

  props: {
    realty: Object,
  },
};
</script>

<style lang="scss">
  .subtitle__items
    span:not(:last-child)::after {
      content: "";
      background-color: #FFB800;
      display: inline-block;
      border-radius: 5px;
      margin: 0 10px 2px 10px;
      height: 8px;
      width: 8px;
    }
</style>
