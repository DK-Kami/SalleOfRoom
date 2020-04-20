<template>
  <v-layout wrap mt-12 justify-center>
    <v-flex xs12 class="main_title primary--text text-center font-weight-medium">
      Маяк - больше, чем недвижимость
    </v-flex>
    <v-flex xs7 class="body-1 text--lighten-4 text-center font-weight-regular mt-5">
      Мы работаем на клиентов, персонально сопровождая каждого, а также обладаем постоянно обновляющейся базой данных о продаже и аренде жилой, загородной и коммерческой недвижимости и готовы провести сделку от начала до конца
    </v-flex>

    <v-flex xs10 mt-8>
      <v-row>
        <v-col
          v-for="section in sections"
          cols="3"
        >
          <div class="subheadline font-weight-medium mb-1">{{ section.title }}</div>
          <v-img :src="section.image" class="mb-3" />
          <div class="body-2 my-3">{{ section.description }}</div>

          <v-layout justify-end>
            <v-btn outlined>
              <span class="text-capitalize body-2">Подробнее</span>
              <v-img src="/arrow.png" class="ml-4" />
            </v-btn>
          </v-layout>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
const sections = [
  { title: 'Помощь',          image: '/help.png',       description: 'Оценка недвижимости, переговоры между сторонами, персональное сопровождение каждого клиента' },
  { title: 'Реклама',         image: '/ad.png',         description: 'Работа над рекламной кампанией и организация показов' },
  { title: 'Гарантия',        image: '/guarantee.png',  description: 'Гарантия полной безопасности при заключении сделок любой сложности' },
  { title: 'Присоединяйтесь', image: '/join.png',       description: 'Присоединяйтесь к нашей команде специалистов' },
];

export default {
  name: 'LastSection',

  data: () => ({
    sections,
  }),
};
</script>