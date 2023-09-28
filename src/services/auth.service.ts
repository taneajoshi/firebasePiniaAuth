// src/services/authService.ts
import { Auth } from "firebase/auth";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { StorageKeys } from "../enums/StorageKeys.enum.ts";
import { useUserStore } from "../store/user";

export class AuthService {
  constructor(private auth: Auth) {}

  async login(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  //** Method to auto initialize user state on refresh **/
  public initAuth(userStore: ReturnType<typeof useUserStore>) {
    const storedUser = localStorage.getItem(StorageKeys.USER);

    if (storedUser) {
      userStore.setUser(JSON.parse(storedUser));
    }
  }
}
