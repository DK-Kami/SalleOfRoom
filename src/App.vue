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

<style lang="scss">
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
  box-shadow: none !important;
}

.v-card, .v-expansion-panel {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1) !important;
}

.v-data-table {
  background: transparent !important
}

.v-application .elevation-0 {
  border: none !important
}

.elevation-custom {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: none !important
}

.cursor--pointer {
  cursor: pointer
}

.v-navigation-drawer {
  pointer-events: inherit
}

.no-select {
  user-select: none
}

.v-btn {
  border: 0.5px solid #C7C7C7;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important
}

.v-application--wrap {
  a {
    text-decoration: none
  }
  .v-content {
    padding: 0 !important
  }
}

.v-divider {
  border: 1px solid #60697C
}

.subtitle {
  font-size: 18px
}
.display-1 {
  font-size: 28px
}
.main_title {
  font-size: 40px;
  line-height: 49px
}

.text_content {
  div {
    margin-bottom: 20px
  }
  .list > span {
    display: block;
  }
}

</style>
