export default {
  loadEmployes(page, searchString, isDisabled) {
    return this.apiClient.get('employee', { page, searchString, isDisabled });
  },
  createEmployee({ employee }) {
    return this.apiClient.post('employee', employee);
  },
  updateEmployee({ employee, id }) {
    return this.apiClient.put('employee', employee, { id });
  },
  loadEmployee(id) {
    return this.apiClient.get('employee', { id });
  },
  deleteEmployee(id) {
    return this.apiClient.delete('employee', {}, { id });
  },
  setImage({ hui, id }) {
    return this.apiClient.post('employee/set-image', hui, { id });
  },
};
