import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgy0Jb2IIt0T8hhrObM13YDhrA7TmX9kA",
  authDomain: "modern-webdev-ehu-2024-2025.firebaseapp.com",
  projectId: "modern-webdev-ehu-2024-2025",
  storageBucket: "modern-webdev-ehu-2024-2025.firebasestorage.app",
  messagingSenderId: "375280173564",
  appId: "1:375280173564:web:aa674f066aa6192c69f279"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();