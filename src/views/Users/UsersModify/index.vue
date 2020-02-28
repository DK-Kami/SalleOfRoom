<template>
  <v-layout justify-center>
    <v-flex xs7 xl5 class="elevation-4">
      <form-base
        :title="id ? 'Редактирование персонала' : 'Добавление персонала'"
        ref="form"
        with-back-button
        @submit="handleSubmit"
      >
        <v-layout column>
          <v-layout v-if="!isAdmin">
            <v-text-field
              v-model="user.secondName"
              label="Фамилия"
              class="mr-8"
            />
            <v-text-field
              v-model="user.firstName"
              label="Имя"
              class="mx-4"
            />
            <v-text-field
              v-model="user.lastName"
              label="Отчество"
              class="ml-8"
            />
          </v-layout>

          <v-text-field
            v-model="user.email"
            :rules="[rulesList.email, rulesList.required]"
            label="Электронная почта"
            type="email"
            ref="email"
            validate-on-blur
          />
          <v-text-field
            v-if="!isAdmin"
            v-model="user.phone"
            v-mask="phoneMask"
            label="Телефон"
          />
          <v-text-field
            v-model="user.password"
            :rules="[rulesList.min('password')]"
            type="password"
            label="Пароль"
          />
          <v-text-field
            v-model="user.confirmPassword"
            label="Повторите пароль"
            type="password"
            validate-on-blur
          />

          <v-select
            v-if="!id"
            v-model="isAdmin"
            :items="roles"
            label="Роль персонала"
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

const roles = [
  { text: 'Администратор',  value: true   },
  { text: 'Риелтор',        value: false  },
];

export default {
  name: 'UsersModify',

  components: {
    FormBase,
  },

  directives: {
    mask,
  },

  created() {
    this.$store.dispatch('users/clearUser');
    if (this.id) {
      this.loadUser();
    }
  },

  mounted() {
    if (this.id && this.$refs.email) {
      this.$nextTick(this.$refs.email.focus);
    }
  },

  data: () => ({
    phoneMask: '+7 (###) ###-##-##',
    isAdmin: false,
    loading: false,
    roles,
  }),

  computed: {
    user() {
      return this.$store.getters['users/getUser'];
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    async loadUser() {
      await this.$store.dispatch('users/loadUser', this.id);
      this.isAdmin = this.user.role.toLowerCase() === 'admin';
    },

    async handleSubmit() {
      let response;
      this.loading = true;

      if (this.id) {
        response = await this.updateUser(this.id);
      }
      else {
        response = await this.createUser();
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
          this.$router.push({ name: 'users.list' });
          this.$store.dispatch('users/clearUser');
        }, 1000)
      }
    },

    async createUser() {
      const { error, data } = await this.$store.dispatch('users/createUser', this.isAdmin);
      return { error, data };
    },
    async updateUser() {
      const { error, data } = await this.$store.dispatch('users/updateUser', this.id);
      return { error, data };
    },
  },
};
</script>
