import axios from 'axios';
import { user as storageUser } from '~/logic';
import authHeader from '~/services/auth-header';

const API_URL = '/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          storageUser.value = response.data;
        }

        return response.data;
      });
  }

  logout() {
    storageUser.value = null;
  }

  register(user) {
    return axios.post(`${API_URL}register`, {
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });
  }

  verifyToken() {
    console.log('verifying token');
    return axios.post(`${API_URL}verifyToken`, {
      authHeader,
    });
  }
}

export default new AuthService();
