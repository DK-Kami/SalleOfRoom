export default {
  loadRealties(page, searchString) {
    return this.apiClient.get('estate/all', { page, searchString });
  },
  createRealty({ realty }) {
    return this.apiClient.post('Estate', realty);
  },
  updateRealty({ realty, id }) {
    return this.apiClient.put('realty', realty, { id });
  },
  setImages({ photos, id }) {
    return this.apiClient.post('estate/set-images', photos, { id });
  },
  loadRealty(id) {
    return this.apiClient.get('estate', { id });
  },
  deleteRealty(id) {
    return this.apiClient.delete('Estate', {}, { id });
  },

  applyFilters(filters, page, searchString, isDisabled) {
    return this.apiClient.post('estate/all', filters, { page, searchString, isDisabled});
  },
  loadReadyState() {
    return this.apiClient.get('service/ready-state');
  },
};
