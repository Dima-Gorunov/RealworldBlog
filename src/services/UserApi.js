import { authInstance, instance } from './AuthInstance';

export const UserApi = {
  registration(user) {
    return instance.post('users', user);
  },
  login(user) {
    return instance.post('users/login', user);
  },
  getUserInfo() {
    return authInstance.get('user');
  },
  getUserFullInfo(username) {
    return authInstance.get(`profiles/${username}`);
  },
  updateUser(user) {
    return authInstance.put('user', user);
  },
};

export default UserApi;
