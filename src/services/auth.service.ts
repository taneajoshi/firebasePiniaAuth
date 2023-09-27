// src/services/authService.ts
import { Auth } from "firebase/auth";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";

export class AuthService {
  constructor(private auth: Auth) {}
  async login(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}
