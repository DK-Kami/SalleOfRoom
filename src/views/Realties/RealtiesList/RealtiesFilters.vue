<template>
  <v-layout justify-end wrap class="mx-4  ">
    <v-btn
      color="primary"
      text
      @click="toggleExpand"
    >
      <v-icon :class="{ 'expand': expand }">mdi-arrow-down-drop-circle-outline</v-icon>
      <div class="ml-2">Расширенные фильтры</div>
    </v-btn>

    <v-flex xs12>
      <v-expand-transition>
        <v-container v-show="expand" pa-0 ma-0 grid-list-xl>
          <v-layout wrap align-end justify-center>
            <v-flex xs12>
              <v-divider />
            </v-flex>

            <v-flex xs3>
              <v-select
                v-model="filters.CategoryId"
                :items="category"
                label="Категория"
                item-text="Name"
                item-value="Id"
              />
            </v-flex>

            <v-flex xs3>
              <v-select
                v-model="filters.WallMaterialId"
                :items="wallMaterial"
                label="Материал стены"
                item-text="Name"
                item-value="Id"
              />
            </v-flex>

            <v-flex xs3>
              <v-select
                v-model="filters.TransactionTypeId"
                :items="transaction"
                label="Тип транзакции"
                item-text="Name"
                item-value="Id"
              />
            </v-flex>

            <v-flex xs3>
              <v-text-field
                v-model="filters.RoomCount"
                label="Количество комнат"
                type="number"
              />
            </v-flex>

            <v-flex xs12>
              <v-layout>
                <v-flex>
                  <v-text-field
                    v-model="filters.City"
                    label="Город"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="filters.CityDistrict"
                    label="Округ"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="filters.Region"
                    label="Регион"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="filters.District"
                    label="Район"
                  />
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="filters.Street"
                    label="Улица"
                  />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout justify-space-between>
                <v-flex xs5 class="py-0">
                  <v-layout align-center class="mt-2" wrap>
                    <v-flex xs12 class="title py-0 font-weight-medium">Цена</v-flex>
                    <v-flex xs6>
                      <v-text-field
                        v-model="filters.PriceFrom"
                        type="number"
                        class="mr-3"
                        suffix="₽"
                        label="С"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        v-model="filters.PriceTo"
                        type="number"
                        suffix="₽"
                        label="По"
                      />
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex xs5 class="py-0">
                  <v-layout align-center class="mt-2" wrap>
                    <v-flex xs12 class="title py-0 font-weight-medium">Площадь</v-flex>
                    <v-flex xs6>
                      <v-text-field
                        v-model="filters.AreaFrom"
                        suffix="м кв."
                        type="number"
                        class="mr-3"
                        label="С"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        v-model="filters.AreaTo"
                        suffix="м кв."
                        type="number"
                        label="По"
                      />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 mt-3>
              <v-layout justify-end>
                <v-btn
                  color="primary"
                  @click="applyFilter"
                >Применить фильтры</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-expand-transition>
    </v-flex>
  </v-layout>
</template>

<script>
const filters = {
  TransactionTypeId: null,
  WallMaterialId: null,
  CategoryId: null,

  CityDistrict: null,
  District: null,
  Street: null,
  Region: null,
  City: null,

  RoomCount: null,
  PriceFrom: null,
  PriceTo: null,
  AreaFrom: null,
  AreaTo: null,
};

export default {
  name: 'RealtiesFilters',

  created() {
    this.loadCounterparty();
    this.loadWallMaterial();
    this.loadTransaction();
    this.loadCategory();
    this.loadRealtor();
  },

  data: () => ({
    expand: false,
    filters,
  }),

  computed: {
    counterparty() {
      return this.$store.getters['counterparties/getCounterparties'];
    },
    wallMaterial() {
      return this.$store.getters['types/getWallMaterial'];
    },
    transaction() {
      return this.$store.getters['types/getTransaction'];
    },
    category() {
      return this.$store.getters['types/getCategory'];
    },
    realtor() {
      return this.$store.getters['users/getRealtor'];
    },
  },

  methods: {
    async loadCounterparty() {
      await this.$store.dispatch('counterparties/loadCounterparties', { page: 1 });
    },
    async loadWallMaterial() {
      await this.$store.dispatch('types/loadWallMaterial');
    },
    async loadTransaction() {
      await this.$store.dispatch('types/loadTransaction');
    },
    async loadCategory() {
      await this.$store.dispatch('types/loadCategory');
    },
    async loadRealtor() {
      await this.$store.dispatch('users/loadUsers', { page: 1 });
    },

    toggleExpand() {
      this.expand = !this.expand;
    },

    applyFilter() {
      this.$emit('apply-filters', this.filters);
    }
  },
};
</script>

<style>
  .expand {
    transform: rotate(180deg);
  }
</style>
