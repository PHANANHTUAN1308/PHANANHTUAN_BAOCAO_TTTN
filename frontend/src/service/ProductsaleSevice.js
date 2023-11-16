import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('productsale/index');
}

function create(product) {
    return httpAxios.post('productsale/store', product);
}
function update(product, id) {
    return httpAxios.post(`productsale/update/${id}`, product);
}
function remove(id) {
    return httpAxios.delete(`productsale/destroy/${id}`);
}
const productsaleservice ={
    getAll:getAll,
    create:create,
    update:update,
    remove:remove
}
export default productsaleservice;


