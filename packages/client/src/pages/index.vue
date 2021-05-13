<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { state as authState, login } from '~/logic';
const router = useRouter();

const schema = yup.object().shape({
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

const loading = ref(false);
const message = ref('');
const loggedIn = computed(() => authState.value.status.loggedIn);

if (loggedIn.value) {
  router.push({ name: 'dashboard' });
}

const handleLogin = (user) => {
  loading.value = true;

  login(user).then(
    () => {
      router.push({ name: 'dashboard' });
    },
    (error) => {
      loading.value = false;
      message.value = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    }
  );
};

const handleRegister = () => {
  loading.value = true;
  router.push({ name: 'register' });
};
</script>

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
        <div class="mt-6">
          <div class="relative">
            <div class="flex inset-0 absolute items-center">
              <div class="border-t border-gray-300 w-full" />
            </div>
            <div class="flex text-sm relative justify-center">
              <span class="bg-white px-2 text-gray-500"> Or </span>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <button
                type="submit"
                :disabled="loading"
                class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm w-full py-2 px-4 text-gray-500 inline-flex justify-center hover:bg-gray-50"
                @click="handleRegister"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: login

meta:
  layout: auth
</route>
