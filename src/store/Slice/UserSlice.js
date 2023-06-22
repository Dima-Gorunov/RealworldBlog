import { createSlice } from '@reduxjs/toolkit';

import UserApi from '../../services/UserApi';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    User: {},
    Auth: false,
    UserLoad: false,
    AuthError: '',
    RegErrors: {
      email: '',
      username: '',
    },
  },
  reducers: {
    setAuth(state, { payload }) {
      state.Auth = payload;
    },
    setUser(state, { payload }) {
      if (!payload) {
        for (const key in state.User) {
          state.User[key] = null;
        }
      } else {
        const { email, username, image } = payload;
        state.User.email = email || state.User.email;
        state.User.username = username || state.User.username;
        state.User.image = image || 'https://api.realworld.io/images/smiley-cyrus.jpeg';
      }
    },
    setUserLoad(state, { payload }) {
      state.UserLoad = payload;
    },
    setAuthError(state, { payload }) {
      state.AuthError = payload;
    },
    setRegErrors(state, { payload }) {
      if (!payload) {
        state.RegErrors.email = '';
        state.RegErrors.username = '';
      } else {
        const { username, email, image } = payload;
        state.RegErrors.email = email;
        state.RegErrors.username = username;
        state.RegErrors.image = image;
      }
    },
    setEditErrors(state, { payload }) {},
  },
});

export const getUserInfo = () => {
  return async (dispatch) => {
    try {
      console.log('getUserInfo');
      dispatch(setUserLoad(true));
      const response = await UserApi.getUserInfo();
      const { email, username, token, image } = response.data.user;
      console.log(response);
      dispatch(setUser({ email, username, image }));
      dispatch(setAuth(true));
      localStorage.setItem('token', token);
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      localStorage.removeItem('token');
      dispatch(setAuth(false));
    } finally {
      dispatch(setUserLoad(false));
    }
  };
};

export const registrationThunk = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setRegErrors(null));
      dispatch(setUserLoad(true));
      const response = await UserApi.registration(user);
      const { email, username, token, image } = response.data.user;
      dispatch(setUser({ email, username, image }));
      dispatch(setAuth(true));
      localStorage.setItem('token', token);
    } catch (e) {
      console.log(e.response.data.errors);
      console.log(e.response?.data?.message || e.message || 'error');
      dispatch(setRegErrors(e.response.data.errors));
    } finally {
      dispatch(setUserLoad(false));
    }
  };
};
export const loginThunk = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setUserLoad(true));
      const response = await UserApi.login(user);
      const { email, username, token, image } = response.data.user;
      dispatch(setUser({ email, username, image }));
      dispatch(setAuth(true));
      localStorage.setItem('token', token);
      dispatch(setAuthError(''));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      const { status } = e.response;
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      dispatch(setAuthError(status === 422 ? 'Invalid username or password' : 'Error'));
    } finally {
      dispatch(setUserLoad(false));
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(setAuth(false));
      dispatch(setUser(false));
      localStorage.removeItem('token');
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    } finally {
    }
  };
};

export const editProfileThunk = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setUserLoad(true));
      const response = await UserApi.updateUser(user);
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.user.token);
    } catch (e) {
      console.log(e);
      console.log(e.response?.data?.message || e.message || 'error');
      dispatch(setRegErrors(e.response.data.errors));
    } finally {
      dispatch(setUserLoad(false));
    }
  };
};

export const { setUser, setAuth, setUserLoad, setAuthError, setRegErrors } = UserSlice.actions;
export default UserSlice.reducer;
