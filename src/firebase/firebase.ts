import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY0j6wDaWAvy1uSNbeNJql9jqnacIfV8I",
  authDomain: "authfire-cc4c8.firebaseapp.com",
  projectId: "authfire-cc4c8",
  storageBucket: "authfire-cc4c8.appspot.com",
  messagingSenderId: "596194665687",
  appId: "1:596194665687:web:44b11ac092c48cf128fc92",
  measurementId: "G-M7RC1FP81T",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
