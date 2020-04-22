<template>
  <v-layout justify-center wrap>
    <v-flex xs11>
      <v-card class="pa-8 mb-10">
        <v-layout justify-space-between>
          <v-flex xs7 mt-4>
            <div class="primary__title headline font-weight-bold">Сотрудничайте с нами</div>
            <div class="subtitle mt-6">
              <div>Ищете интересную работу? Вы готовы получать новые знания и опыт, а также открыты для общения с новыми, интересными людьми?</div>
              <div>Маяк — стабильная и успешная компания, которая обеспечивает своим сотрудникам и клиентам максимально комфортные условия. Мы всегда рады принять в свои ряды умных, целеустремленных, смелых и творческих людей, желающих зарабатывать достойные деньги.</div></div>

            <div class="primary-list subtitle">
              <div class="primary-list__item">Гибкий график работы</div>
              <div class="primary-list__item">Высокие проценты с комиссии</div>
              <div class="primary-list__item">Курсы для новичков</div>
            </div>

            <div class="grey--text">
              Заявки обрабатываются в будни с 9 до 21, в выходные с 10 до 17. Нажимая “Отозваться”, Вы соглашаетесь с <a href="/privacy">политикой обработки персональных данных</a>
            </div>
          </v-flex>

          <v-flex xs4>
            <v-card class="pa-4">
              <v-card-title class="subheadline-1 font-weight-bold">
                Отозваться на вакансию
              </v-card-title>
              <v-card-text class="subtitle black--text">
                <v-text-field
                  v-model="name"
                  label="Ваше имя"
                  outlined
                  flat
                />
                <v-text-field
                  v-model="phone"
                  label="Ваш номер телефона"
                  outlined
                  flat
                />
                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                  flat
                />
                <v-select
                  v-model="position"
                  :items="positionNames"
                  label="Вакансия"
                  outlined
                  flat
                />
                <v-file-input
                  v-model="summary"
                  label="Прикрепить резюме"
                  append-icon="mdi-attachment"
                  prepend-icon=""
                  outlined
                  flat
                />

                <v-layout justify-end mr-1>
                  <v-btn outlined large>
                    <span class="text-capitalize body-1">Заказать <span class="text-lowercase">звонок</span></span>
                    <v-img src="/arrow.png" class="ml-4" />
                  </v-btn>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>

      <toggle-element
        v-for="(position, index) in positions"
        :key="index"
        class="my-8"
      >
        <template #title>
          <v-layout column>
            <div class="subtitle font-weight-medium">{{ position.name }}</div>
            <div class="grey--text mt-2">
              {{ position.employment }} <span class="mx-1">|</span> {{ position.location }}
            </div>
          </v-layout>
        </template>

        <template #default>
          <v-layout column>
            <div class="mt-4">
              Работа риэлтора на вторичном рынке жилья — это ответственно и очень прибыльно, сложно, но интересно. Доход зависит только от Вашего трудолюбия и усердия, верхней планки нет. Самые инициативные и активные, трудолюбивые и общительные получают возможность стремительного карьерного роста. За год Вы можете из новичка вырасти до профессионального эксперта.
            </div>

            <div class="mt-8 subtitle font-weight-medium">Требования к кандидату</div>
            <div class="mt-2 ml-4">
              <div
                v-for="(requirement, index) in position.requirements"
                :key="index"
              >{{ requirement }}</div>
            </div>

            <div class="mt-8 subtitle font-weight-medium">Должностные обязанности</div>
            <div class="mt-2 ml-4">
              <div
                v-for="(dutie, index) in position.duties"
                :key="index"
              >{{ dutie }}</div>
            </div>

            <div class="mt-8 subtitle font-weight-medium">Условия работы</div>
            <div class="mt-2 ml-4">
              <div
                v-for="(condition, index) in position.conditions"
                :key="index"
              >{{ condition }}</div>
            </div>
          </v-layout>
        </template>
      </toggle-element>
    </v-flex>
  </v-layout>
</template>

<script>
import ToggleElement from '@/components/base/ToggleElement';

const position = {
  name: 'Агент (риэлтор) по работе на вторичном рынке жилья',
  employment: 'Постоянная занятость',
  location: 'Домодедово',
  description: 'Работа риэлтора на вторичном рынке жилья — это ответственно и очень прибыльно, сложно, но интересно. Доход зависит только от Вашего трудолюбия и усердия, верхней планки нет. Самые инициативные и активные, трудолюбивые и общительные получают возможность стремительного карьерного роста. За год Вы можете из новичка вырасти до профессионального эксперта.',
  requirements: [
    '- образование не ниже средне-специального;',
    '- с желанием развиваться в сфере недвижимости;',
    '- коммуникабельность;',
    '- самостоятельный, тактичный, внимательный, открытый для новых знаний;',
    '- умение работать на результат;',
  ],
  duties: [
    '- Полное сопровождение клиентов по купле-продаже недвижимости:',
    '- получение клиентского запроса,',
    '- проведение переговоров,',
    '- показ объектов недвижимости,',
    '- документационное оформление сделок (совместно с юристами компании).',
  ],
  conditions: [
    '- Высокий % от сделок,',
    '- График работы, который вы формируете сами,',
    '- Большие возможности карьерного роста – от стажёра до начальника отдела,',
    '- Корпоративная сотовая связь,',
    '- Собственная база недвижимости,',
    '- Личный кабинет сотрудника сотрудника, доступный со смартфона для удобного взаимодейтсвия с клиентами',
  ],
};
const positions = new Array(8).fill(position);

export default {
  name: 'JobPage',

  components: {
    ToggleElement,
  },

  data: () => ({
    positions,

    name: '',
    phone: '',
    email: '',
    position: '',
    summary: null,
  }),

  computed: {
    positionNames() {
      return this.positions.map(p => p.name);
    },
  },

  methods: {
    sendSummary() {
      console.log('send summary');
    },
  },
};
</script>