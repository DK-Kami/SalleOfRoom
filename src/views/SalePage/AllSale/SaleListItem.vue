<template>
  <v-layout>
    <v-flex xs4>
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
            aspect-ratio="1.1"
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
    </v-flex>

    <v-flex xs8>
      <v-layout class="d-flex" fill-height column px-6>
        <v-layout justify-space-between class="subheadline-1 font-weight-medium">
          <span>{{ realty.title }}</span>
          <span>{{ realty.price }} ₽</span>
        </v-layout>

        <v-layout class="body-1 mx-1 subtitle__items title">
          <span>{{ realty.rooms }} комнаты </span>
          <span>{{ realty.area }} м <sup>2</sup> </span>
          <span>этаж {{ realty.floor }} </span>
        </v-layout>

        <v-layout class="grey--text">{{ realty.description }}</v-layout>

        <v-layout justify-space-between class="mt-auto">
          <span>{{ realty.address }}</span>
          <span class="body-2 grey--text">{{ realty.date }}</span>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SaleListItem',

  props: {
    realty: Object,
  }
};
</script>
