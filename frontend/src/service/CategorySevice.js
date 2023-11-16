import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('category/index');
}
function menucate() {
    return httpAxios.get('category/menu');
}
function getById(id) {
    return httpAxios.get(`category/show/${id}`);
}
function catebygundam() {
    return httpAxios.get(`category/catebygundam`);
}
function catebytool() {
    return httpAxios.get(`category/catebytool`);
}
function getallpnull() {
    return httpAxios.get(`category/getallpnull`);
}
function create(category) {
    return httpAxios.post('category/store', category);
}
function update(category, id) {
    return httpAxios.post(`category/update/${id}`, category);
}
function remove(id) {
    return httpAxios.delete(`category/destroy/${id}`);
}
const categoryservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    menucate: menucate,
    getallpnull: getallpnull,
    catebygundam:catebygundam,
    catebytool:catebytool,
    update: update,
    remove: remove
}
export default categoryservice;


