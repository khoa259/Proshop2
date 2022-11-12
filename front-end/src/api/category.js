import instance from "./instance";

export const list = () => {
  const url = `/category`;
  return instance.get(url);
};
export const remove = (id) => {
  const url = `/category/${id}`;
  return instance.delete(url);
};
export const add = (categories) => {
  const url = `/category`;
  return instance.post(url, categories);
};
export const read = (id) => {
  const url = `/category/${id}`;
  return instance.get(url);
};
export const update = (categories) => {
  const url = `/category/${categories._id}`;
  return instance.put(url, categories);
};
