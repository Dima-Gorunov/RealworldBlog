import { authInstance, instance } from './AuthInstance';

export const ListApi = {
  getDefLists(page = 1, limit = 5) {
    const offset = page * 5 - 5;
    return instance.get(`articles?offset=${offset}&limit=${limit}`);
  },
  getListsWithAuth(page = 1, limit = 5) {
    const offset = page * 5 - 5;
    return authInstance.get(`articles?offset=${offset}&limit=${limit}`);
  },
  createList(data) {
    return authInstance.post('articles', data);
  },
  getOneList(slug) {
    return instance.get(`articles/${slug}`);
  },
  getAuthOneList(slug) {
    return authInstance.get(`articles/${slug}`);
  },
  updateList(data, slug) {
    return authInstance.put(`articles/${slug}`, data);
  },
  deleteList(slug) {
    return authInstance.delete(`articles/${slug}`);
  },
  addFavorite(slug) {
    return authInstance.post(`articles/${slug}/favorite`);
  },
  deleteFavorite(slug) {
    return authInstance.delete(`articles/${slug}/favorite`);
  },
};
