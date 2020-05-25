import services from '@/middleware';
const { EmployesService } = services;

const initialEmployee = () => ({
  firstName: '',
  secondName: '',
  lastName: '',
  position: '',
  previewImage: '',
  deletedImage: '',
  uploadImage: '',
  imageId: '',
});

export const initialState = () => ({
  employee: initialEmployee(),
  employes: [],
});

export const mutations = {
  CLEAR_EMPLOYEE: state => state.employee = initialEmployee(),
  SET_EMPLOYES: (state, employes) => state.employes = employes || [],
  SET_EMPLOYEE: (state, employee) => {
    state.employee.secondName = employee.SecondName;
    state.employee.firstName = employee.FirstName;
    state.employee.lastName = employee.LastName;
    state.employee.position = employee.Position;
    state.employee.imagesId = employee.Picture;
    state.employee.uploadImage = '';
    state.employee.previewImage = 'https://mayak-reality.com/v1/api/service/image?id=' + employee.Picture;
  },
};

export const actions = {
  clearEmployee: ({ commit }) => commit('CLEAR_EMPLOYEE'),

  async loadEmployes({ commit }, { page, search, isDisabled }) {
    const { Employees, EmployeeCount } = (await EmployesService.loadEmployes(page, search, isDisabled)).data;
    commit('SET_EMPLOYES', Employees);
    return {
      error: false,
      data: EmployeeCount,
    };
  },

  async loadEmployee({ commit }, id) {
    const employee = (await EmployesService.loadEmployee(id)).data;
    commit('SET_EMPLOYEE', employee);
    return {
      error: false,
      data: employee,
    };
  },

  async setImage(_, { id, photos }) {
    if (!photos) return;
    const fd = new FormData();
    fd.append('file', photos);
    const data = (await EmployesService.setImage({ hui: fd, id }));
    return data;
  },

  async createEmployee({ dispatch, state }) {
    const data = (await EmployesService.createEmployee({
      employee: {
        SecondName: state.employee.secondName,
        FirstName: state.employee.firstName,
        LastName: state.employee.lastName,
        Position: state.employee.position,
      }
    })).data;

    await dispatch('setImage', {
      photos: state.employee.uploadImage,
      id: data.Id,
    });

    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Сотрудник добавлен в систему',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },
  async updateEmployee({ dispatch, state }, id) {
    const data = (await EmployesService.updateEmployee({
      employee: {
        SecondName: state.employee.secondName,
        FirstName: state.employee.firstName,
        LastName: state.employee.lastName,
        Position: state.employee.position,
      },
      id,
    })).data;

    await dispatch('setImage', {
      photos: state.employee.uploadImage,
      id,
    });
    
    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Сотрудник изменён',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },

  async deleteEmployee({ dispatch }, id) {
    await EmployesService.deleteEmployee(id);
    dispatch('notification/set', {
      message: 'Сотрудник был удалён',
      type: 'error',
    }, { root: true });
    return { error: false };
  },
};

export const getters = {
  getEmployes: state => state.employes,
  getEmployee: state => state.employee,
};
