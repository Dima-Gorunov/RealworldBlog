import { createSlice } from '@reduxjs/toolkit';

import { ListApi } from '../../services/ListApi';

const ListSlice = createSlice({
  name: 'ListSlice',
  initialState: {
    Lists: [],
    CurrentList: null,
    Offset: 0, //...0(page1) ...5(page2)...10(page3)...15(page4)=>
    CurrentPage: 10,
    Limit: 5,
    PageCount: 10,
    ListLoad: false,
    Tags: [],
  },
  reducers: {
    setCurrentFavorite(state, { payload }) {
      const value = payload;
      state.Lists[0].favorited = value;
      state.Lists[0].favoritesCount += value ? 1 : -1;
    },
    setFavorite(state, { payload }) {
      const { slug, value } = payload;
      const index = state.Lists.findIndex((list) => list.slug === slug);
      if (index !== -1) {
        state.Lists[index].favorited = value;
        state.Lists[index].favoritesCount += value ? 1 : -1;
      }
    },
    setCurrentList(state, { payload }) {
      state.CurrentList = payload;
    },
    addTag(state, { payload }) {
      state.Tags.push(payload);
    },
    deleteTag(state, { payload }) {
      const id = payload;
      state.Tags = state.Tags.filter((item) => item.id !== id);
    },
    setTextTag(state, { payload }) {
      const { id, text } = payload;
      const index = state.Tags.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.Tags[index].text = text;
      }
    },
    setPageCount(state, { payload }) {
      const listsCount = payload;
      const limit = state.Limit;
      state.PageCount = Math.floor(listsCount / limit);
    },
    setCurrentPage(state, { payload }) {
      const page = payload;
      state.CurrentPage = page;
    },
    setList(state, { payload }) {
      const lists = payload;
      state.Lists = lists;
    },
    setListLoad(state, { payload }) {
      state.ListLoad = payload;
    },
  },
});

export const setCurrentFavoriteThunk = (slug, value) => {
  return async (dispatch) => {
    try {
      if (value) {
        const response = await ListApi.addFavorite(slug);
        console.log(response);
      } else {
        const response = await ListApi.deleteFavorite(slug);
        console.log(response);
      }
      dispatch(setCurrentFavorite(value));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
    }
  };
};
export const setFavoriteThunk = (slug, value) => {
  return async (dispatch) => {
    try {
      if (value) {
        const response = await ListApi.addFavorite(slug);
        console.log(response);
      } else {
        const response = await ListApi.deleteFavorite(slug);
        console.log(response);
      }
      dispatch(setFavorite({ slug, value }));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
    }
  };
};
export const deleteListThunk = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.deleteList(slug);
      dispatch(setList([]));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
      dispatch(setListLoad(false));
    }
  };
};
export const updateListThunk = (data, slug) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.updateList(data, slug);
      dispatch(setCurrentList(response.data.article));
      return true;
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      return false;
    } finally {
      dispatch(setListLoad(false));
    }
  };
};

export const getAuthCurrentListThunk = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.getAuthOneList(slug);
      const { article } = response.data;
      dispatch(setList([article]));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      dispatch(setList([]));
    } finally {
      dispatch(setListLoad(false));
    }
  };
};
export const getCurrentListThunk = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.getOneList(slug);
      const { article } = response.data;
      dispatch(setList([article]));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      dispatch(setList([]));
    } finally {
      dispatch(setListLoad(false));
    }
  };
};

export const getAuthListThunk = (page) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.getListsWithAuth(page);
      dispatch(setCurrentPage(page));
      const { articles, articlesCount } = response.data;
      dispatch(setList(articles));
      dispatch(setPageCount(articlesCount));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      dispatch(setList(null));
    } finally {
      dispatch(setListLoad(false));
    }
  };
};
export const getListThunk = (page) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.getDefLists(page);
      dispatch(setCurrentPage(page));
      const { articles, articlesCount } = response.data;
      dispatch(setList(articles));
      dispatch(setPageCount(articlesCount));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      dispatch(setList(null));
    } finally {
      dispatch(setListLoad(false));
    }
  };
};

export const createListThunk = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setListLoad(true));
      const response = await ListApi.createList(data);
      return true;
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      return false;
    } finally {
      dispatch(setListLoad(false));
    }
  };
};

export const {
  setPageCount,
  setCurrentPage,
  setList,
  setListLoad,
  setTextTag,
  addTag,
  deleteTag,
  setCurrentList,
  setFavorite,
  setCurrentFavorite,
} = ListSlice.actions;
export default ListSlice.reducer;
