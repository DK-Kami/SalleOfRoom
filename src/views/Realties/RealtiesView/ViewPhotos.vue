<template>
  <v-card color="#cacaca">
    <v-carousel v-if="photos.length">
      <v-carousel-item
        v-for="(photo, index) in photos"
        :key="'picture-' + index"
      >
        <v-img :src="photo" height="100%" contain />
      </v-carousel-item>
    </v-carousel>

    <v-layout v-else>
      <v-responsive aspect-ratio="2.7">
        <v-layout
          class="display-2"
          justify-center
          align-center
          fill-height
        >
          Изображений нет
          <v-icon>mdi-image-off-outline</v-icon>
        </v-layout>
      </v-responsive>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    photos: Array,
  },
};
</script>
