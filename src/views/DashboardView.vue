<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="bg-white p-8 shadow-md rounded-md w-96">
      <h2 class="text-3xl font-semibold mb-4">
        Welcome, {{ user?.email || "User" }}
      </h2>
      <div class="mb-6">
        <p class="text-gray-700">
          You are now logged in. This is your dashboard.
        </p>
      </div>
      <button
        @click="logout"
        class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full transition duration-300"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { UserInterface } from "../interfaces/user.interface";
import { auth } from "../firebase/firebase";

const user: UserInterface | null = useUserStore().user;
const router = useRouter();

/** Logout function to log user out of the system **/
const logout = async () => {
  try {
    await auth.signOut();
    useUserStore().clearUser();
    //Redirecting user to login
    router.push("/");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
</script>
