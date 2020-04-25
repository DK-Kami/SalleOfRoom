const initSearchData = () => ({
  address: 'Домодедово, ул. Центральная',
  transactionType: 'buy',
  roomType: 'room',
  roomCount: '',
  priceFrom: '',
  priceTo: '',
  city: 'dmd',
});

export const initialState = () => ({
  searchData: initSearchData(),

  transactionTypes: [
    { value: 'buy',       text: 'Купить'    },
    { value: 'takeOff',   text: 'Снять'     },
  ],
  repairTypes: [
    { value: 'good',      text: 'Хороший'               },
    { value: 'excekent',  text: 'Отличный'              },
    { value: 'dawg',      text: 'Отвратительно мощный'  },
  ],
  roomTypes: [
    { value: 'room',      text: 'Квартира'  },
    { value: 'studio',    text: 'Студия'    },
    { value: 'house',     text: 'Дом'       },
    { value: 'townhouse', text: 'Таунхауз'  },
  ],
  roomCounts: [
    '1', '2', '3', '4', '5', '6', '6+',
  ],
  cities: [
    { value: 'dmd', text: 'Домодедово' },
  ],
});

export const mutations = {
  CLEAR_SEARCH_DATA: state => state.searchData = initSearchData(),
};

export const actions = {
  clearSearchData: ({ commit }) => commit('CLEAR_SEARCH_DATA'),
};

export const getters = {
  getTransactionTypes: state => state.transactionTypes,
  getRepairTypes: state => state.repairTypes,
  getRoomCounts: state => state.roomCounts,
  getRoomTypes: state => state.roomTypes,
  getCities: state => state.cities,

  getSearchData: state => state.searchData,
}
