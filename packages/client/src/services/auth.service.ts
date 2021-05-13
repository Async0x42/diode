import axios from 'axios';
import { user as storageUser } from '~/logic';

const API_URL = 'http://localhost:7000/';

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          storageUser.value = response.data;
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(`${API_URL}register`, {
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });
  }
}

export default new AuthService();
