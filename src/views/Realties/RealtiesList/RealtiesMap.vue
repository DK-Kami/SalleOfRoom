<template>
  <v-responsive :aspect-ratio="7/3.5" class="mt-7">
    <yandex-map
      :controls="['zoomControl', 'searchControl']"
      :coords="coords"
      style="width: 100%; max-width: 100%; height: 100%;"
      zoom="10"
      @map-was-initialized="mapInit"
    />
  </v-responsive>
</template>

<script>
import {
  yandexMap,
  ymapMarker,
} from 'vue-yandex-maps';

export default {
  name: 'RealtiesMap',

  components: {
    ymapMarker,
    yandexMap,
  },

  data: () => ({
    coords: [55.751435, 37.620260],
    mapLoaded: false,
    yMap: null,
    map: null,

    objectManager: null,
  }),

  computed: {
    realties() {
      return this.$store.getters['realties/getRealties'];
    },

    realtiesObjects() {
      const realties = this.realties.map(realty => ({
        type: "Feature",
        id: realty.Id,
        options: {
          preset: 'islands#nightCircleIcon'
        },
        geometry: {
          type: "Point",
          coordinates: realty.Coord.split(','),
        },
        properties: {},
      }));

      return {
        type: "FeatureCollection",
        features: realties,
      };
    }
  },

  methods: {
    reloadMap() {
      if (this.mapLoaded && this.withSortBar) {
        this.map.container.fitToViewport();
      }
    },

    mapInit(map) {
      this.mapLoaded = true;
      this.yMap = ymaps;
      this.map = map;

      this.map.options.set('suppressMapOpenBlock', true);

      this.objectManager = new ymaps.ObjectManager({
        clusterIconLayout: "default#pieChart",
        hideIconOnBalloonOpen: false,
        geoObjectHasBalloon: false,
        clusterize: true,
      });

      
      console.log(this.realtiesObjects);
      this.objectManager.add(this.realtiesObjects);
      this.map.geoObjects.add(this.objectManager);
      this.map.events.add('boundschange', this.onMapUpdate);

      // this.reZoomButton = new ymaps.control.Button({
      //   data: {
      //     image: window.location.origin + '/img/centered-map.png',
      //     title: 'Автомасштабирование карты',
      //     imageSize: [],
      //   },
      //   options: {
      //     selectOnClick: false,
      //   }
      // });
      // this.reZoomButton.events.add('click', () => {
      //   this.reloadMarkers(true);
      // });

      // map.controls.add(this.reZoomButton, {float: 'left'});
    },
  },
};
</script>
