<template>
  <v-layout
    justify-center
    align-center
    fill-height
  >
    <v-flex shrink>
      <form-base
        title="Авторизация"
        elevation="4"
        ref="form"
        @submit="auth"
      >
        <v-layout column>
          <v-text-field
            v-model="login"
            :rules="[rulesList.required]"
            label="Логин"
            outlined
          />
          <v-text-field
            v-model="password"
            :rules="[rulesList.required]"
            type="password"
            label="Пароль"
            outlined
          />
        </v-layout>

        <template #actions>
          <v-btn
            :loading="loading"
            color="primary"
            type="submit"
            block
          >Войти</v-btn>
        </template>
      </form-base>
    </v-flex>
  </v-layout>
</template>

<script>
import FormBase from '@/components/base/FormBase';

export default {
  name: 'LoginPage',

  components: {
    FormBase,
  },

  data: () => ({
    loading: false,
    password: '',
    login: '',
  }),

  methods: {
    async auth() {
      this.loading = true;
      const { data: message, error } = (await this.$store.dispatch('auth/login', {
        password: this.password,
        login: this.login,
      }));

      if (error) {
        this.$refs.form.setError(message);
      }
      this.loading = false;
      this.$router.replace({ name: 'ping' });
    },
  },
};
</script>
