<template>
  <v-responsive :aspect-ratio="aspectRatio" class="mt-7">
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
</template>

<script>
import {
  yandexMap,
  ymapMarker,
} from 'vue-yandex-maps';

export default {
  name: 'RealtyMap',
  
  components: {
    ymapMarker,
    yandexMap,
  },

  props: {
    aspectRatio: {
      type: [String, Number],
      default: 9.6/10,
    },
    coords: String,
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
    currentCoords() {
      if (!this.coords) return;
      const coords = this.coords.toString().split(',');

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
