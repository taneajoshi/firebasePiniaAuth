import { useUserStore } from "../store/user";
import { AuthService } from "../services/auth.service";
import { auth } from "../firebase/firebase";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const authService = new AuthService(auth);

export function initAuthGuard(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const userStore = useUserStore();

  authService.initAuth(userStore);

  next();
}
