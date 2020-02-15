export default {
  loadCounterparties(page, searchString, isDisabled) {
    return this.apiClient.get('counterparty/all', { page, searchString, isDisabled });
  },
  createCounterparty({ counterparty, isAdmin }) {
    return this.apiClient.post('counterparty', counterparty);
  },
  updateCounterparty({ counterparty, id }) {
    return this.apiClient.put('counterparty', counterparty, { id });
  },
  loadCounterparty(id) {
    return this.apiClient.get('counterparty', { id });
  },
};
