<template>
  <div class="flex flex-col min-h-screen bg-gray-50 py-12 justify-center sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:max-w-md sm:w-full">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="font-extrabold mt-6 text-center text-3xl text-gray-900">Register your account</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:max-w-md sm:w-full">
      <div class="bg-white shadow py-8 px-4 sm:rounded-lg sm:px-10">
        <Form :validation-schema="schema" class="space-y-6" @submit="handleRegister">
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
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="border border-transparent rounded-md flex font-medium bg-indigo-600 shadow-sm text-sm text-white w-full py-2 px-4 justify-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
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
import { state as authState, register } from '~/logic';

export default {
  name: 'Register',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required('Email is required!').email('Email is invalid!').max(50, 'Must be maximum 50 characters!'),
      password: yup.string().required('Password is required!').min(6, 'Must be at least 6 characters!').max(40, 'Must be maximum 40 characters!'),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister(user) {
      this.message = '';
      this.successful = false;
      this.loading = true;

      register(user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<route lang="yaml">
name: register

meta:
  layout: auth
</route>
