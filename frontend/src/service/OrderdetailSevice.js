import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('orderdetail/index');
}
function getById(id) {
    return httpAxios.get(`orderdetail/show/${id}`);
}
function create(orderdetail) {
    return httpAxios.post('orderdetail/store', orderdetail);
}
function update(orderdetail, id) {
    return httpAxios.post(`orderdetail/update/${id}`, orderdetail);
}
function remove(id) {
}
const orderdetailservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default orderdetailservice;


