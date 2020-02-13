import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCc9730aqq9UNRMAqGMVQm8ACJvs3UVepI",
  authDomain: "unicalc2.firebaseapp.com",
  databaseURL: "https://unicalc2.firebaseio.com",
  projectId: "unicalc2",
  storageBucket: "unicalc2.appspot.com",
  messagingSenderId: "171403314479",
  appId: "1:171403314479:web:e39fc8ffd865c24b9e8dda",
  measurementId: "G-HYZJNYEYXC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestore = firebase.firestore();

export const getSemester = async semesterId => {
  const collectionRef = firestore.collection("semesters");
  const docRef = collectionRef.doc(semesterId);
  const snapshot = await docRef.get();
  if (snapshot.exists) {
    return snapshot.data();
  } else return null;
};

export const createSemesterWithSubjects = (subjects, name) => {
  const collectionRef = firestore.collection("semesters");
  const newDocRef = collectionRef.doc();
  newDocRef.set({ subjects, name });
  return newDocRef.id;
};
