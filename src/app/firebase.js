import * as firebase from "firebase/app";
import { FIREBASE_CONFIG } from "~/const/config";

export default firebase.initializeApp(FIREBASE_CONFIG);
