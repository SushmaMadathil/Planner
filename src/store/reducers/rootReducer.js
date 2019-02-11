import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer, //update information on the auth property
  project: projectReducer, //update information on the project property
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
