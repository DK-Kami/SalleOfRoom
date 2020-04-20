<template>
  <v-container grid-list-xl mt-2>
    <v-layout wrap>
      <v-flex xs4 d-flex>
        <v-card style="width: 100%">
          <v-img src="/main-1.png" class="px-6 py-3 pb-7">
            <v-card color="transparent elevation-0 white--text d-flex align-end flex-column fill-height">
              <v-card-title class="headline" style="width: 100%">Жилая недвижимость</v-card-title>

              <v-card-actions class="mt-auto">
                <v-btn outlined dark large>
                  <span class="text-capitalize body-1">Больше</span>
                  <v-img src="/arrow.png" class="ml-4" />
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-img>
        </v-card>
      </v-flex>

      <v-flex xs4 d-flex>
        <v-card class="px-6 py-3" style="width: 100%">
          <v-card-title class="headline font-weight-medium">Продажа</v-card-title>
          <v-card-text>
            <div class="body-1 black--text font-weight-regular">Студии <span class="grey--text body-2 ml-1">3</span></div>
            <div class="body-1 black--text font-weight-regular">1-комнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">2-комнатные квартиры <span class="grey--text body-2 ml-1">4</span></div>
            <div class="body-1 black--text font-weight-regular">3-комнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">Многокомнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">Комнаты <span class="grey--text body-2 ml-1">6</span></div>
            <div class="body-1 black--text font-weight-regular">Вторичное жилье</div>
            <div class="body-1 black--text font-weight-regular">Новостройки <span class="grey--text body-2 ml-1">9</span></div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs4 d-flex>
        <v-card class="px-6 py-3" style="width: 100%">
          <v-card-title class="headline font-weight-medium">Аренда</v-card-title>
          <v-card-text>
            <div class="body-1 black--text font-weight-regular">Студии <span class="grey--text body-2 ml-1">3</span></div>
            <div class="body-1 black--text font-weight-regular">1-комнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">2-комнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">3-комнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">Многокомнатные квартиры</div>
            <div class="body-1 black--text font-weight-regular">Комнаты <span class="grey--text body-2 ml-1">6</span></div>
            <div class="body-1 black--text font-weight-regular">Дома</div>
          </v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex xs12>
        <v-layout>
          <v-flex xs8>
            <v-layout wrap>
              <v-flex xs12>
                <v-card style="width: 100%" ma-n1>
                  <v-img src="/main-2.png" class="px-6 py-3">
                    <v-card color="transparent elevation-0 white--text v-layout column fill-height">
                      <v-card-title class="headline black--text font-weight-medium offer-title">
                        <div>Коммерческая недвижимость</div>
                      </v-card-title>

                      <v-card-text>
                        <v-row class="body-1 black--text font-weight-regular">
                          <v-col>
                            <div class="subheadline black--text font-weight-medium mb-3">Продажа</div>
                            <div>Офисы <span class="grey--text body-2 ml-1">3</span></div>
                            <div>Производство и склады</div>
                            <div>Здания и особняки</div>
                            <div>Торговля и сервис</div>
                            <div>Кафе. Бары. Рестораны <span class="grey--text body-2 ml-1">6</span></div>
                            <div>Другого назначения</div>
                          </v-col>
                          
                          <v-col>
                            <div class="subheadline black--text font-weight-medium mb-3">Аренда</div>
                            <div>Офисы</div>
                            <div>Производство и склады</div>
                            <div>Здания и особняки <span class="grey--text body-2 ml-1">4</span></div>
                            <div>Торговля и сервис</div>
                            <div>Кафе. Бары. Рестораны</div>
                            <div>Другого назначения</div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-img>
                </v-card>
              </v-flex>
              
              <v-flex xs12>
                <v-card style="width: 100%">
                  <v-img src="/main-3.png" class="px-6 py-3">
                    <v-card color="transparent elevation-0 white--text v-layout column fill-height">
                      <v-card-title class="headline white--text font-weight-medium offer-title">
                        <div>Зарубежная недвижимость</div>
                      </v-card-title>

                      <v-card-text>
                        <v-row class="body-1 font-weight-regular white--text">
                          <v-col>
                            <div class="subheadline font-weight-medium mb-3">Продажа</div>
                            <div>Дома</div>
                            <div>Таунхаусы</div>
                            <div>Дачи</div>
                            <div>Участки</div>
                          </v-col>

                          <v-col>
                            <div class="subheadline white--text font-weight-medium mb-3">Аренда</div>
                            <div>Дома</div>
                            <div>Таунхаусы</div>
                            <div>Участки</div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs4 child-flex d-flex>
            <v-card style="width: 100%">
              <v-img src="/main-4.png" class="white--text">
                <v-layout fill-height align-center justify-center column>
                  <div class="headline font-weight-medium">Поиск на карте</div>
                  <div class="body-2 mt-1 mb-6">Быстро, удобно, всё видно</div>
                  <v-btn outlined dark large>
                    <span class="text-capitalize body-1">Начать</span>
                    <v-img src="/arrow.png" class="ml-4" />
                  </v-btn>
                </v-layout>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AfterHeader',
};
</script>

<style lang="scss">
  .offer-title>div {
    width: 100%;
  }
  .offer-title::after {
    background-color: #FFB800;
    margin-top: 5px;
    content: '';
    width: 60px;
    height: 3px;
  }
</style>
