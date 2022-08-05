import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvCcCne2IvuPGn-Kn0zY6Hb5c7jFFDiws",
  authDomain: "shittytwitter.firebaseapp.com",
  projectId: "shittytwitter",
  storageBucket: "shittytwitter.appspot.com",
  messagingSenderId: "636668893320",
  appId: "1:636668893320:web:066e19a3c1581695b1673d",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const db = getDatabase();
export const auth = getAuth(app);
export const PostRef = ref(db, "post");

export const SigninWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {}
};

export const Signout = async (dispatch) => {
  signOut(auth);
};

export const getToken = async () => {
  const token = await auth.currentUser.getIdToken();
  return token;
};
