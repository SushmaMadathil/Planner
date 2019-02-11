import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
//firbase is a NoSQL database
var config = {
  apiKey: "AIzaSyCHeEI8aNRewXeCyYOuunKsjYv5UQ2ReF0",
  authDomain: "planner-ed7fe.firebaseapp.com",
  databaseURL: "https://planner-ed7fe.firebaseio.com",
  projectId: "planner-ed7fe",
  storageBucket: "planner-ed7fe.appspot.com",
  messagingSenderId: "442144474475"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
