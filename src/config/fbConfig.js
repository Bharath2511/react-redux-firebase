import firebase from "firebase/app";
//importing db
import "firebase/firestore";
//authentication
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0thXFcliG3Pj8Mr14CoNPMNX5IKTBFlc",
  authDomain: "myplan-a8b1f.firebaseapp.com",
  databaseURL: "https://myplan-a8b1f.firebaseio.com",
  projectId: "myplan-a8b1f",
  storageBucket: "myplan-a8b1f.appspot.com",
  messagingSenderId: "479433269100"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
