const UNSET_DATA = (state, newState) => {
  Object.keys(newState).forEach(prop => {
    state[prop] = newState[prop];
  })
};

export default (modules) => {
  Object.keys(modules).forEach(m => {
    let module = modules[m];

    if (!module.mutations) module.mutations = {};
    if (!module.state) module.state = module.initialState();
    if (module.namespaced === undefined) module.namespaced = true;

    module.mutations['UNSET_DATA'] = state => UNSET_DATA(state, module.initialState());
    module.responseData = {
      error: true,
      data: null,
    };
  });
  return modules;
};
