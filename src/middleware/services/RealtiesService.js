export default {
  loadRealties(page) {
    return this.apiClient.get('estate/all', { page });
  },
  // createRealty({ realty, isAdmin }) {
  //   return this.apiClient.post('realty', realty);
  // },
  // updateRealty({ realty, id }) {
  //   return this.apiClient.put('realty', realty, { id });
  // },
  // loadRealty(id) {
  //   return this.apiClient.get('realty', { id });
  // },
  // deleteRealty(id) {
  //   return this.apiClient.delete('realty', {}, { id });
  // },
};
