import httpAxios from "../httpAxios";

function getAll() {
  return httpAxios.get(`slider/index`);
}
function getByPosition(position) {
  return httpAxios.get(`slider_list/${position}`);
}
function getById(id) {
  return httpAxios.get(`slider/show/${id}`);
}
function create(slider) {
  return httpAxios.post("slider/store", slider);
}
function remove(id) {
  return httpAxios.delete(`slider/destroy/${id}`);
}
function update(slider, id) {
  return httpAxios.post(`slider/update/${id}`, slider);
}

const sliderservice = {
  getAll: getAll,
  getByPosition: getByPosition,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default sliderservice;
