<template>
  <v-layout justify-center>
    <v-flex xs11>
      <v-layout wrap>
        <v-flex class="headline font-weight-bold mb-4" xs12>Контакты</v-flex>

        <v-flex xs3>
          <v-card class="pa-8">
            <div class="subtitle font-weight-medium mb-2">Адрес офиса</div>
            <div class="mb-2">Город Домодедово, Улица 25 лет октября, дом 9</div>
            <div class="mb-2">пн-пт: 10:00–18:00 сб-вс: 11:00–15:00</div>

            <v-divider class="my-4" />
            <div class="subtitle font-weight-medium mb-2">Телефон</div>
            <div class="mb-1">+7 (926) 811-11-18</div>

            <v-divider class="my-4" />
            <div class="subtitle font-weight-medium mb-2">E-mail</div>
            <div class="mb-1">Mayak-DmD@yandex.ru</div>
          </v-card>
        </v-flex>

        <v-flex xs8 pl-8>
          <v-img src="/map.png" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ContactsPage',

  // 
};
</script>