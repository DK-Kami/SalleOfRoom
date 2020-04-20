<template>
  <v-img src="/main-form.png">
    <v-layout justify-center align-center fill-height>
      <v-flex xs4>
        <div class="display-1 primary--text font-weight-medium text--lighten-3 text-center">
          Возьмём весь процесс на себя
        </div>
        <div class="body-1 px-8 pt-8 text-center">
          Маяк - высококлассное агенство недвижимости со штатом профессиональных сотрудников Маяк - это гарантия комфорта и безопасности Маяк - это помощь с важнейшим выбором
        </div>
      </v-flex>

      <v-flex xs3 ml-10 px-5>
        <v-card color="primary" class="pt-2 pb-4 px-2" dark>
          <v-card-title class="font-weight-regular">
            Узнайте рыночную стоимость и арендную ставку квартиры
          </v-card-title>

          <v-card-text>
            <v-text-field
              v-model="street"
              label="Населённый пункт, улица, дом"
              light
              solo
            />
            <v-text-field
              v-model="roomNumber"
              label="№ квартиры"
              light
              solo
            />
            <v-text-field
              v-model="roomCount"
              label="Кол-во комнат"
              light
              solo
            />
            <v-text-field
              v-model="area"
              label="Площадь"
              light
              solo
            />  
            <v-text-field
              v-model="phone"
              label="Ваш номер телефона"
              light
              solo
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn outlined dark large>
              <span class="text-capitalize body-1">Оценить</span>
              <v-img src="/arrow.png" class="ml-4" />
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  name: 'FormSection',

  data: () => ({
    roomNumber: '',
    roomCount: '',
    street: '',
    phone: '',
    area: '',
  }),
};
</script>