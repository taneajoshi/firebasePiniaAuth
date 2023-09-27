<template>
  <div class="min-h-screen py-8 flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-96">
      <h2 class="text-3xl font-semibold mb-4">Login</h2>
      <div
        v-if="errorMessage"
        class="bg-red-500 text-white py-2 px-4 rounded-md mb-4"
      >
        {{ errorMessage }}
      </div>
      <form @submit.prevent="login" @enter.prevent="login" class="space-y-4">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 mb-2"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            class="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import { auth } from "../firebase/firebase";
import { AuthService } from "../services/auth.service";
import { useRouter } from "vue-router";
import { UserInterface } from "../interfaces/user.interface";

const email = ref("");
const password = ref("");
const errorMessage = ref(null);

const router = useRouter();

const authService = new AuthService(auth);

/** Login function to log user in the system **/
const login = async () => {
  try {
    const userCredential = await authService.login(email.value, password.value);
    useUserStore().setUser(userCredential.user as UserInterface);
    router.push("/dashboard");
  } catch (error: any) {
    console.error("Login error:", error.message);
    errorMessage.value = error.message;
  }
};
</script>
