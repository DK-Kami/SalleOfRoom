import services from '@/middleware';
const { RealtiesService } = services;

const initialRealty = () => ({
  housingNumber: '',
  priceArea: '',

  сadastralNumber: '',
  storeysNumber: '',
  commission: '',
  roomType: '',
  message: '',
  repairs: '',
  header: '',
  status: '',

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
  price: '',
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
  realtiesTable: [],
  realties: [],

  readyStates: [
    { text: 'Готов',    value: 'ready', color: 'green'  },
    { text: 'Закрыто',  value: 'stop' , color: 'red'    },
  ],
});

export const mutations = {
  CLEAR_REALTY: state => state.realty = initialRealty(),
  SET_READY_STATE: (state, readyStates) => state.readyStates = readyStates,
  SET_REALTIES: (state, { realties, isTable }) => {
    const currentRealties = realties
      .map(realty => ({
        ...realty,
        russReadyState: russianState(state.readyStates, realty.ReadyState),
        CounterpartyName: realty.Counterparty && realty.Counterparty.Name,
        RealtorName: realty.Realtor && realty.Realtor.Name,
        PriceArea: parseFloat(realty.PriceArea).toFixed(2),
      }));

    if (isTable) {
      return state.realtiesTable = currentRealties;
    }
    return state.realties = currentRealties;
  },

  SET_REALTY: (state, realty) => {
    state.realty.priceArea         = parseFloat(realty.PriceArea).toFixed(2);
    state.realty.housingNumber     = realty.HousingNumber;

    state.realty.сadastralNumber   = realty.CadastralNumber;
    state.realty.storeysNumber     = realty.StoreysNumber;
    state.realty.commission        = realty.Commission;
    state.realty.roomType          = realty.RommType;
    state.realty.message           = realty.Message;
    state.realty.repairs           = realty.Repairs;
    state.realty.header            = realty.Header;
    state.realty.status            = realty.Status;

    state.realty.transactionType   = realty.TransactionType;
    state.realty.transactionTypeId = realty.TransactionType && realty.TransactionType.Id;
    state.realty.counterparty      = realty.Counterparty;
    state.realty.counterpartyId    = realty.Counterparty && realty.Counterparty.Id;
    state.realty.wallMaterial      = realty.WallMaterial;
    state.realty.wallMaterialId    = realty.WallMaterial && realty.WallMaterial.Id;
    state.realty.category          = realty.Category;
    state.realty.categoryId        = realty.Category && realty.Category.Id;
    state.realty.realtor           = realty.Realtor;
    state.realty.realtorId         = realty.Realtor && realty.Realtor.Id;

    state.realty.houseNumber       = realty.HouseNumber;
    state.realty.kitchenArea       = realty.KitchenArea;
    state.realty.livingArea        = realty.LivingArea;
    state.realty.flatNumber        = realty.FlatNumber;
    state.realty.roomCount         = realty.RoomCount;
    state.realty.price             = realty.Price;
    state.realty.floor             = realty.Floor;

    state.realty.russReadyState    = russianState(state.readyStates, realty.ReadyState);
    state.realty.readyState        = realty.ReadyState;
    state.realty.cityDistrict      = realty.CityDistrict;
    state.realty.district          = realty.District;
    state.realty.comment           = realty.Comment;
    state.realty.region            = realty.Region;
    state.realty.street            = realty.Street;
    state.realty.area              = realty.Area;
    state.realty.city              = realty.City;

    state.realty.coord             = realty.Coord || '55.751435, 37.620260';
    state.realty.pictures          = realty.Picture;
    state.realty.previewPictures   = realty.Pictures
      ? realty.Pictures.map(p => 'https://mayak-reality.com/v1/api/service/image?id=' + p)
      : [];
  },
};

export const actions = {
  clearRealty: ({ commit }) => commit('CLEAR_REALTY'),

  async loadRealties({ commit }, { page, search, isDisabled, isTable, my }) {
    const { Estates, EstateCount } = (await RealtiesService.loadRealties(page, search, isDisabled, isTable, my)).data;
    commit('SET_REALTIES', { realties: Estates, isTable });
    return {
      error: false,
      data: EstateCount,
    };
  },

  async applyFilters({ commit }, { filters, page, search, isDisabled, isTable, my }) {
    const { Estates, EstateCount } = (await RealtiesService.applyFilters(filters, page, search, isDisabled, isTable, my)).data;
    commit('SET_REALTIES', { realties: Estates, isTable });
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

  async setImages(_, { id, photos }) {
    if (!photos) return;
    const fd = new FormData();
    for (let i = 0; i < photos.length; i++)
      fd.append('file', photos[i]);
    const data = (await RealtiesService.setImages({ photos: fd, id }));
    return data;
  },

  async createRealty({ dispatch, state }) {
    const data = (await RealtiesService.createRealty({
      realty: {
        HousingNumber:     state.realty.housingNumber,

        CadastralNumber:   state.realty.сadastralNumber,
        StoreysNumber:     state.realty.storeysNumber,
        Commission:        state.realty.commission,
        RommType:          state.realty.roomType,
        Message:           state.realty.message,
        Repairs:           state.realty.repairs,
        Header:            state.realty.header,
        Status:            state.realty.status,

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
      },
    })).data;

    await dispatch('setImages', {
      photos: state.realty.pictures,
      id: data.Id,
    });

    if (data.Message && data.ModelState) {
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
        HousingNumber:     state.realty.housingNumber,
        PriceArea:         state.realty.priceArea,

        CadastralNumber:   state.realty.сadastralNumber,
        StoreysNumber:     state.realty.storeysNumber,
        Commission:        state.realty.commission,
        RommType:          state.realty.roomType,
        Message:           state.realty.message,
        Repairs:           state.realty.repairs,
        Header:            state.realty.header,
        Status:            state.realty.status,

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
      },
      id,
    })).data;

    await dispatch('setImages', {
      photos: state.realty.pictures,
      id,
    });

    if (data.Message && data.ModelState) {
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
      message: 'Недвижимость была добавлен в архив',
      type: 'error',
    }, { root: true });
    return { error: false };
  },
  async loadReadyState({ commit }) {
    const data = (await RealtiesService.loadReadyState()).data;
    commit('SET_READY_STATE', data);
  },
};

export const getters = {
  getReadyStates: state => state.readyStates,
  getRealties: state =>
    (isTable = false) =>
      isTable ? state.realtiesTable : state.realties,
  getRealty: state => state.realty,
};


function createFormData(realty) {
  let fd = new FormData();
  Object.keys(realty).forEach(key => {
    const data = realty[key];
    fd.append(key, data);
  })
  return fd;
};

function russianState(readyStates, readyState) {
  if (!readyState) return '';
  const state = readyStates.find(s => s.value === readyState);
  return state ? state.text : '';
};
