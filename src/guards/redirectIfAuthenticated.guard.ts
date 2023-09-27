import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useUserStore } from "../store/user";

export function redirectIfAuthenticatedGuard(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const userStore = useUserStore();

  if (userStore.isAuthenticated) {
    next();
  } else {
    next("/");
  }
}
