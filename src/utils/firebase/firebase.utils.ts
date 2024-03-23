import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt1Q4rwnssk2zaeqXFig50fOqup2wt-BQ",
  authDomain: "shopsee-db-f79f1.firebaseapp.com",
  projectId: "shopsee-db-f79f1",
  storageBucket: "shopsee-db-f79f1.appspot.com",
  messagingSenderId: "774353123187",
  appId: "1:774353123187:web:9ede842358ba6da48b7706",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInfo?: any
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.user.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createrAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
export const singInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);
