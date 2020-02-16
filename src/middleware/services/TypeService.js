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
}