<template>
  <v-card>
    <v-card-title>Место на карте</v-card-title>

    <v-card-text>
      <v-layout column>
        <v-text-field
          v-model="realty.coord"
        />

        <v-responsive :aspect-ratio="9.6/10" class="mt-7">
          <yandex-map
            :coords="currentCoords"
            :controls="['searchControl', 'zoomControl']"
            style="width: 100%; max-width: 100%; height: 100%;"
            zoom="10"
          >
            <ymap-marker
              v-if="currentCoords || refresh"
              :coords="currentCoords"
              marker-type="Placemark"
              :options="{
                preset: 'islands#nightCircleIcon'
              }"
              marker-id="1"
            />
          </yandex-map>
        </v-responsive>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  yandexMap,
  ymapMarker,
} from 'vue-yandex-maps';

export default {
  name: 'MapForm',
  
  components: {
    ymapMarker,
    yandexMap,
  },

  data: () => ({
    icon: {
      layout: "default#image",
      imageSize: [30, 40],
      imageOffset: [0, 0],
    },
    refresh: false,
  }),

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
    currentCoords() {
      if (!this.realty.coord) return;
      const coords = this.realty.coord.toString().split(',');

      if (coords.length !== 2) return;
      if (!coords.every(c => c.toString().trim().length
        && !Number.isNaN(c)
        && Number(c) >= 0)
      ) return;

      return coords.map(c => parseFloat(c));
    },
  },

  methods: {
    refreshMarker() {
      this.refresh = true;
      this.$nextTick(() => {
        this.refresh = false;
      });
    },
  },

  watch: {
    coords() {
      this.refreshMarker();
    },
  },
};
</script>
