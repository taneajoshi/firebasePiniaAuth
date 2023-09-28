import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useUserStore } from "../store/user";

export function isAuthenticatedGuard(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const userStore = useUserStore();

  if (!userStore.user) {
    console.log(userStore.user);
    next();
  } else {
    next("/dashboard");
  }
}
