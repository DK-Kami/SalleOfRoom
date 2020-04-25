<template>
  <v-content>
    <the-toolbar />

    <v-container class="pa-0 main__container" fluid>
      <v-layout fill-height justify-center wrap>
        <v-flex v-if="header" xs12 class="image__header">
          <v-img
            :src="header"
            height="100%"
          >
            <v-layout justify-center>
              <v-flex xs12 ms11 lg10 xl8>
                <div class="text-center font-weight-medium main_title white--text mb-12">{{ title }}</div>
              </v-flex>
            </v-layout>
          </v-img>
        </v-flex>

        <v-flex key="content" :class="currentClasses">
          <v-slide-y-transition mode="out-in">
            <v-layout align-center :class="{ 'header__content' : header }" wrap>
              <v-flex xs12>
                <router-view />
              </v-flex>
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

    currentClasses() {
      const classes = [];
      classes.push(this.$vuetify.breakpoint.xs ? 'mt-0' : 'mt-6');
      classes.push(
        this.$route.name && this.$route.name.match(/sale|rent/)
        ? 'xs12'
        : 'xs12 ms11 lg10 xl8'
      );
      return classes;
    }
  },
};
</script>

<style lang="scss">
  .main__container {
    margin-bottom: 325px;
  }
  .main_title {
    margin-top: 150px;
  }
  .header__content {
    margin-top: -460px;
  }
</style>
