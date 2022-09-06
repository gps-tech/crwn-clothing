import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,

  // onAuthStateChanged = a way for us to hook into a stream of events
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//create database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //how we create the collection
  //get me the collection within the db, and within the db what specific collection key are you looking for
  const collectionRef = collection(db, collectionKey);

  //how to store each of the objects inside of this new collection ref as a new document
  //a transaction is a word that represents a successful unit of work to a db
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//function that takes auth data and store that in firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
