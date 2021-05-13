<template>
  <div class="flex flex-col min-h-screen bg-gray-50 py-12 justify-center sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:max-w-md sm:w-full">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="font-extrabold mt-6 text-center text-3xl text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:max-w-md sm:w-full">
      <div class="bg-white shadow py-8 px-4 sm:rounded-lg sm:px-10">
        <Form :validation-schema="schema" class="space-y-6" @submit="handleLogin">
          <div class="form-group">
            <label for="email" class="font-medium text-sm text-gray-700 block"> Email address </label>
            <div class="mt-1">
              <Field
                id="email"
                name="email"
                type="email"
                required
                autocomplete="email"
                class="border rounded-md border-gray-300 shadow-sm w-full py-2 px-3 placeholder-gray-400 appearance-none block sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
          </div>

          <div class="form-group">
            <label for="password" class="font-medium text-sm text-gray-700 block"> Password </label>
            <div class="mt-1">
              <Field
                id="password"
                name="password"
                type="password"
                required
                autocomplete="current-password"
                class="border rounded-md border-gray-300 shadow-sm w-full py-2 px-3 placeholder-gray-400 appearance-none block sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="password" class="error-feedback" />
              <input />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="rounded border-gray-300 h-4 text-indigo-600 w-4 focus:ring-indigo-500"
              />
              <label for="remember_me" class="text-sm ml-2 text-gray-900 block"> Remember me </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="border border-transparent rounded-md flex font-medium bg-indigo-600 shadow-sm text-sm text-white w-full py-2 px-4 justify-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { state as authState, login } from '~/logic';

export default {
  name: 'Login',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required('Username is required!'),
      password: yup.string().required('Password is required!'),
    });

    return {
      loading: false,
      message: '',
      schema,
    };
  },
  computed: {
    loggedIn() {
      return authState.value.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      login(user).then(
        () => {
          this.$router.push('/profile');
        },
        (error) => {
          this.loading = false;
          this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        }
      );
    },
  },
};
</script>

<route lang="yaml">
name: login

meta:
  layout: auth
</route>
