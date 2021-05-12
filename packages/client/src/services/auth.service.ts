import axios from 'axios';
import { user as storageUser } from '~/logic';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}signin`, {
        username: user.username,
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
    return axios.post(`${API_URL}signup`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
