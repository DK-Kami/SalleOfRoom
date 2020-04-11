<template>
  <v-content>
    <the-toolbar />

    <v-container class="pa-0" :class="$vuetify.breakpoint.xs ? 'mt-0' : 'mt-6'">
      <v-layout fill-height justify-center>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
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
};
</script>