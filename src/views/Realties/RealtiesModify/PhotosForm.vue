<template>
  <v-card>
    <v-card-title>Загрузка фотографий</v-card-title>

    <v-card-text>
      <v-layout>
        <v-flex xs6>
          <photo-upload @upload="uploadFile" />
        </v-flex>

        <v-flex xs6>
          <v-responsive v-if="!realty.previewPictures.length" :aspect-ratio="9/10">
            <v-layout
              justify-center
              align-center
              fill-height
              class="title"
            >
              Загрузите изображения
            </v-layout>
          </v-responsive>

          <v-carousel v-else>
            <v-carousel-item
              v-for="(picture, index) in realty.previewPictures"
              :key="'picture-' + index"
            >
              <v-img :src="picture" />
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import PhotoUpload from '@/components/helper/PhotoUpload';

export default {
  name: 'PhotosForm',

  components: {
    PhotoUpload,
  },

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
  },

  methods: {
    uploadFile(e) {
      const blob = new Blob([e], {type: e.type});
      const photo = window.URL.createObjectURL(blob);
      this.realty.previewPictures.push(photo);
      this.realty.pictures.push(e);
    },
  },
};
</script>
