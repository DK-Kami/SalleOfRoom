<template>
  <v-content>
    <the-toolbar />

    <v-container class="pa-0 main__container" fluid>
      <v-layout fill-height justify-center wrap>
        <v-flex v-if="header" xs12 class="image__header">
          <v-img
            :src="header"
            height="100%"
          ></v-img>
        </v-flex>

        <v-flex key="content" :class="$vuetify.breakpoint.xs ? 'mt-0' : 'mt-6'" xs12 ms11 lg10 xl8>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center :class="{ 'header__content' : header }">
              <span v-if="header" class="main_title white--text mb-12">{{ title }}</span>

              <router-view />
            </v-layout>
          </v-slide-y-transition>
        </v-flex>
      </v-layout>
    </v-container>

    <the-footer />
  </v-content>
</template>

<script>
import TheToolbar from './TheToolbar';
import TheFooter from './TheFooter';

export default {
  name: 'NonPrivatelayout',

  components: {
    TheToolbar,
    TheFooter,
  },

  computed: {
    header() {
      return this.$route.meta && this.$route.meta.header;
    },
    title() {
      return this.$route.meta && this.$route.meta.title;
    },
  },
};
</script>

<style lang="scss">
  .main__container {
    margin-bottom: 325px;
  }
  .image__header {
    background-color: rgba(0, 0, 0);
    .v-image__image {
      filter: opacity(30%);
    }
  }
  .header__content {
    margin-top: -580px;
  }
</style>
