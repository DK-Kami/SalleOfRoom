<template>
  <v-footer
    class="white--text caption"
    color="primary"
    absolute
    app
  >
    <v-layout justify-center>
      <v-flex xs12 ms11 lg10 xl8>
        <v-layout column>
          <v-layout class="mb-3 mt-5">
            <v-flex xs3 class="body-1 footer__links">
              <div class="footer__link">
                <a class="grey--text text--lighten-2" href="tel:+7 (926) 811-11-18">+7 (926) 811-11-18</a>
              </div>
              <div class="footer__link">
                <a class="grey--text text--lighten-2" href="mailto:Mayak-DmD@yandex.ru">Mayak-DmD@yandex.ru</a>
              </div>

              <v-layout>
                <v-icon class="grey--text text--lighten-1 mr-3">mdi-whatsapp</v-icon>
                <v-icon class="grey--text text--lighten-1">mdi-instagram</v-icon>
              </v-layout>
            </v-flex>

            <v-flex xs9>
              <v-layout>
                <v-layout
                  v-for="(item, index) in footerItems"
                  :key="index"
                  column
                >
                  <div class="footer__item">{{ item.title }}</div>

                  <div v-for="text in item.discribe">
                    <a class="grey--text text--lighten-2" :href="text.to || item.to">{{ text.title || text }}</a>
                  </div>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-divider dark />

          <v-layout justify-space-between class="mb-3 mt-5 body-1 grey--text text--lighten-1">
            <v-flex grow>© 2020, ООО «Маяк»</v-flex>

            <v-layout justify-end align-center class="footer__items">
              <a class="grey--text text--lighten-1" href="">Для риелторов</a>
              <a class="grey--text text--lighten-1" href="/privacy">Конфиденциальность</a>
              <a class="grey--text text--lighten-1" href="/condition">Условия</a>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
const footerItems = [
  {
    title: 'Купить',
    discribe: [
      'Квартиры, комнаты',
      'Новостройки',
      'Коттеджи, таунхаусы, участки',
      'Коттеджные поселки',
      'Нежилые помещения',
    ],
    to: '/sale/list'
  },
  {
    title: 'Услуги',
    discribe: [
      'Оценка недвижимости',
      'Юридическая помощь',
      'Подбор недвижимости за рубежом',
    ],
    to: '/services'
  },
  {
    title: 'О нас',
    discribe: [
      'Кто мы',
      'Наши  специалисты',
      {
        title: 'Отзывы',
        to: '/reviews',
      }
    ],
    to: '/about'
  },
  {
    title: 'Контакты ',
    discribe: ['Вакансии'],
    to: '/'
  },
];

export default {
  name: 'TheFooter',

  data: () => ({
    footerItems,
  }),
};
</script>

<style lang="scss">
  .footer__items
    a:not(:last-child)::after {
      content: "";
      background-color: #FFB800;
      display: inline-block;
      border-radius: 5px;
      margin: 0 10px 4px 10px;
      height: 3px;
      width: 3px;
    }
  .footer__links
    div:not(:last-child) {
      margin-bottom: 15px;
    }

  .footer__link {
    border: 0.5px solid #C7C7C7;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 245px;
    height: 35px;
  }

  .footer__item {
    font-size: 18px;
  }
</style>
