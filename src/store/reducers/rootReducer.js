import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
//syncing our redux state(server state) with database
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  //syncs the projects with redux state
  firestore: firestoreReducer,
  //it syncs our auth status in fire bse with redux state
  firebase: firebaseReducer
});

export default rootReducer;
