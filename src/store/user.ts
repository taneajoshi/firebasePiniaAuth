import { defineStore } from "pinia";
import { UserInterface } from "../interfaces/user.interface";
import { StorageKeys } from "../enums/StorageKeys.enum.ts";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null as UserInterface | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(user: UserInterface | null) {
      this.user = user;

      // Storing the user in localStorage
      if (user) {
        localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(StorageKeys.USER);
      }
    },
    clearUser() {
      this.user = null;
      localStorage.removeItem(StorageKeys.USER);
    },
  },
});
