<template>
  <v-layout justify-center>
    <v-flex
      :class="{ 'xs12 xl5': !dialogView }"
      class="elevation-4 ma-0"
      xs12 lg7 xl5
    >
      <form-base
        :title="currentTitle"
        ref="form"
        :with-back-button="!dialogView"
        @submit="handleSubmit"
      >
        <v-layout justify-space-between wrap>
          <v-flex xs12 lg5>
            <v-text-field
              v-model="employee.secondName"
              label="Фамилия"
            />
          </v-flex>
          <v-flex xs12 lg5>
            <v-text-field
              v-model="employee.firstName"
              label="Имя"
            />
          </v-flex>
          <v-flex xs12 lg5>
            <v-text-field
              v-model="employee.lastName"
              label="Отчество"
            />
          </v-flex>
          <v-flex xs12 lg5>
            <v-select
              v-model="employee.position"
              :items="positions"
              label="Должность"
            />
          </v-flex>
        </v-layout>

        <photos-form />

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
</template>

<script>
import FormBase from '@/components/base/FormBase';
import PhotosForm from './PhotosForm';
import { mask } from 'vue-the-mask';

export default {
  name: 'EmployesModify',

  components: {
    PhotosForm,
    FormBase,
  },

  directives: {
    mask,
  },

  props: {
    dialogView: Boolean,
  },

  created() {
    this.loadPosition();

    this.$store.dispatch('employes/clearEmployee');
    if (this.id) {
      this.loaddEmployee();
    }
  },

  data: () => ({
    phoneMask: '+7 (###) ###-##-##',
    loading: false,
  }),

  computed: {
    employee() {
      return this.$store.getters['employes/getEmployee'];
    },
    positions() {
      return this.$store.getters['types/getPositions'];
    },
    id() {
      return this.$route.params.id;
    },
    currentTitle() {
      if (this.dialogView) return '';
      return this.id ? 'Редактирование контрагента' : 'Добавление контрагента'
    }
  },

  methods: {
    async loaddEmployee() {
      await this.$store.dispatch('employes/loadEmployee', this.id);
    },

    async loadPosition() {
      await this.$store.dispatch('types/loadPositions');
    },

    async handleSubmit() {
      let response;
      this.loading = true;

      if (this.id) {
        response = await this.updatedEmployee(this.id);
      }
      else {
        response = await this.createdEmployee();
      }
      this.loading = false;
      const { error, data } = response;

      if (error) {
        const error = Object.values(data.ModelState)[0][0];
        this.$refs.form.setError(error);
      }
      else {
        if (this.dialogView) {
          return this.$emit('add', data.Id);
        }
        setTimeout(() => {
          this.$router.push({ name: 'employes.list' });
          this.$store.dispatch('employes/clearEmployee');
        }, 1000)
      }
    },

    async createdEmployee() {
      const { error, data } = await this.$store.dispatch('employes/createEmployee', this.isAdmin);
      return { error, data };
    },
    async updatedEmployee() {
      const { error, data } = await this.$store.dispatch('employes/updateEmployee', this.id);
      return { error, data };
    },
  },
};
</script>
