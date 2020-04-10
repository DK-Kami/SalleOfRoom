<template>
  <v-app light>
    <notification />

    <v-content v-if="isEmptyLayout">
      <router-view />
    </v-content>

    <admin-layout v-else-if="isAdminLayout" />
    <non-private-layout v-else-if="isNonPrivateLayout" />
  </v-app>
</template>

<script>
import NonPrivateLayout from '@/components/layouts/NonPrivateLayout';
import Notification from '@/components/layouts/Notification';
import AdminLayout from '@/components/layouts/AdminLayout';

export default {
  name: 'App',

  components: {
    NonPrivateLayout,
    Notification,
    AdminLayout,
  },

  computed: {
    layout() {
      return this.$route.meta && this.$route.meta.layout
    },

    isEmptyLayout() {
      return this.layout === 'empty';
    },
    isAdminLayout() {
      return this.layout === 'admin';
    },
    isNonPrivateLayout() {
      return !this.isEmptyLayout && !this.isAdminLayout;
    },
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,700&display=swap&subset=cyrillic')
$body-font-family: 'Montserrat'
$title-font: 'Montserrat'

.v-application
  font-family: $body-font-family, sans-serif !important
  .title
    font-family: $title-font, sans-serif !important


.v-card,
.v-stepper,
.custom-elevation,
.v-stepper__header,
.v-expansion-panel,
.v-btn-toggle--selected,
.v-expansion-panel,
.v-expansion-panels,
.v-expansion-panel-header,
.v-expansion-panel-content,
.v-expansion-panel::before,
.v-data-table
  box-shadow: none !important

.v-card, .v-expansion-panel
  border: 1px solid #e6eef5 !important
  border-radius: 6px !important
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07) !important

.v-data-table
  background: transparent !important

.v-application .elevation-0
  border: none !important

.elevation-3
  box-shadow: 0 7px 15px rgba(0,0,0,.03) !important
  border: none !important

.cursor--pointer
  cursor: pointer

.v-navigation-drawer
  pointer-events: inherit

.no-select
  user-select: none
</style>
