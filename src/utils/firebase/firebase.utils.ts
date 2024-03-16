import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
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

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db=getFirestore();

export const createUserDocumentFromAuth=async(userAuth:UserCredential)=>{
  const userDocRef=doc(db,'users',userAuth.user.uid);
  
  const userSnapshot=await getDoc(userDocRef);
  //if user Data exists
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth.user;
    const createdAt=new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
      });

    }catch(error:any){
      console.log("error creating the user",error.message);
    }
  }

  return userDocRef;
  //if user Data does not exist

}