<template>
  <v-container grid-list-xl>
    <v-layout justify-center>
      <v-flex xs10>
        <form-base
          title="Добавление недвижимости"
          ref="form"
          with-back-button
          @submit="handleSubmit"
        >
          <template #afterTitle>
            <v-layout justify-space-around>
              <v-flex xs4>
                <v-select
                  v-model="realty.type"
                  :items="types"
                  label="Тип объявления"
                  item-value="Value"
                  item-text="Text"
                />
              </v-flex>

              <v-flex xs4>
                <v-text-field
                  v-model="realty.commission"
                  label="Комииссия"
                  type="number"
                  min="0"
                />
              </v-flex>

              <v-flex xs4>
                <v-text-field
                  v-model="realty.price"
                  style="max-width: 250px"
                  class="pr-3"
                  type="number"
                  label="Цена"
                  min="0"
                />
              </v-flex>
            </v-layout>
          </template>

          <v-layout
            class="py-7"
            justify-space-around
            wrap
          >
            <v-flex xs6>
              <types-form />
            </v-flex>

            <v-flex xs6>
              <measuring-form />
            </v-flex>

            <v-flex xs6>
              <address-form />
            </v-flex>

            <v-flex xs6>
              <huita-form />
            </v-flex>

            <v-flex xs6>
              <map-form />
            </v-flex>

            <v-flex xs6>
              <photos-form />
            </v-flex>
          </v-layout>

          <template #actions>
            <v-btn
              :loading="loading"
              color="primary"
              type="submit"
              block
            >{{ id ? 'Изменить' : 'Создать' }}</v-btn>
          </template>
        </form-base>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormBase from '@/components/base/FormBase';
import MeasuringForm from './MeasuringForm';
import AddressForm from './AddressForm';
import PhotosForm from './PhotosForm';
import TypesForm from './TypesForm';
import HuitaForm from './HuitaForm';
import MapForm from './MapForm';

import { mask } from 'vue-the-mask';

const types = [
  { Value: 'Sale', Text: 'Продажа'  },
  { Value: 'Rent', Text: 'Аренда'   },
];

export default {
  name: 'RealtiesModify',

  components: {
    MeasuringForm,
    AddressForm,
    PhotosForm,
    TypesForm,
    HuitaForm,
    FormBase,
    MapForm,
  },

  directives: {
    mask,
  },

  created() {
    if (this.id) {
      this.loadRealty();
    }
  },

  data: () => ({
    phoneMask: '+7 (###) ###-##-##',
    loading: false,
    types
  }),

  computed: {
    realty() {
      return this.$store.getters['realties/getRealty'];
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    async loadRealty() {
      await this.$store.dispatch('realties/loadRealty', this.id);
    },

    async handleSubmit() {
      let response;
      this.loading = true;

      if (this.id) {
        response = await this.updateRealty(this.id);
      }
      else {
        response = await this.createRealty();
      }
      this.loading = false;
      const { error, data } = response;

      if (error) {
        const error = Object.values(data.ModelState)[0][0];
        this.$refs.form.setError(error);
        this.$store.dispatch('notification/set', {
          message: error,
          type: 'error',
        });
      }
      else {
        setTimeout(() => {
          this.$router.push({ name: 'realties.list' });
          this.$store.dispatch('realties/clearRealty');
        }, 1000)
      }
    },

    async createRealty() {
      const { error, data } = await this.$store.dispatch('realties/createRealty', this.isAdmin);
      return { error, data };
    },
    async updateRealty() {
      const { error, data } = await this.$store.dispatch('realties/updateRealty', this.id);
      return { error, data };
    },
  },
};
</script>
