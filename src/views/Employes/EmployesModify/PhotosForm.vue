<template>
  <v-card>
    <v-card-title>Загрузка фото</v-card-title>

    <v-card-text>
      <v-layout column>
        <v-flex class="my-4">
          <photo-upload @upload="uploadFile" :multiple="false" />
        </v-flex>

        <v-divider class="my-5" />
        <v-flex v-if="employee.previewImage">
          <v-responsive v-if="!employee.previewImage" :aspect-ratio="9/10">
            <v-layout justify-center align-center fill-height class="title">Загрузите фото</v-layout>
          </v-responsive>

          <v-layout wrap justify-end class="ma-5">
            <v-btn
              class="mt-3 mr-3"
              color="error"
              outlined
              @click="deletePhoto"
            >Удалить</v-btn>

            <v-flex xs12>
              <v-img :src="employee.previewImage" :aspect-ratio="9/10" />
            </v-flex>
          </v-layout>
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
    employee() {
      return this.$store.getters["employes/getEmployee"];
    }
  },

  methods: {
    uploadFile(e) {
      const blob = new Blob([e], { type: e.type });
      const photo = window.URL.createObjectURL(blob);

      this.employee.imagesId = e.upload.uuid;
      this.employee.previewImage = photo;
      this.employee.uploadImage = e;
    },
    deletePhoto() {
      this.employee.previewImage = '';
      this.employee.uploadImage = '';
      this.employee.deletedImage = '';
    },
  },
};
</script>
