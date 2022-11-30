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
  console.log(product)
  const url = `/products`;
  return instance.post(url, product,{
    headers: { 'Content-Type': 'multipart/form-data' }
  } );
};
export const read = (id) => {
  console.log(id)
  const url = `/products/${id}`;
  return instance.get(url);
};
export const update = (prams, product) => {
  const url = `products/${prams}`;
  return instance.put(url, product);
};
export const search = () => {
  const url = `/products?name=${value}`;
  return instance.get(url);
};
