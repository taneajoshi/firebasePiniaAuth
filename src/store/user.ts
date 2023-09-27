import { defineStore } from "pinia";
import { UserInterface } from "../interfaces/user.interface";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null as UserInterface | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(user: UserInterface) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    },
  },
});
