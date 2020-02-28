import services from '@/middleware';
const { RealtiesService } = services;

const initialRealty = () => ({
  transactionTypeId: '',
  counterpartyId: '',
  wallMaterialId: '',
  categoryId: '',
  realtorId: '',

  houseNumber: '',
  kitchenArea: '',
  flatNumber: '',
  livingArea: '',
  roomCount: '',
  price: 0.0,
  floor: '',
  
  readyState: 'ready',
  cityDistrict: '',
  district: '',
  comment: '',
  region: '',
  street: '',
  area: '',
  city: '',
  
  coord: '55.751435, 37.620260',
  previewPictures: [],
  pictures: [],
});

export const initialState = () => ({
  realty: initialRealty(),
  realties: [],
});

export const mutations = {
  CLEAR_REALTY: state => state.realty = initialRealty(),
  SET_REALTIES: (state, realties) => state.realties = realties,
  SET_REALTY: (state, realty) => {
    state.transactionTypeId = realty.TransactionTypeId;
    state.counterpartyId    = realty.CounterpartyId;
    state.wallMaterialId    = realty.WallMaterialId;
    state.categoryId        = realty.CategoryId;
    state.realtorId         = realty.RealtorId;

    state.houseNumber       = realty.HouseNumber;
    state.kitchenArea       = realty.KitchenArea;
    state.livingArea        = realty.LivingArea;
    state.flatNumber        = realty.FlatNumber;
    state.roomCount         = realty.RoomCount;
    state.price             = realty.Price;
    state.floor             = realty.Floor;

    state.readyState        = realty.ReadyState;
    state.cityDistrict      = realty.CityDistrict;
    state.district          = realty.District;
    state.comment           = realty.Comment;
    state.region            = realty.Region;
    state.street            = realty.Street;
    state.area              = realty.Area;
    state.city              = realty.City;

    state.coord             = realty.Coord;
    state.pictures          = realty.Pictures;
  },
};

export const actions = {
  clearRealty: ({ commit }) => commit('CLEAR_REALTY'),

  async loadRealties({ commit }, { page, search, isDisabled }) {
    const { Estates, EstateCount } = (await RealtiesService.loadRealties(page, search, isDisabled)).data;
    commit('SET_REALTIES', Estates);
    return {
      error: false,
      data: EstateCount,
    };
  },

  async loadRealty({ commit }, id) {
    const realty = (await RealtiesService.loadRealty(id)).data;
    commit('SET_REALTY', realty);
    return {
      error: false,
      data: realty,
    };
  },

  async createRealty({ dispatch, state }) {
    const data = (await RealtiesService.createRealty({
      realty: {
        TransactionTypeId: state.realty.transactionTypeId,
        CounterpartyId:    state.realty.counterpartyId,
        WallMaterialId:    state.realty.wallMaterialId,
        CategoryId:        state.realty.categoryId,
        RealtorId:         state.realty.realtorId,
        HouseNumber:       state.realty.houseNumber,
        KitchenArea:       state.realty.kitchenArea,
        LivingArea:        state.realty.livingArea,
        FlatNumber:        state.realty.flatNumber,
        RoomCount:         state.realty.roomCount,
        Price:             state.realty.price,
        Floor:             state.realty.floor,
        ReadyState:        state.realty.readyState,
        CityDistrict:      state.realty.cityDistrict,
        District:          state.realty.district,
        Comment:           state.realty.comment,
        Region:            state.realty.region,
        Street:            state.realty.street,
        Area:              state.realty.area,
        City:              state.realty.city,
        Coord:             state.realty.coord,
        Pictures:          state.realty.pictures,
      },
    })).data;

    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Недвижимость добавлена',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },
  async updateRealty({ dispatch, state }, id) {
    const data = (await RealtiesService.updateRealty({
      realty: {
        TransactionTypeId: state.realty.transactionTypeId,
        CounterpartyId:    state.realty.counterpartyId,
        WallMaterialId:    state.realty.wallMaterialId,
        CategoryId:        state.realty.categoryId,
        RealtorId:         state.realty.realtorId,
        HouseNumber:       state.realty.houseNumber,
        KitchenArea:       state.realty.kitchenArea,
        LivingArea:        state.realty.livingArea,
        FlatNumber:        state.realty.flatNumber,
        RoomCount:         state.realty.roomCount,
        Price:             state.realty.price,
        Floor:             state.realty.floor,
        ReadyState:        state.realty.readyState,
        CityDistrict:      state.realty.cityDistrict,
        District:          state.realty.district,
        Comment:           state.realty.comment,
        Region:            state.realty.region,
        Street:            state.realty.street,
        Area:              state.realty.area,
        City:              state.realty.city,
        Coord:             state.realty.coord,
        Pictures:          state.realty.pictures,
      },
      id,
    })).data;

    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Недвижимость изменена',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },

  async deleteRealty({ dispatch }, id) {
    await RealtiesService.deleteRealty(id);
    dispatch('notification/set', {
      message: 'Контрагент был добавлен в архив',
      type: 'error',
    }, { root: true });
    return { error: false };
  },
};

export const getters = {
  getRealties: state => state.realties,
  getRealty: state => state.realty,
};
