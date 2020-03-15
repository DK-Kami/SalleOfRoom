<template>
  <v-layout fill-height justify-center align-center column>
    <vue-dropzone
      :options="dropzoneOptions"
      ref="myVueDropzone"
      id="dropzone"
      duplicate-check
      @vdropzone-queue-complete="queueComplete"
      @vdropzone-file-added="fileAdded"
      @vdropzone-complete="uploadFile"
    />
  </v-layout>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: 'PhotoUpload',

  components: {
    vueDropzone: vue2Dropzone,
  },

  data: vm => ({
    dropzoneOptions: {
      paramName: "image",
      acceptedFiles: "image/*",
      url: 'https://httpbin.org/post',

      addRemoveLinks: true,
      withCredentials: true,
      thumbnailWidth: null,
      thumbnailHeight: null,
      createImageThumbnails: false,

      dictRemoveFile: "Удалить",
      dictCancelUpload: "Отменить загрузку",
      dictInvalidFileType: "Нужно загрузить изображение",

      dictDefaultMessage:
        `
          <i aria-hidden="true" class="v-icon notranslate mdi mdi-cloud-download-outline theme--light" style="font-size: 70px;"></i>
          <br>
          <div class="title font-weight-regular">Кликните или просто перетащите в это поле фотографию</div>
        `,
      dictResponseError:
        "Возникла проблема на сервере. Свяжитесь с нами или попробуйте позже",
      dictMaxFilesExceeded:
        "Можно загрузить только один файл. Удалите лишний",
      dictFileTooBig:
        "Размер файла должен быть меньше 2 мегабайт"
    },
  }),

  methods: {
    clearPhoto() {
      this.$refs.inputFile.value = '';
    },

    change(e) {
      const file = e.target.files[0];
      console.log(file);

      const total = file.size / 1024 / 1024;
      if (total >= 2) {
        this.$store.dispatch('notification/set', {
          message: 'Файл должен быть меньше, либо равен 2 МБ',
          type: 'error',
        });
        this.$nextTick(this.clearPhoto);
        return;
      }

      const type = file.type.split('/')[0];
      if (type !== 'image') {
        this.$store.dispatch('notification/set', {
          message: 'Неверное расширение файла. Нужно загрузить изображение в формате jpg, png или gif',
          type: 'error',
        });
        this.$nextTick(this.clearPhoto);
        return;
      }

      this.$emit('upload', file);
    },

    fileAdded(e) {
      console.log(e);
    },
    uploadFile(e) {
      console.log(e);
      const total = e.upload.total / 1024 / 1024;
      if (total >= 2) {
        this.$store.dispatch('notification/set', {
          message: 'Файл должен быть меньше, либо равен 2 МБ',
          type: 'error',
        });
        this.$nextTick(this.clearPhoto);
        return;
      }

      const type = e.type.split('/')[0];
      if (type !== 'image') {
        this.$store.dispatch('notification/set', {
          message: 'Неверное расширение файла. Нужно загрузить изображение в формате jpg, png или gif',
          type: 'error',
        });
        this.$nextTick(this.clearPhoto);
        return;
      }

      this.$emit('upload', e);
    },

    queueComplete() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
  },
};
</script>

<style>
.video-placeholder {
  background-color: #f1f1f1;
  border: 2px dashed #00695c;
}

#dropzone {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #00695c;
  overflow-x: auto;
}
.dz-preview,
.dz-processing,
.dz-image-preview,
.dz-success,
.dz-complete {
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
