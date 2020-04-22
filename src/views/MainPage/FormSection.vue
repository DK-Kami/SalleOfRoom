<template>
  <!-- <v-img
    lazy-src="/main-form.png"
    src="/main-form.png"
    key="formImage"
    rel="preload"
    width="100%"
  > -->
    <v-layout class="relative" justify-center align-center fill-height>
      <div class="absolute">
        <v-img src="/main-form.png" />
      </div>

      <v-flex xs5 style="z-index: 1">
        <div class="display-1 primary--text font-weight-medium text--lighten-3 text-center">
          Возьмём весь процесс на себя
        </div>
        <div class="body-1 px-8 py-8 pb-12 mb-12 text-center">
          Маяк - высококлассное агенство недвижимости со штатом профессиональных сотрудников <br>
          Маяк - это гарантия комфорта и безопасности <br>
          Маяк - это помощь с важнейшим выбором
        </div>

        <div
          v-for="section in sections"
          class="mb-6 px-12 form--section mb-12 pb-8"
        >
          <span class="form--section__line"></span>
          <v-layout column class="form--section__content">
            <div class="subheadline font-weight-medium">{{ section.title }}</div>
            <div>{{ section.description }}</div>
          </v-layout>
        </div>
      </v-flex>

      <v-flex xs4 ml-10 px-5>
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
  <!-- </v-img> -->
</template>

<script>
const sections = [
  { title: 'Оценим вашу недвижимость',            description: 'Бесплатная экспертная оценка рыночной стоимости квартиры или комнаты для обмена или продажи' },
  { title: 'Окажем юридическую помощь',           description: 'Экспертная проверка юридической чистоты объектов и бесплатные юридические консультации клиентов' },
  { title: 'Проведём персональное сопровождение', description: 'Проведём переговоры с продавцом/покупателем и согласуем условия сделки' },
];

export default {
  name: 'FormSection',

  data: () => ({
    roomNumber: '',
    roomCount: '',
    street: '',
    phone: '',
    area: '',

    sections,
  }),
};
</script>

<style lang="scss">
  .form--section__line {
    width: 70px;
    padding-top: 55px;

    border-right: 4px solid #FFB800;
  }
  .form--section__content {
    margin-top: -80px;
    margin-left: 30px;
  }
</style>
