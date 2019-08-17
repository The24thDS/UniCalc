import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjQd_8LAmC1wVySrmHhf4rTkwyo-LEY_I",
  authDomain: "unicalc-7ca38.firebaseapp.com",
  databaseURL: "https://unicalc-7ca38.firebaseio.com",
  projectId: "unicalc-7ca38",
  storageBucket: "unicalc-7ca38.appspot.com",
  messagingSenderId: "357188087822",
  appId: "1:357188087822:web:51317b41d3865f29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export const getSemesters = async () => {
  const collectionRef = firestore.collection("semesters");
  const snapShot = await collectionRef.get();

  const semesters = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return semesters;
};

export const addSemesterAndSubjects = (semester, year, subjects) => {
  const collectionRef = firestore.collection("semesters");
  const newDocRef = collectionRef.doc();
  newDocRef.set({ semester, year, subjects });
};
