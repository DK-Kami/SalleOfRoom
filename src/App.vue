<template>
  <v-app>
    <notification />

    <v-content v-if="true">
      <router-view />
    </v-content>

    <v-content v-else>
      <v-app-bar style="display:none"></v-app-bar>
      <the-toolbar />

      <v-container fluid class="px-0 mt-4">
        <v-layout fill-height justify-center>
          <v-slide-y-transition mode="out-in">
            <router-view />
          </v-slide-y-transition>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Notification from '@/components/layout/Notification';
import TheToolbar from '@/components/layout/TheToolbar';
import TheFooter from '@/components/layout/TheFooter';
import TheMenu from '@/components/layout/TheMenu';

export default {
  name: 'App',

  components: {
    Notification,
    TheToolbar,
    TheFooter,
    TheMenu,
  },
};
</script>

<style>
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
.v-data-table {
  /* box-shadow: 0 7px 15px rgba(0,0,0,.03) !important; */
  box-shadow: none !important;
}
.v-card, .v-expansion-panel {
  border: 1px solid #e6eef5 !important;
  border-radius: 6px !important;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07) !important;
}
.v-data-table {
  background: transparent !important;
}
.v-application .elevation-0 {
  border: none !important;
}

.elevation-3 {
  box-shadow: 0 7px 15px rgba(0,0,0,.03) !important;
  border: none !important;
}
.cursor--pointer {
  cursor: pointer;
}
.v-navigation-drawer {
  pointer-events: inherit;
}

.theme--light.v-divider {
  border-color: transparent !important;
}

.theme--light.v-data-table thead th {
  color: #ffffff !important;
}

.theme--light.v-data-table .v-data-table-header th.sortable.active .v-data-table-header__icon, .theme--light.v-data-table .v-data-table-header th.sortable .v-data-table-header__icon {
  color: #ffffff !important;
}

.no-select {
  user-select: none;
}
</style>
