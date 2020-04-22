<template>
  <v-layout justify-center wrap>
    <v-flex xs11>
      <v-card class="pa-8">
        <v-layout justify-space-between>
          <v-flex xs8>
            <div class="primary__title headline font-weight-bold">Проведите оценку своей недвижимости</div>
            <div class="subtitle mt-6">Бесплатная экспертная оценка рыночной стоимости квартиры или комнаты для обмена или продажи</div>

            <div class="primary-list subtitle">
              <div class="primary-list__item">
                <div>ПОДГОТОВКА ДОКУМЕНТОВ</div>
                <div>Вам сообщается, какие именно документы на объект недвижимости требуются для проведения оценки</div>
              </div>
              <div class="primary-list__item">
                <div>ВЫЕЗД ОЦЕНЩИКА</div>
                <div>Вы согласовываете дату и время прибытия специалиста, который фотографирует объект и осуществляет его оценку</div>
              </div>
              <div class="primary-list__item">
                <div>ПОДГОТОВКА ОТЧЕТА</div>
                <div>После осмотра Вашего объекта составляется отчет об оценке с указанием рыночной стоимости Вашей недвижимости</div>
              </div>
            </div>

            <div class="grey--text mt-8">
              Заявки обрабатываются в будни с 9 до 21, в выходные с 10 до 17. Нажимая “Оценить” или “Заказать звонок”, Вы соглашаетесь с <a href="/privacy">политикой обработки персональных данных</a>
            </div>
          </v-flex>

          <!-- <v-flex xs3>
            form here
          </v-flex> -->
        </v-layout>
      </v-card>

      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs4 d-flex>
            <v-card class="mt-12 pa-7">
              <v-card-title class="subheadline-1 font-weight-bold primary__title">
                Получите юридическую помощь
              </v-card-title>
              <v-card-text class="subtitle black--text">
                Первичная юридическая консультация бесплатная. Мы также готовы предоставить юридические услуги не только в сфере недвижимости.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs4 d-flex>
            <v-card class="mt-12 pa-7">
              <v-card-title class="subheadline-1 font-weight-bold primary__title">
                Подбор недвижимости за рубежом
              </v-card-title>
              <v-card-text class="subtitle black--text">
                Мы тесно сотрудничаем с агенствами недвижимости стран СНГ, а также агенствами недвижимости таких стран, как Португалия, Испания и Германия.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs4 d-flex>
            <v-card class="mt-12 pa-7">
              <v-card-title class="subheadline-1 font-weight-bold primary__title">
                Рекламная кампания
              </v-card-title>
              <v-card-text class="subtitle black--text">
                Составляем грамотное предложение и размещаем его на целевых площадках. Наши РR специалисты возьмут все вопросы связанные с рекламой ваших объектов на себя.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs8 d-flex>
            <v-card class="mt-12 pa-7">
              <v-card-title class="subheadline-1 font-weight-bold primary__title">
                <div style="width: 100%">Гарантия успешной сделки</div>
              </v-card-title>
              <v-card-text class="subtitle black--text">
                <div class="primary-list__item">Полное юридическое сопровождение всего процесса продажи</div>
                <div class="primary-list__item">Проведение переговоров с продавцом/покупателем и согласование условий сделки</div>
                <div class="primary-list__item">Персональное сопровождение каждого клиента</div>
                <div class="primary-list__item">Гарантия полной безопасности при заключении сделок любой сложности</div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs4 d-flex>
            <v-card class="mt-12 pa-7">
              <v-card-title class="subheadline-1 font-weight-bold primary__title">
                <div style="width: 100%">Позвоните нам или <br> закажите звонок</div>
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
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ServicesPage',

  data: () => ({
    phone: '',
    name: '',
  }),
};
</script>

<style lang="scss">
  .primary-list {
    padding: 20px 50px;
  }
  .primary-list__item {
    padding: 20px 0;
  }
  .primary-list__item::before {
    content: '';
    border-radius: 10px;
    margin-bottom: -15px;
    margin-left: -20px;
    display: block;
    height: 6px;
    width: 6px;

    background: #192541;
  }
</style>
