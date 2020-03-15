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

const realtyData = [
  { title: 'Этаж',              value: 'Floor'        },
  { title: 'Номер квартиры',    value: 'HouseNumber'  },
  { title: 'Комнат',            value: 'RoomCount'    },
  { title: 'Площадь',           value: 'Area'         },
  { title: 'Жилая площадь',     value: 'LivingArea'   },
  { title: 'Площадь кухни',     value: 'KitchenArea'  },
  { title: 'Город',             value: 'City'         },
  { title: 'Округ',             value: 'CityDistrict' },
  { title: 'Район',             value: 'District'     },
  { title: 'Регион',            value: 'Region'       },
  { title: 'Улица',             value: 'Street'       },
  { title: 'Номер дома',        value: 'HouseNumber'  },
];

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
      return this.$store.getters['realties/getRealties'](false);
    },
    realtiesObjects() {
      if (!ymaps) return;

      const realties = this.realties.map(realty => {
        const aboutRealty = realtyData.map(rd => {
          return `
            <div class="flex xs5">
              <span class="subtitle-1 font-weight-medium">${rd.title}:</span>
              <span class="subtitle-2 font-weight-regular">${realty[rd.value]}</span>
            </div>
          `;
        }).join('');

        return {
          type: "Feature",
          id: realty.Id,
          options: {
            preset: 'islands#nightCircleIcon',
          },
          geometry: {
            type: "Point",
            coordinates: realty.Coord.split(','),
          },
          properties: {
            hideIconOnBalloonOpen: false,
            balloonContentBody: `
              <div class="layout wrap py-2">
                <div class="flex xs12">
                  <span class="subtitle-1 font-weight-medium">Риелтор:</span>
                  <span class="subtitle-2 font-weight-regular">${realty.Realtor.Name}</span>
                </div>
                
                <div>
                  <span class="subtitle-1 font-weight-medium">Контрагент:</span>
                  <span class="subtitle-2 font-weight-regular">${realty.Counterparty.Name}</span>
                </div>

                <div class="flex xs12">
                  <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
                </div>

                <div class="layout justify-space-between wrap">${aboutRealty}</div>
              </div>
            `,
          },
        };
      });

      return {
        type: "FeatureCollection",
        features: realties,
      };
    },
  },

  methods: {
    mapInit(map) {
      if (!this.mapLoaded) {
        this.mapLoaded = true;
        this.ymaps = ymaps;
        this.map = map;
      }

      if (!this.realties.length) return;

      this.objectManager = new ymaps.ObjectManager({
        clusterIconLayout: "default#pieChart",
        hideIconOnBalloonOpen: false,
        geoObjectHasBalloon: true,
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

  watch: {
    realties(newVal) {
      if (this.mapLoaded) this.mapInit();
    },
  },
};
</script>
