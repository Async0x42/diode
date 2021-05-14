import { computed, Ref, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { useStorage } from '@vueuse/core';
import AuthService from '~/services/auth.service';

export const user = ref(useStorage('user', null)) as Ref<any | null>;
const initialState = user.value ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null };

export const state = ref(cloneDeep(initialState));

export const login = (user) => {
  return AuthService.login(user).then(
    (user) => {
      state.value.status.loggedIn = true;
      state.value.user = user;
      return Promise.resolve(user);
    },
    (error) => {
      state.value.status.loggedIn = false;
      state.value.user = null;
      return Promise.reject(error);
    }
  );
};

export const logout = () => {
  AuthService.logout();
  state.value.status.loggedIn = false;
  state.value.user = null;
};

export const register = (user) => {
  return AuthService.register(user).then(
    (response) => {
      state.value.status.loggedIn = false;
      return Promise.resolve(response.data);
    },
    (error) => {
      state.value.status.loggedIn = false;
      return Promise.reject(error);
    }
  );
};

export const verifyToken = () => {
  return AuthService.verifyToken().then(
    (response) => {
      state.value.status.loggedIn = true;
      return Promise.resolve(response.data);
    },
    (error) => {
      state.value.status.loggedIn = false;
      return Promise.reject(error);
    }
  );
};

export const hasAdminRole = computed<boolean>(() => {
  if (user.value && user.value.roles) {
    return user.value.roles.includes('ROLE_ADMIN');
  }

  return false;
});
