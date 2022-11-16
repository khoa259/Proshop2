import instance from "./instance";

export const list = () => {
  const url = `/products`;
  return instance.get(url);
};
export const remove = (_id) => {
  const url = `/products/${_id}`;
  return instance.delete(url);
};
export const add = (product) => {
  const url = `/products`;
  return instance.post(url, product);
};
export const read = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const update = (product) => {
  const url = `products/${product._id}`;
  return instance.put(url, product);
};
export const search = () => {
  const url = `/products?name=${value}`;
  return instance.get(url);
};
