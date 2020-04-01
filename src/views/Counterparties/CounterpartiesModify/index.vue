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
        <v-layout column>
          <v-layout justify-space-between wrap>
            <v-flex xs12 lg3>
              <v-text-field
                v-model="counterparty.secondName"
                label="Фамилия"
              />
            </v-flex>
            <v-flex xs12 lg3>
              <v-text-field
                v-model="counterparty.firstName"
                label="Имя"
              />
            </v-flex>
            <v-flex xs12 lg3>
              <v-text-field
                v-model="counterparty.lastName"
                label="Отчество"
              />
            </v-flex>
          </v-layout>

          <v-text-field
            v-model="counterparty.phone"
            v-mask="phoneMask"
            label="Телефон"
          />
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
</template>

<script>
import FormBase from '@/components/base/FormBase';
import { mask } from 'vue-the-mask';

export default {
  name: 'CounterpartiesModify',

  components: {
    FormBase,
  },

  directives: {
    mask,
  },

  props: {
    dialogView: Boolean,
  },

  created() {
    this.$store.dispatch('counterparties/clearCounterparty');
    if (this.id) {
      this.loadCounterparty();
    }
  },

  data: () => ({
    phoneMask: '+7 (###) ###-##-##',
    loading: false,
  }),

  computed: {
    counterparty() {
      return this.$store.getters['counterparties/getCounterparty'];
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
    async loadCounterparty() {
      await this.$store.dispatch('counterparties/loadCounterparty', this.id);
    },

    async handleSubmit() {
      let response;
      this.loading = true;

      if (this.id) {
        response = await this.updateCounterparty(this.id);
      }
      else {
        response = await this.createCounterparty();
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
          this.$router.push({ name: 'counterparties.list' });
          this.$store.dispatch('counterparties/clearCounterparty');
        }, 1000)
      }
    },

    async createCounterparty() {
      const { error, data } = await this.$store.dispatch('counterparties/createCounterparty', this.isAdmin);
      return { error, data };
    },
    async updateCounterparty() {
      const { error, data } = await this.$store.dispatch('counterparties/updateCounterparty', this.id);
      return { error, data };
    },
  },
};
</script>
