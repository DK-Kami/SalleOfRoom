<template>
  <v-layout column>
    <v-flex class="white--text text-center headline main-subtitle pt-4 mb-5">
      Мы поможем найти место, которое вы полюбите
    </v-flex>

    <v-flex class="white--text">
      <search-bar />
    </v-flex>

    <v-flex class="after--header">
      <v-container grid-list-xl>
        <v-layout class="mt-8">
          <v-flex xs4 d-flex>
            <v-card style="width: 100%">
              <v-img src="/main-1.png">
                <v-card color="transparent elevation-0 white--text v-layout column fill-height">
                  <v-card-title>Жилая недвижимость</v-card-title>
                  <v-card-actions class="mt-auto">
                    hui
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
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchBar from './SearchBar';

export default {
  name: 'MainPage',

  components: {
    SearchBar,
  },
};
</script>

<style lang="scss">
  .main-subtitle {
    margin-top: -50px;
  }
  .after--header {
    margin-top: 400px;
  }
</style>
