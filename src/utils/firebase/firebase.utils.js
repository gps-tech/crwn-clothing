import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// this config is an object that allows us to attach this firebase instance to the one that is online

const firebaseConfig = {
  apiKey: "AIzaSyCCIiMxB8mU4PJGNLgdL_CaO65lLKQhkqg",
  authDomain: "crwn-clothing-db-9c248.firebaseapp.com",
  projectId: "crwn-clothing-db-9c248",
  storageBucket: "crwn-clothing-db-9c248.appspot.com",
  messagingSenderId: "976999656779",
  appId: "1:976999656779:web:50528a8f8783627a828cce",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//create database
export const db = getFirestore();

//function that takes auth data and store that in firestore
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  //snapshot allows us to check if an instance of it exists in db
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists);

  // if userSnapshot does NOT exists
  if (!userSnapshot.exists()) {
    //set it inside of our database
    const { displayName, email } = userAuth;
    // seeing when user signs in
    const createdAt = new Date();

    try {
      //set the doc with this object
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};
