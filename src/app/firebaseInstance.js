import * as firebase from "firebase/app";
import "firebase/auth";

import { FIREBASE_CONFIG } from "const/config";

firebase.initializeApp(FIREBASE_CONFIG);

export const authService = firebase.auth();
