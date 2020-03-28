<template>
  <v-card>
    <v-card-title>Загрузка фотографий</v-card-title>

    <v-card-text>
      <v-layout column>
        <v-flex class="my-4">
          <photo-upload @upload="uploadFile" multiple />
        </v-flex>

        <v-divider class="my-5" />
        <v-flex>
          <v-responsive v-if="!realty.previewImages.length" :aspect-ratio="9/10">
            <v-layout justify-center align-center fill-height class="title">Загрузите изображения</v-layout>
          </v-responsive>

          <v-carousel v-else>
            <v-carousel-item
              v-for="(picture, index) in realty.previewImages"
              :key="'picture-' + index"
            >
              <v-layout wrap justify-end class="ma-5">
                <v-btn
                  class="mt-3 mr-3"
                  color="error"
                  outlined
                  @click="deletePhoto(index)"
                >Удалить</v-btn>

                <v-flex xs12>
                    <v-img :src="picture" :aspect-ratio="9/10" />
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import TooltipButton from "@/components/helper/TooltipButton";
import PhotoUpload from "@/components/helper/PhotoUpload";

export default {
  name: "PhotosForm",

  components: {
    TooltipButton,
    PhotoUpload
  },

  computed: {
    realty() {
      return this.$store.getters["realties/getRealty"];
    }
  },

  methods: {
    uploadFile(e) {
      const blob = new Blob([e], { type: e.type });
      const photo = window.URL.createObjectURL(blob);

      this.realty.imagesId.push(e.upload.uuid);
      this.realty.previewImages.push(photo);
      this.realty.uploadImages.push(e);
    },
    deletePhoto(index) {
      this.realty.imagesId.splice(index, 1);
      this.realty.previewImages.splice(index, 1);
      this.realty.uploadImages.splice(index, 1);
      index
    },
  },
};
</script>
