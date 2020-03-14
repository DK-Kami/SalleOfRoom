export default {
  loadWallMaterial() {
    return this.apiClient.get('service/wall-materials');
  },
  loadTransaction() {
    return this.apiClient.get('service/transaction-types');
  },
  loadCategory() {
    return this.apiClient.get('service/categories');
  },
  loadHistory({ tableName, page }) {
    return this.apiClient.get('history/all', { tableName, page });
  },
  loadRepairs() {
    return this.apiClient.get('service/repair');
  },
  loadEstateState() {
    return this.apiClient.get('service/estate-state');
  },
  loadModels() {
    return {
      data: [
        { Value: 'Estates', Text: 'Недвижимость' },
      ]
    };
  },
};
