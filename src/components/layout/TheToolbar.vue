<template functional>
  <v-app-bar color="primary" clipped-left dark app>
    <div>
      Верхнее меню, ну поняяятно
    </div>
  </v-app-bar>
</template>

<script>
const toolbarItems = [
  { name: 'Главная страница', to: '/', },
  { name: 'Отзывы',           to: '/', },
  { name: 'Вакансии',         to: '/',  items: [
    { name: 'О работе в компании',  to: '/' },
    { name: 'Список вакансий',      to: '/' },
    { name: 'Контактный номер',     to: '/' },
  ]},
  { name: 'Наши партнёры',    to: '/',  items: []},
  { name: 'Услуги агентства', to: '/', },
  { name: 'Информация',       to: '/', },
];

export default {
  name: 'TheToolbar',

  data: () => ({
    toolbarItems,
  }),
};
</script>
