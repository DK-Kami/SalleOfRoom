<template>
  <v-layout justify-center mt-12>
    <v-flex xs11>
      <v-card class="pa-6">
        <v-layout justify-space-between class="mb-6">
          <v-flex xs5>
            <div class="headline font-weight-bold about_title">Кто мы</div>
            <div class="subtitle">
              Маяк - это высококлассное риелторское агенство, занимающиеся всеми видами недвижимости Московской области, в частности, работаем в таких городах, как Видное, Домодедово и Новое Домодедово. Также мы предоставляем услуги по подбору зарубежной недвижимости. Для удобства наших клиентов мы сосредоточены на обеспечение всего процесса продажи и покупки.
            </div>
          </v-flex>

          <v-flex xs5>
            <div class="headline font-weight-bold about_title">Зачем нам доверять</div>
            <div class="subtitle">
              Прозрачность отношений с клиентами и индивидуальный подход к каждому из них - основа доверия к нашей компании. Наши менеджеры имеют большой опыт работы и мы гарантируем полную безопасность на протяжении всего процесса. Когда вы работаете с нами, вы можете быть уверены, что получаете доступ к профессионалам своего дела.
            </div>
          </v-flex>
        </v-layout>

        <v-layout justify-space-between>
          <v-flex xs5>
            <div class="headline font-weight-bold about_title">Мы ценим Вас</div>
            <div class="subtitle">
              У нас есть ясная и простая цель - хорошо обслуживать клиентов. Наши клиенты находятся в центре наших амбиций по созданию идеального агентства недвижимости. Мы с удовольствием работаем как с физическими, так и с юридическими лицами и решаем для своих клиентов задачи любой сложности: от подбора помещений до инвестиционного консалтинга и девелопмента.
            </div>
          </v-flex>

          <v-flex xs5>
            <div class="headline font-weight-bold about_title">Перспективы</div>
            <div class="subtitle">
              Маяк опирается на богатую и разнообразную историю риелторского дела. Путь, по которому идет компания сегодня, обеспечивает нам доверие клиентов в будущем. Мы быстро развиваемся и всегда готовы обсудить вопросы сотрудничества.
            </div>
          </v-flex>
        </v-layout>
      </v-card>

      <v-container grid-list-xl>
        <v-layout align-center column>
          <div class="headline font-weight-bold mt-12 mb-8">Руководство</div>

          <v-layout justify-center wrap style="width: 100%">
            <v-flex
              v-for="(personal, index) in personals.guide"
              :key="index"
              d-flex
              xs3
            >
              <specialist-card :specialist="personal" />
            </v-flex>
          </v-layout>

          <div class="headline font-weight-bold mt-12 mb-8">Наши специалисты</div>

          <v-layout wrap>
            <v-flex
              v-for="(personal, index) in personals.specialists"
              :key="index"
              d-flex
              xs3
            >
              <specialist-card :specialist="personal" />
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import SpecialistCard from './SpecialistCard';

const personals = {
  guide: [
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Генеральный директор' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Заместитель генерального директора' },
  ],
  specialists: [
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
    { image: 'personal.png', name: 'Александров Александр Александрович', position: 'Лицензированный продавец недвижимости' },
  ]
};

export default {
  name: 'AboutPage',

  components: {
    SpecialistCard,
  },

  data: () => ({
    personals,
  }),
};
</script>

<style lang="scss">
  .about_title::after {
    content: '';
    background: #FFB800;
    margin-bottom: 15px;
    display: block;
    width: 50px;
    height: 4px;
  }
</style>
