
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByElpiEJoikaEsxn-2wGMKNuZcVCxkJV4",
  authDomain: "authentication-5f5fa.firebaseapp.com",
  projectId: "authentication-5f5fa",
  storageBucket: "authentication-5f5fa.appspot.com",
  messagingSenderId: "343165140698",
  appId: "1:343165140698:web:d19b84c63fb3e9ad1cefe3",
  measurementId: "G-E3E5PM2FND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
